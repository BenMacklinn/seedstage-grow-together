import { useEffect, useRef, useState } from "react";

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  className = "",
  separator = "",
}: {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  separator?: string;
}) {
  const ref = useRef(null);
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            console.log('CountUp animation triggered:', { from, to });
            setHasAnimated(true);
            
            const startTime = Date.now();
            const startValue = from;
            const endValue = to;
            const totalChange = endValue - startValue;

            const timer = setInterval(() => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / (duration * 1000), 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = startValue + (totalChange * easeOutQuart);
              
              setCount(Math.floor(currentValue));
              
              if (progress >= 1) {
                setCount(endValue);
                clearInterval(timer);
              }
            }, 16); // ~60fps

            return () => clearInterval(timer);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [from, to, duration, hasAnimated]);

  const formatNumber = (num: number) => {
    const hasDecimals = to.toString().includes('.') || from.toString().includes('.');
    const maxDecimals = hasDecimals ? 1 : 0;

    const options = {
      useGrouping: !!separator,
      minimumFractionDigits: hasDecimals ? maxDecimals : 0,
      maximumFractionDigits: hasDecimals ? maxDecimals : 0,
    };

    const formattedNumber = Intl.NumberFormat("en-US", options).format(num);
    return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
  };

  return <span className={className} ref={ref}>{formatNumber(count)}</span>;
} 