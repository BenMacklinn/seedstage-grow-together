import { useRef, useEffect, useCallback, useState } from "react";
import './InfiniteScroll.css';

export default function InfiniteScroll({
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [],
  itemMinHeight = 150,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "down",
  pauseOnHover = false,
  showPlayButton = true,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastDragTime, setLastDragTime] = useState(0);

  const getTiltTransform = () => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  const updatePositions = useCallback((offset: number) => {
    const container = containerRef.current;
    if (!container) return;

    const divItems = Array.from(container.children) as HTMLElement[];
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(getComputedStyle(firstItem).marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight = totalItemHeight * items.length;

    divItems.forEach((child, index) => {
      let y = index * totalItemHeight + offset;
      
      // Wrap around when item goes out of bounds
      if (y >= totalHeight) {
        y -= totalHeight;
      } else if (y <= -totalItemHeight) {
        y += totalHeight;
      }
      
      child.style.transform = `translateY(${y}px)`;
    });
  }, [items]);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentTime = Date.now();
    const deltaY = e.clientY - dragStartY;
    const deltaTime = currentTime - lastDragTime;
    
    // Calculate velocity for momentum
    if (deltaTime > 0) {
      const newVelocity = (deltaY * 2.5) / deltaTime;
      setVelocity(newVelocity);
    }
    
    // Increase sensitivity - make it feel more responsive
    const sensitivity = 2.5;
    const newOffset = currentOffset + (deltaY * sensitivity);
    setCurrentOffset(newOffset);
    updatePositions(newOffset);
    setDragStartY(e.clientY);
    setLastDragTime(currentTime);
  }, [isDragging, dragStartY, currentOffset, updatePositions, lastDragTime]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    // Add momentum effect
    if (Math.abs(velocity) > 0.1) {
      const momentum = () => {
        setCurrentOffset(prev => {
          const newOffset = prev + velocity * 0.95; // Decay factor
          updatePositions(newOffset);
          return newOffset;
        });
        setVelocity(prev => prev * 0.95); // Decay velocity
        
        if (Math.abs(velocity) > 0.1) {
          requestAnimationFrame(momentum);
        }
      };
      requestAnimationFrame(momentum);
    }
  }, [velocity, updatePositions]);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (items.length === 0) return;

    const divItems = Array.from(container.children) as HTMLElement[];
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(getComputedStyle(firstItem).marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;

    // Initialize positions
    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      child.style.transform = `translateY(${y}px)`;
    });

    // Initialize positions
    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      child.style.transform = `translateY(${y}px)`;
    });

    // No autoplay - only mouse drag control
    return () => {
      // Cleanup not needed for mouse drag
    };
  }, [items, updatePositions]);

  return (
    <>
      <style>
        {`
        .infinite-scroll-wrapper {
          max-height: ${maxHeight};
          position: relative;
          pointer-events: auto;
          will-change: transform;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        .infinite-scroll-wrapper:active {
          cursor: grabbing;
        }

        .infinite-scroll-container {
          width: ${width};
          pointer-events: auto;
          cursor: grab;
          will-change: transform;
          transition: none;
        }

        .infinite-scroll-item {
          height: ${itemMinHeight}px;
          margin-top: ${negativeMargin};
          pointer-events: none;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          opacity: 1;
          will-change: transform;
          transform-style: preserve-3d;
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: transparent;
        }


        `}
      </style>

      <div 
        className="infinite-scroll-wrapper" 
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="infinite-scroll-container"
          ref={containerRef}
          style={{
            transform: getTiltTransform(),
          }}
        >
          {items.map((item, i) => (
            <div
              className='infinite-scroll-item'
              key={i}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 