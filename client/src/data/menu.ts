export interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export const MENU: MenuSection[] = [
  {
    id: 'pizza',
    title: 'Pizza',
    items: [
      { name: 'Plain Pizza (8")', price: '$5.45' },
      { name: 'Plain Pizza (12")', price: '$8.95' },
      { name: 'Plain Pizza (16")', price: '$11.95' },
      { name: 'Whipper\'s Special (12")', description: 'Pepperoni, hamburg, sausage, mushrooms, onions, green peppers', price: '$14.30' },
      { name: 'Whipper\'s Special (16")', description: 'Pepperoni, hamburg, sausage, mushrooms, onions, green peppers', price: '$18.95' },
      { name: 'Buffalo Chicken (12")', description: 'Buffalo chicken, red onions, mozzarella cheese', price: '$15.55' },
      { name: 'Buffalo Chicken (16")', description: 'Buffalo chicken, red onions, mozzarella cheese', price: '$19.95' },
      { name: 'Vegetarian (12")', description: 'Mushrooms, onions, green peppers, black olives, tomatoes', price: '$14.30' },
      { name: 'Vegetarian (16")', description: 'Mushrooms, onions, green peppers, black olives, tomatoes', price: '$18.95' },
      { name: 'Hawaiian (12")', description: 'Ham, pineapple, mozzarella cheese', price: '$13.95' },
      { name: 'Hawaiian (16")', description: 'Ham, pineapple, mozzarella cheese', price: '$17.95' },
      { name: 'Meat Lovers (12")', description: 'Pepperoni, hamburg, sausage, ham, bacon', price: '$15.95' },
      { name: 'Meat Lovers (16")', description: 'Pepperoni, hamburg, sausage, ham, bacon', price: '$20.95' }
    ]
  },
  {
    id: 'calzones',
    title: 'Calzones',
    items: [
      { name: 'Cheese Calzone', description: 'Ricotta & mozzarella cheese', price: '$9.99' },
      { name: 'Steak & Cheese Calzone', description: 'Steak, onions, green peppers & provolone cheese', price: '$11.99' },
      { name: 'Whipper\'s Calzone', description: 'Pepperoni, hamburg, sausage, mushrooms, onions, green peppers & provolone cheese', price: '$14.99' },
      { name: 'Buffalo Chicken Calzone', description: 'Buffalo chicken, red onions & mozzarella cheese', price: '$13.99' }
    ]
  },
  {
    id: 'hot-sandwiches',
    title: 'Hot Sandwiches',
    items: [
      { name: 'Meatball Sub', description: 'Homemade meatballs with marinara sauce & provolone cheese', price: '$6.50' },
      { name: 'Chicken Parmesan', description: 'Breaded chicken cutlet with marinara sauce & provolone cheese', price: '$6.95' },
      { name: 'Steak with Onions & Peppers', description: 'Grilled steak with sautéed onions & peppers', price: '$9.95' },
      { name: 'Oven-Toasted Reuben', description: 'Corned beef, sauerkraut, Swiss cheese & thousand island dressing', price: '$7.50' },
      { name: 'Italian Sub', description: 'Ham, salami, pepperoni, provolone cheese, lettuce, tomatoes, onions', price: '$7.95' },
      { name: 'BLT', description: 'Bacon, lettuce, tomatoes & mayo on toasted bread', price: '$6.25' }
    ]
  },
  {
    id: 'cold-sandwiches',
    title: 'Cold Sandwiches',
    items: [
      { name: 'Ham & Cheese', description: 'Sliced ham with your choice of cheese', price: '$9.99' },
      { name: 'Turkey & Cheese', description: 'Sliced turkey with your choice of cheese', price: '$9.99' },
      { name: 'Roast Beef & Cheese', description: 'Sliced roast beef with your choice of cheese', price: '$10.99' },
      { name: 'Tuna Salad', description: 'Homemade tuna salad with lettuce & tomatoes', price: '$9.99' },
      { name: 'Chicken Salad', description: 'Homemade chicken salad with lettuce & tomatoes', price: '$9.99' }
    ]
  },
  {
    id: 'salads',
    title: 'Salads',
    items: [
      { name: 'Garden Salad', description: 'Lettuce, tomatoes, onions, green peppers, black olives & croutons', price: '$7.99' },
      { name: 'Caesar Salad', description: 'Romaine lettuce, croutons, parmesan cheese & Caesar dressing', price: '$7.99' },
      { name: 'Chef Salad', description: 'Garden salad topped with ham, turkey & American cheese', price: '$9.99' },
      { name: 'Antipasto Salad', description: 'Garden salad topped with ham, salami, pepperoni & provolone cheese', price: '$9.99' },
      { name: 'Grilled Chicken Caesar', description: 'Caesar salad topped with grilled chicken', price: '$8.99' },
      { name: 'Greek Salad', description: 'Garden salad with feta cheese & Greek olives', price: '$6.25' },
      { name: 'Taco Salad', description: 'Lettuce, tomatoes, onions, cheese, ground beef & tortilla chips', price: '$6.25' }
    ]
  },
  {
    id: 'dinner-baskets',
    title: 'Dinner Baskets',
    items: [
      { name: 'Haddock Basket', description: 'Beer-battered haddock with fries & coleslaw', price: '$10.75' },
      { name: 'Shrimp Basket', description: 'Breaded shrimp with fries & coleslaw', price: '$10.75' },
      { name: 'Chicken Tender Basket', description: 'Hand-breaded chicken tenders with fries & coleslaw', price: '$11.61' },
      { name: 'Sweet Chili Chicken Tenders Basket', description: 'Sweet chili glazed chicken tenders with fries & coleslaw', price: '$10.95' },
      { name: 'Wing Basket', description: 'Buffalo wings with fries & coleslaw', price: '$9.95' }
    ]
  },
  {
    id: 'sides',
    title: 'Sides',
    items: [
      { name: 'French Fries', description: 'Crispy golden fries served hot and fresh', price: '$4.99' },
      { name: 'Onion Rings', description: 'Crispy battered onion rings', price: '$4.81' },
      { name: 'Mozzarella Sticks (6)', description: 'Breaded mozzarella sticks with marinara sauce', price: '$5.75' },
      { name: 'Jalapeño Poppers', description: 'Cream cheese filled jalapeños, breaded & fried', price: '$6.21' },
      { name: 'Cheese Garlic Breadsticks', description: 'Homemade breadsticks with garlic butter & mozzarella', price: '$6.95' },
      { name: 'Buffalo Wings (10)', description: 'Traditional buffalo wings with celery & blue cheese', price: '$8.95' }
    ]
  },
  {
    id: 'drinks',
    title: 'Drinks',
    items: [
      { name: 'Canned Soda', description: 'Coca-Cola, Diet Coke, Sprite, Fanta, Dr. Pepper', price: '$1.50' },
      { name: '20oz Bottles', description: 'Coca-Cola, Diet Coke, Sprite, Fanta, Dasani Water', price: '$2.50' },
      { name: '2-Liter Bottles', description: 'Coca-Cola, Diet Coke, Sprite, Orange Soda', price: '$3.99' },
      { name: 'Specialty Drinks', description: 'Bottled Iced Tea, Energy Drinks, Bottled Juices', price: '$2.99' }
    ]
  }
];