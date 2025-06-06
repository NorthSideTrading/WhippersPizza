import { useState, useEffect } from 'react';
import { MENU } from '@/data/menu';

interface CategoryNavProps {
  isSidebar?: boolean;
}

export const CategoryNav = ({ isSidebar = false }: CategoryNavProps) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -70% 0px'
      }
    );

    MENU.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navClasses = isSidebar
    ? "space-y-2"
    : "grid grid-cols-2 sm:flex gap-2 sm:gap-3 py-4 px-4 bg-white shadow-sm sm:overflow-x-auto sm:scrollbar-hide";

  const buttonBaseClasses = "px-3 py-2 rounded-full font-medium transition-all duration-200 text-sm";
  
  return (
    <nav className={navClasses} aria-label="Menu categories">
      {MENU.map((section) => {
        const isActive = activeSection === section.id;
        const buttonClasses = isSidebar
          ? `${buttonBaseClasses} w-full text-left ${
              isActive
                ? 'bg-[hsl(5,65%,40%)] text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`
          : `${buttonBaseClasses} sm:whitespace-nowrap text-center ${
              isActive
                ? 'bg-[hsl(5,65%,40%)] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`;

        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={buttonClasses}
            aria-label={`Go to ${section.title} section`}
          >
            {section.title}
          </button>
        );
      })}
    </nav>
  );
};