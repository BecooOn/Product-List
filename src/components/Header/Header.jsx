import { categories } from "../../helper/data";
import "./Header.scss";
import { FiShoppingCart } from "react-icons/fi";
const Header = ({
  onSetCategory,
  setSelectedProduct,
  showProduct,
  setShowProduct,
}) => {
  const handleProduct = (e) => {
    const productName = e.target.value.toLowerCase().trim();
    setSelectedProduct(productName);
    if (productName !== "") {
      setShowProduct(true);
    } else {
      setShowProduct(false);
    }
  };
  return (
    <div>
      <div className="product d-flex align-items-center justify-content-center">
        <h1 className="product">Product List</h1>
        <span className="position-absolute end-0 me-5"><FiShoppingCart className="fs-1"/><sup className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-4">1</sup></span>
      </div>

      <ul className="categories">
        {categories.map((category, index) => (
          <li
            key={index}
            className="btns"
            onClick={() => onSetCategory(category)}
          >
            {category.toUpperCase()}
          </li>
        ))}
      </ul>
      <div className="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search product"
          onChange={handleProduct}
        />
      </div>
    </div>
  );
};

export default Header;
