import { MenuItem } from '@/data/menu';

interface MenuItemRowProps {
  item: MenuItem;
}

export const MenuItemRow = ({ item }: MenuItemRowProps) => {
  return (
    <div className="flex items-start justify-between border-b border-slate-200 pb-2 mb-2 last:border-b-0 last:mb-0">
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-900 mb-1">{item.name}</h3>
        {item.description && (
          <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
        )}
      </div>
      <div className="ml-auto shrink-0 text-lg font-semibold text-[hsl(145,63%,49%)]">
        {item.price}
      </div>
    </div>
  );
};