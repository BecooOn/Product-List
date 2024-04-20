import { useState } from "react";
import { products } from "../../helper/data";
import "./ProductCard.scss";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const ProductCard = ({ category, selectedProduct, showProduct }) => {
  const filteredProduct = products.filter((product) =>
    product.title.toLowerCase().includes(selectedProduct.toLowerCase().trim())
  );
  // console.log(filteredProduct);

  const filteredCategory =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  const [likes, setLikes] = useState({});

  const handleLike = (productId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [productId]: !prevLikes[productId],
    }));
  };

  return (
    <main className="main">
      {!showProduct
        ? filteredCategory.map((product) => (
            <div key={product.id}>
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target={"#" + product.id}
              >
                <div className="product-div">
                  <img src={product.image} alt="" className="images" />
                  <p className="product-prices">{product.price} $</p>
                  <p className="product-title">
                    {product.title.length > 50
                      ? product.title.slice(0, 50) + "..."
                      : product.title}
                  </p>
                </div>
              </button>
              <div
                className="modal fade"
                id={product.id}
                tabIndex="-1"
                aria-labelledby={product.id + "Label"}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id={product.id + "Label"}>
                        {product.title}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src={product.image}
                        className="card-img-top w-50 rounded-3 modal-img"
                        alt={product.title}
                      />
                      <p className="description">{product.description}</p>
                      <p className="card-price fs-4">{product.price} $</p>
                    </div>
                    <div className="modal-footer position-relative">
                      <button
                        type="button"
                        className="btn btn-secondary position-absolute top-50 start-50 translate-middle"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <div>
                        <span
                          className="fs-3"
                          onDoubleClick={() => handleLike(product.id)}
                        >
                          {likes[product.id] ? (
                            <FaHeart className="text-danger" />
                          ) : (
                            <FaRegHeart />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : filteredProduct.map((product) => (
            <div key={product.id}>
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target={"#" + product.id}
              >
                <div className="product-div">
                  <img src={product.image} alt="" className="images" />
                  <p className="product-prices">{product.price} $</p>
                  <p className="product-title">
                    {product.title.length > 50
                      ? product.title.slice(0, 50) + "..."
                      : product.title}
                  </p>
                </div>
              </button>
              <div
                className="modal fade"
                id={product.id}
                tabIndex="-1"
                aria-labelledby={product.id + "Label"}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id={product.id + "Label"}>
                        {product.title}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src={product.image}
                        className="card-img-top w-50 rounded-3 modal-img"
                        alt={product.title}
                      />
                      <p className="description">{product.description}</p>
                      <p className="card-price fs-4">{product.price} $</p>
                    </div>
                    <div className="modal-footer position-relative">
                      <button
                        type="button"
                        className="btn btn-secondary position-absolute top-50 start-50 translate-middle"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <div>
                        <span
                          className="fs-3"
                          onDoubleClick={() => handleLike(product.id)}
                        >
                          {likes[product.id] ? (
                            <FaHeart className="text-danger" />
                          ) : (
                            <FaRegHeart />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </main>
  );
};

export default ProductCard;
