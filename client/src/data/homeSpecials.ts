export interface Special {
  id: string;
  title: string;
  blurb: string;
  price?: string;
}

export const SPECIALS: Special[] = [
  { 
    id: 'big-whip',  
    title: 'The Big Whip', 
    blurb: '16″ toasted Italian roll stacked with meats, cheese & secret sauce. Feeds 2+', 
    price: 'From $18.95' 
  },
  { 
    id: 'steak-bombs',   
    title: 'Steak Bombs',  
    blurb: 'Ham, two salamis, bacon, cheese & mayo with onions on house bread.' 
  },
  { 
    id: 'party',     
    title: 'Party Platter', 
    blurb: 'Three full Big Whips sliced & tray-packed. Perfect for game day or office lunch.' 
  }
];