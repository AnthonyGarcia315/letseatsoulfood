import MenuItem from './MenuItem';

// Here is the data we organized earlier!
const menuItems = [
  {
    id: 1,
    name: "Item 1",
    description: "Description for Item 1",
    price: "18.99",
    image: "Menu1.png" 
  },
  {
    id: 2,
    name: "Item 2",
    description: "Description for Item 2",
    price: "24.99",
    image: "Menu2.png" 
  },
  {
    id: 3,
    name: "Item 3",
    description: "Description for Item 3",
    price: "21.99",
    image: "Menu4.jpg"
  },
  {
    id: 4,
    name: "Item 4",
    description: "Description for Item 4",
    price: "6.99",
    image: "Menu5.png"
  }
];

export default function Menu() {
  return (
    <section className="menu-section">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((dish) => (
          <MenuItem 
            key={dish.id} 
            name={dish.name} 
            description={dish.description} 
            price={dish.price} 
            image={dish.image} 
          />
        ))}
      </div>
    </section>
  );
}