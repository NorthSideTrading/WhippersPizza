import { MenuSection as MenuSectionType } from '@/data/menu';
import { MenuItemRow } from './MenuItemRow';

interface MenuSectionProps {
  section: MenuSectionType;
}

export const MenuSection = ({ section }: MenuSectionProps) => {
  return (
    <section 
      id={section.id} 
      className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 animate-[fadeUp_.4s_ease-out]"
    >
      <h2 className="text-3xl lg:text-4xl font-bold tracking-wide uppercase mb-4 text-[hsl(212,40%,18%)]">
        {section.title}
      </h2>
      <div className="space-y-3">
        {section.items.map((item, index) => (
          <MenuItemRow key={`${section.id}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
};