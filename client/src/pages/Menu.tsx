import { Helmet } from 'react-helmet-async';

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu - Whippers Pizza | Augusta, ME</title>
        <meta name="description" content="Explore our menu of delicious, hand-crafted pizzas, fresh calzones, savory sides, and beverages. Something for everyone at Whippers Pizza!" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-[#B71C1C] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-2xl mx-auto">Hand-crafted with love and the finest ingredients</p>
        </div>
      </div>

      {/* Menu Navigation */}
      <div className="sticky top-[72px] z-20 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-wrap justify-center space-x-2 md:space-x-8">
            <li><a href="#pizzas" className="px-3 py-2 text-[#B71C1C] font-bold hover:underline">Pizzas</a></li>
            <li><a href="#calzones" className="px-3 py-2 text-[#B71C1C] font-bold hover:underline">Calzones</a></li>
            <li><a href="#sides" className="px-3 py-2 text-[#B71C1C] font-bold hover:underline">Sides</a></li>
            <li><a href="#drinks" className="px-3 py-2 text-[#B71C1C] font-bold hover:underline">Drinks</a></li>
          </ul>
        </div>
      </div>

      {/* Pizzas Section */}
      <section id="pizzas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#8BC34A] pb-2">Pizzas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Margherita Special</h3>
                  <p className="text-gray-700 mb-2">Our classic pizza with premium buffalo mozzarella, fresh basil, and San Marzano tomatoes.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$14.99</span>
              </div>
              <div className="text-sm text-gray-500">Available in: Small (+$2), Medium, Large (+$4)</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Double Pepperoni Feast</h3>
                  <p className="text-gray-700 mb-2">Loaded with twice the pepperoni, extra cheese, and our secret spice blend on a perfectly crisp crust.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$16.99</span>
              </div>
              <div className="text-sm text-gray-500">Available in: Small (+$2), Medium, Large (+$4)</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Garden Veggie Delight</h3>
                  <p className="text-gray-700 mb-2">Fresh seasonal vegetables, roasted bell peppers, olives, and mushrooms on our signature herb-infused sauce.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$15.99</span>
              </div>
              <div className="text-sm text-gray-500">Available in: Small (+$2), Medium, Large (+$4)</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Meat Lover's Supreme</h3>
                  <p className="text-gray-700 mb-2">Pepperoni, Italian sausage, bacon, ham, and ground beef with our three-cheese blend.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$18.99</span>
              </div>
              <div className="text-sm text-gray-500">Available in: Small (+$2), Medium, Large (+$4)</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">BBQ Chicken</h3>
                  <p className="text-gray-700 mb-2">Grilled chicken, red onions, and cilantro on our tangy BBQ sauce base with smoked gouda and mozzarella.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$17.99</span>
              </div>
              <div className="text-sm text-gray-500">Available in: Small (+$2), Medium, Large (+$4)</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Whippers Special</h3>
                  <p className="text-gray-700 mb-2">Our signature combination of pepperoni, Italian sausage, mushrooms, green peppers, onions, and black olives.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$19.99</span>
              </div>
              <div className="text-sm text-gray-500">Available in: Small (+$2), Medium, Large (+$4)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calzones Section */}
      <section id="calzones" className="py-16 bg-[#FFF9C4] bg-opacity-30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#8BC34A] pb-2">Calzones</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Classic Cheese</h3>
                  <p className="text-gray-700 mb-2">Ricotta and mozzarella cheese blend with a touch of garlic and herbs, served with marinara on the side.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$12.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Meat Lover's Calzone</h3>
                  <p className="text-gray-700 mb-2">Pepperoni, bacon, sausage, ham with our cheese blend, served with marinara sauce.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$15.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Veggie Garden</h3>
                  <p className="text-gray-700 mb-2">Spinach, mushrooms, bell peppers, onions, and tomatoes with our cheese blend, served with marinara sauce.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$14.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Build Your Own</h3>
                  <p className="text-gray-700 mb-2">Choose up to 3 toppings with our cheese blend, served with marinara sauce.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$13.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sides Section */}
      <section id="sides" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#8BC34A] pb-2">Sides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Garlic Knots</h3>
                  <p className="text-gray-700 mb-2">Six freshly baked knots brushed with garlic butter and dusted with parmesan. Served with marinara sauce.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$5.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Mozzarella Sticks</h3>
                  <p className="text-gray-700 mb-2">Eight crispy breaded mozzarella sticks served with our homemade marinara sauce.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$7.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Caesar Salad</h3>
                  <p className="text-gray-700 mb-2">Fresh romaine lettuce with our Caesar dressing, croutons, and shaved parmesan cheese.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$6.99</span>
              </div>
              <div className="text-sm text-gray-500">Add grilled chicken +$3.00</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Buffalo Wings</h3>
                  <p className="text-gray-700 mb-2">Ten crispy chicken wings tossed in your choice of sauce: Mild, Hot, BBQ, or Garlic Parmesan.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$12.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <section id="drinks" className="py-16 bg-[#FFF9C4] bg-opacity-30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#8BC34A] pb-2">Drinks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Fountain Sodas</h3>
                  <p className="text-gray-700 mb-2">Coca-Cola, Diet Coke, Sprite, Root Beer, or Lemonade.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$2.49</span>
              </div>
              <div className="text-sm text-gray-500">Available in: Small, Medium (+$0.50), Large (+$1.00)</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Bottled Drinks</h3>
                  <p className="text-gray-700 mb-2">Water, Sparkling Water, or Italian Soda (various flavors).</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$2.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Draft Beer</h3>
                  <p className="text-gray-700 mb-2">Selection of local and imported beers. Ask your server for current offerings.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$5.99</span>
              </div>
              <div className="text-sm text-gray-500">Must be 21+ with valid ID</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">House Wine</h3>
                  <p className="text-gray-700 mb-2">Red or white wine by the glass. Ask your server for current selections.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$6.99</span>
              </div>
              <div className="text-sm text-gray-500">Must be 21+ with valid ID</div>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-[#B71C1C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Place Your Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Call us for takeout or delivery, or stop by for a fantastic dine-in experience!</p>
          <a 
            href="tel:+12075557492" 
            className="bg-[#8BC34A] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
          >
            Call Now: (207) 555-PIZA
          </a>
        </div>
      </section>
    </>
  );
};

export default Menu;
