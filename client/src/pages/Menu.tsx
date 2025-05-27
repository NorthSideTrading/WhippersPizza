import { Helmet } from 'react-helmet-async';
import { MENU } from '@/data/menu';
import { CategoryNav } from '@/components/CategoryNav';
import { MenuSection } from '@/components/MenuSection';

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu | Whippers Pizza</title>
        <meta name="description" content="Explore our menu of delicious, hand-crafted pizzas, fresh calzones, savory sides, and beverages. Something for everyone at Whippers Pizza!" />
      </Helmet>

      <main className="mx-auto max-w-6xl px-4 pt-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[hsl(212,40%,18%)] mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hand-crafted with love and the finest ingredients since 1983</p>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden sticky top-16 z-20 bg-white border-b border-gray-200 mb-8">
          <CategoryNav />
        </div>

        {/* Desktop Layout */}
        <div className="lg:grid lg:grid-cols-5 lg:gap-10">
          {/* Sidebar Navigation - Desktop Only */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <CategoryNav isSidebar />
            </div>
          </aside>

          {/* Menu Content */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {MENU.map((section) => (
                <MenuSection key={section.id} section={section} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[hsl(212,40%,18%)] mb-4">Ready to Place Your Order?</h2>
          <p className="text-gray-600 mb-6">Call us for takeout or dine-in, or stop by for a fantastic experience!</p>
          <a 
            href="tel:+12076221471" 
            className="bg-[hsl(145,63%,49%)] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
          >
            Call Now: (207) 622-1471
          </a>
        </div>
      </main>
    </>
  );
};

export default Menu;