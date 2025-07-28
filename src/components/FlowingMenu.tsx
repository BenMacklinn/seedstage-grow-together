import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Globe, Workflow, Brain, Eye } from 'lucide-react';
import './FlowingMenu.css';

interface SoftwareItem {
  name: string;
  logo: string;
}

interface MenuItem {
  link: string;
  text: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  software: SoftwareItem[];
}

interface FlowingMenuProps {
  items: MenuItem[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    const menuItems = menuRef.current.querySelectorAll('.menu__item');
    
    menuItems.forEach((item) => {
      const link = item.querySelector('.menu__item-link') as HTMLElement;
      const marquee = item.querySelector('.marquee') as HTMLElement;
      
      if (!link || !marquee) return;

      link.addEventListener('mouseenter', () => {
        gsap.to(marquee, {
          y: '0%',
          duration: 0.6,
          ease: 'power2.out'
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(marquee, {
          y: '101%',
          duration: 0.6,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      menuItems.forEach((item) => {
        const link = item.querySelector('.menu__item-link') as HTMLElement;
        if (link) {
          link.removeEventListener('mouseenter', () => {});
          link.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, [items]);

  return (
    <div className="menu-wrap" ref={menuRef}>
      <nav className="menu">
        {items.map((item, index) => (
          <div key={index} className="menu__item">
            <a href={item.link} className="menu__item-link">
              <item.icon className="menu__item-icon" />
              <span className="menu__item-text">{item.text}</span>
            </a>
            <div className="marquee">
              <div className="marquee__inner-wrap">
                <div className="marquee__inner">
                  {/* First set of content */}
                  {item.software.map((software, softwareIndex) => (
                    <React.Fragment key={softwareIndex}>
                      <span className="marquee__software-text">{software.name}</span>
                      <img 
                        src={software.logo} 
                        alt={`${software.name} logo`}
                        className="marquee__logo"
                      />
                    </React.Fragment>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {item.software.map((software, softwareIndex) => (
                    <React.Fragment key={`duplicate-${softwareIndex}`}>
                      <span className="marquee__software-text">{software.name}</span>
                      <img 
                        src={software.logo} 
                        alt={`${software.name} logo`}
                        className="marquee__logo"
                      />
                    </React.Fragment>
                  ))}
                  {/* Third set to ensure smooth transition */}
                  {item.software.map((software, softwareIndex) => (
                    <React.Fragment key={`triplicate-${softwareIndex}`}>
                      <span className="marquee__software-text">{software.name}</span>
                      <img 
                        src={software.logo} 
                        alt={`${software.name} logo`}
                        className="marquee__logo"
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default FlowingMenu; 