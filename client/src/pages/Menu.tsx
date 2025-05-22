import { Helmet } from 'react-helmet-async';

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu - Whippers Pizza | Augusta, ME</title>
        <meta name="description" content="Explore our menu of delicious, hand-crafted pizzas, fresh calzones, savory sides, and beverages. Something for everyone at Whippers Pizza!" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-[hsl(212,40%,18%)] bg-opacity-95 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-[hsl(145,63%,49%)] font-medium mb-2 block uppercase tracking-wider">Delicious Options</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/80">Hand-crafted with love and the finest ingredients since 1983</p>
          <div className="w-24 h-1 bg-[hsl(145,63%,49%)] mx-auto mt-8"></div>
        </div>
      </div>

      {/* Menu Navigation */}
      <div className="sticky top-[72px] z-20 bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center mb-6 text-gray-700 max-w-3xl mx-auto">All our pizzas feature homemade dough and sauce, made fresh daily! Discover our delicious pizzas, classic sandwiches, tasty sides, and refreshing drinks.</p>
          <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
            <li><a href="#pizzas" className="px-4 py-2 text-[hsl(212,40%,18%)] font-medium hover:text-[hsl(145,63%,49%)] transition-colors duration-200 border-b-2 border-transparent hover:border-[hsl(145,63%,49%)]">Pizza</a></li>
            <li><a href="#gluten-free" className="px-4 py-2 text-[hsl(212,40%,18%)] font-medium hover:text-[hsl(145,63%,49%)] transition-colors duration-200 border-b-2 border-transparent hover:border-[hsl(145,63%,49%)]">Gluten Free</a></li>
            <li><a href="#calzones" className="px-4 py-2 text-[hsl(212,40%,18%)] font-medium hover:text-[hsl(145,63%,49%)] transition-colors duration-200 border-b-2 border-transparent hover:border-[hsl(145,63%,49%)]">Calzones</a></li>
            <li><a href="#hot-sandwiches" className="px-4 py-2 text-[hsl(212,40%,18%)] font-medium hover:text-[hsl(145,63%,49%)] transition-colors duration-200 border-b-2 border-transparent hover:border-[hsl(145,63%,49%)]">Hot Sandwiches</a></li>
            <li><a href="#cold-sandwiches" className="px-4 py-2 text-[hsl(212,40%,18%)] font-medium hover:text-[hsl(145,63%,49%)] transition-colors duration-200 border-b-2 border-transparent hover:border-[hsl(145,63%,49%)]">Cold Sandwiches</a></li>
            <li><a href="#salads" className="px-4 py-2 text-[hsl(212,40%,18%)] font-medium hover:text-[hsl(145,63%,49%)] transition-colors duration-200 border-b-2 border-transparent hover:border-[hsl(145,63%,49%)]">Salads</a></li>
            <li><a href="#sides" className="px-4 py-2 text-[hsl(212,40%,18%)] font-medium hover:text-[hsl(145,63%,49%)] transition-colors duration-200 border-b-2 border-transparent hover:border-[hsl(145,63%,49%)]">Sides</a></li>
            <li><a href="#drinks" className="px-4 py-2 text-[hsl(212,40%,18%)] font-medium hover:text-[hsl(145,63%,49%)] transition-colors duration-200 border-b-2 border-transparent hover:border-[hsl(145,63%,49%)]">Drinks</a></li>
          </ul>
        </div>
      </div>

      {/* Pizzas Section */}
      <section id="pizzas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <span className="text-[hsl(145,63%,49%)] font-medium mb-2 block uppercase tracking-wider">Our Specialty</span>
            <h2 className="text-3xl font-bold mb-4 text-[hsl(212,40%,18%)]">Pizza</h2>
            <div className="w-16 h-1 bg-[hsl(145,63%,49%)] mb-8"></div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4">Cheese Pizza</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-bold mb-2">Small 10"</h4>
                <p className="text-[#B71C1C] font-bold">$9.75</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-bold mb-2">Medium 12"</h4>
                <p className="text-[#B71C1C] font-bold">$12.75</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-bold mb-2">Large 14"</h4>
                <p className="text-[#B71C1C] font-bold">$15.50</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-bold mb-2">X-Large 16"</h4>
                <p className="text-[#B71C1C] font-bold">$17.99</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">Regular Toppings</h4>
                <p className="text-gray-700 mb-4">Pepperoni, Hamburg, Sausage, Ham, Bacon, Mushrooms, Onions, Green Peppers, Black Olives, Jalapeños, Pineapple, Tomatoes, Garlic</p>
                <div className="text-sm text-gray-500">Prices vary by size: Small $1.50, Medium $1.75, Large $2.00, X-Large $2.50</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">Premium Toppings</h4>
                <p className="text-gray-700 mb-4">Extra Cheese, Chicken, Steak, Anchovies, Spinach, Broccoli, Feta Cheese</p>
                <div className="text-sm text-gray-500">Prices vary by size: Small $2.00, Medium $2.50, Large $3.00, X-Large $3.50</div>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Specialty Pizzas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">The Whipper</h3>
                  <p className="text-gray-700 mb-2">Pepperoni, hamburg, sausage, mushrooms, onions, green peppers.</p>
                </div>
              </div>
              <div className="text-sm text-gray-700 mt-2">
                <span className="font-semibold">Sm: $14.99</span> • 
                <span className="font-semibold"> Med: $18.99</span> • 
                <span className="font-semibold"> Lg: $23.99</span> • 
                <span className="font-semibold"> XLg: $27.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">All Meat</h3>
                  <p className="text-gray-700 mb-2">Pepperoni, hamburg, ham, sausage, bacon.</p>
                </div>
              </div>
              <div className="text-sm text-gray-700 mt-2">
                <span className="font-semibold">Sm: $14.99</span> • 
                <span className="font-semibold"> Med: $18.99</span> • 
                <span className="font-semibold"> Lg: $23.99</span> • 
                <span className="font-semibold"> XLg: $27.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Veggie</h3>
                  <p className="text-gray-700 mb-2">Mushrooms, onions, green peppers, tomatoes, broccoli, black olives.</p>
                </div>
              </div>
              <div className="text-sm text-gray-700 mt-2">
                <span className="font-semibold">Sm: $14.99</span> • 
                <span className="font-semibold"> Med: $18.99</span> • 
                <span className="font-semibold"> Lg: $23.99</span> • 
                <span className="font-semibold"> XLg: $27.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Hawaiian</h3>
                  <p className="text-gray-700 mb-2">Ham and pineapple.</p>
                </div>
              </div>
              <div className="text-sm text-gray-700 mt-2">
                <span className="font-semibold">Sm: $12.99</span> • 
                <span className="font-semibold"> Med: $16.99</span> • 
                <span className="font-semibold"> Lg: $19.99</span> • 
                <span className="font-semibold"> XLg: $22.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Buffalo Chicken</h3>
                  <p className="text-gray-700 mb-2">Grilled chicken with our special buffalo sauce.</p>
                </div>
              </div>
              <div className="text-sm text-gray-700 mt-2">
                <span className="font-semibold">Sm: $14.99</span> • 
                <span className="font-semibold"> Med: $18.99</span> • 
                <span className="font-semibold"> Lg: $22.99</span> • 
                <span className="font-semibold"> XLg: $25.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">BBQ Chicken</h3>
                  <p className="text-gray-700 mb-2">Grilled chicken with our tangy BBQ sauce.</p>
                </div>
              </div>
              <div className="text-sm text-gray-700 mt-2">
                <span className="font-semibold">Sm: $14.99</span> • 
                <span className="font-semibold"> Med: $18.99</span> • 
                <span className="font-semibold"> Lg: $22.99</span> • 
                <span className="font-semibold"> XLg: $25.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gluten Free Pizza Section */}
      <section id="gluten-free" className="py-16 bg-[#FFF9C4] bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <span className="text-[hsl(145,63%,49%)] font-medium mb-2 block uppercase tracking-wider">Special Diet</span>
            <h2 className="text-3xl font-bold mb-4 text-[hsl(212,40%,18%)]">Gluten Free Pizza</h2>
            <div className="w-16 h-1 bg-[hsl(145,63%,49%)] mb-8"></div>
          </div>
          
          <div className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">10" Gluten Free Crust</h3>
              <p className="text-gray-700 mb-3">Our special gluten free crust with cheese.</p>
              <p className="text-[#B71C1C] font-bold mb-2">$13.99</p>
              <p className="text-sm text-gray-500">Toppings priced as regular toppings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Sandwiches Section */}
      <section id="hot-sandwiches" className="py-16 bg-[#FFF9C4] bg-opacity-30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#8BC34A] pb-2">Signature Hot Sandwiches</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Meatball</h3>
                  <p className="text-gray-700 mb-2">Homemade meatballs, provolone cheese & marinara sauce.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$9.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Steak & Cheese</h3>
                  <p className="text-gray-700 mb-2">Shaved steak with American cheese.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$9.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Buffalo Chicken</h3>
                  <p className="text-gray-700 mb-2">Grilled chicken, American cheese & our Buffalo sauce.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$9.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">BBQ Chicken</h3>
                  <p className="text-gray-700 mb-2">Grilled chicken, American cheese & BBQ sauce.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$9.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Chicken Parmesan</h3>
                  <p className="text-gray-700 mb-2">Breaded chicken, provolone cheese & marinara sauce.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$9.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Ham & Cheese</h3>
                  <p className="text-gray-700 mb-2">Ham with American cheese.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$9.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cold Sandwiches Section */}
      <section id="cold-sandwiches" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#8BC34A] pb-2">Create Your Own Cold Sandwiches</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Step 1: Choose Your Bread</h3>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <ul className="space-y-2">
                  <li>• White Roll</li>
                  <li>• Wheat Roll</li>
                  <li>• Italian Bread</li>
                  <li>• Wrap</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Step 2: Choose Your Meats</h3>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <ul className="space-y-2">
                  <li>• Ham</li>
                  <li>• Turkey</li>
                  <li>• Salami</li>
                  <li>• Pepperoni</li>
                  <li>• Roast Beef</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Step 3: Choose Your Cheese</h3>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <ul className="space-y-2">
                  <li>• American</li>
                  <li>• Provolone</li>
                  <li>• Swiss</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Step 4: Add Veggies & Condiments</h3>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <p className="font-bold mb-2">Veggies:</p>
                <ul className="space-y-1 mb-3">
                  <li>• Lettuce</li>
                  <li>• Tomato</li>
                  <li>• Onion</li>
                  <li>• Green Peppers</li>
                  <li>• Black Olives</li>
                  <li>• Pickles</li>
                </ul>
                <p className="font-bold mb-2">Condiments:</p>
                <ul className="space-y-1">
                  <li>• Mayo</li>
                  <li>• Mustard</li>
                  <li>• Oil & Vinegar</li>
                  <li>• Italian Dressing</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="font-bold text-lg text-[#B71C1C]">Cold Sandwiches starting at: $9.99</p>
            <p className="text-sm text-gray-600 mt-2">Price varies depending on meat selection and additional toppings</p>
          </div>
        </div>
      </section>
      
      {/* Calzones Section */}
      <section id="calzones" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#8BC34A] pb-2">Calzones</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Steak & Cheese</h3>
                  <p className="text-gray-700 mb-2">Shaved steak & American cheese.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$11.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Ham & Cheese</h3>
                  <p className="text-gray-700 mb-2">Ham & American cheese.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$11.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Italian</h3>
                  <p className="text-gray-700 mb-2">Ham, salami, pepperoni & provolone cheese.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$11.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Veggie</h3>
                  <p className="text-gray-700 mb-2">Mushrooms, onions, green peppers, black olives & American cheese.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$11.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Cheese</h3>
                  <p className="text-gray-700 mb-2">Ricotta & mozzarella cheese.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$9.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Whipper's Calzone</h3>
                  <p className="text-gray-700 mb-2">Pepperoni, Hamburg, sausage, mushrooms, onions, green peppers & provolone cheese.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$14.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salads Section */}
      <section id="salads" className="py-16 bg-[#FFF9C4] bg-opacity-30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#8BC34A] pb-2">Salads</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Garden Salad</h3>
                  <p className="text-gray-700 mb-2">Lettuce, tomatoes, onions, green peppers, black olives & croutons.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$7.99</span>
              </div>
              <div className="text-sm text-gray-500">Add grilled chicken +$2.50</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Caesar Salad</h3>
                  <p className="text-gray-700 mb-2">Romaine lettuce, croutons, parmesan cheese & Caesar dressing.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$7.99</span>
              </div>
              <div className="text-sm text-gray-500">Add grilled chicken +$2.50</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Chef Salad</h3>
                  <p className="text-gray-700 mb-2">Garden salad topped with ham, turkey & American cheese.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$9.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Antipasto Salad</h3>
                  <p className="text-gray-700 mb-2">Garden salad topped with ham, salami, pepperoni & provolone cheese.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$9.99</span>
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
                  <h3 className="text-xl font-bold mb-2">French Fries</h3>
                  <p className="text-gray-700 mb-2">Crispy golden fries served hot and fresh.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$4.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Onion Rings</h3>
                  <p className="text-gray-700 mb-2">Crispy battered onion rings.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$5.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Mozzarella Sticks</h3>
                  <p className="text-gray-700 mb-2">Breaded mozzarella sticks served with marinara sauce.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$6.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Chicken Tenders</h3>
                  <p className="text-gray-700 mb-2">Breaded chicken tenders served with your choice of sauce.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$8.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Wings</h3>
                  <p className="text-gray-700 mb-2">Bone-in wings with your choice of sauce: Mild, Hot, BBQ, Teriyaki.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$12.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Garlic Bread</h3>
                  <p className="text-gray-700 mb-2">Toasted Italian bread with garlic butter.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$4.99</span>
              </div>
              <div className="text-sm text-gray-500">Add cheese +$1.00</div>
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
                  <h3 className="text-xl font-bold mb-2">Canned Soda</h3>
                  <p className="text-gray-700 mb-2">Coca-Cola, Diet Coke, Sprite, Fanta, Dr. Pepper.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$1.50</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">20oz Bottles</h3>
                  <p className="text-gray-700 mb-2">Coca-Cola, Diet Coke, Sprite, Fanta, Dasani Water.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$2.50</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">2-Liter Bottles</h3>
                  <p className="text-gray-700 mb-2">Coca-Cola, Diet Coke, Sprite, Orange Soda.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$3.99</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Specialty Drinks</h3>
                  <p className="text-gray-700 mb-2">Bottled Iced Tea, Energy Drinks, Bottled Juices.</p>
                </div>
                <span className="text-[#B71C1C] font-bold">$2.99</span>
              </div>
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
