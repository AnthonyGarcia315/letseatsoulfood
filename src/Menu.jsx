import MenuItem from './MenuItem';
import Menu1 from './assets/Menu1.png';
import Menu2 from './assets/Menu2.png';
import Menu3 from './assets/Menu3.jpg';
import Menu4 from './assets/Menu4.jpg';
import Menu5 from './assets/Menu5.png';

// NOTE: Names/descriptions/prices below are drafted from your menu photos.
// Swap in Chef Robinson's actual dish names & prices before launch.
const menuItems = [
  {
    id: 1,
    name: "Blackened Shrimp & Grits",
    description: "Jumbo shrimp seasoned and seared, served over creamy stone-ground grits and finished with fresh scallions.",
    price: "18.99",
    image: Menu1
  },
  {
    id: 2,
    name: "Braised Oxtails",
    description: "Fall-off-the-bone oxtails braised low and slow in a rich pan gravy, served over garlic mashed potatoes.",
    price: "26.99",
    image: Menu2
  },
  {
    id: 3,
    name: "Chef Robinson's Oxtail Plate",
    description: "Our signature oxtails, smothered in savory brown gravy with garlic and fresh herbs, a Let's Eat favorite.",
    price: "24.99",
    image: Menu3
  },
  {
    id: 4,
    name: "Sweet Potato Hand Pie",
    description: "A flaky, golden hand pie filled with warm spiced sweet potato — the perfect finish to a soul food feast.",
    price: "7.99",
    image: Menu4
  },
  {
    id: 5,
    name: "Smoked Collard Greens",
    description: "Slow-simmered collard greens seasoned Southern-style, a staple side on every table.",
    price: "6.99",
    image: Menu5
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