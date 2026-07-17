export default function MenuItem({ name, description, price, image }) {
  return (
    <div className="menu-card">
      {/* We'll assume your images are in a folder called 'assets' */}
      <img src={`./src/assets/${image}`} alt={name} className="menu-image" />
      <div className="menu-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">${price}</span>
      </div>
    </div>
  );
}