import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ items, cart, setCart }) {
  const location = useLocation();

  const addToCart = (product) => {
    setCart(() => [...cart, product]);
    toast.success("Successfully Added in Cart", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
    });
  };

  const path = location.pathname != "/product" ? "/product" : null;

  return (
    <div className="container my-5">
      <div className="row">
        {items.map((product) => {
          return (
            <div
              key={product.id}
              className="col-lg-4 col-md-6 col-sm-12 my-3 text-center"
            >
              <div className="card" style={{ width: "18rem" }}>
                <Link to={`${path}/${product.id}`}>
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt="..image"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3">
                    {product.price} ₹{" "}
                  </button>

                  {location.pathname == "/cart" ? (
                   
                      <>
                       <a href={product.amazonLink}
                      className="btn btn-warning"
                      >Buy Now
                      </a>                    
                      </>
                  ) : (
                    <button
                      className="btn btn-warning"
                      onClick={() => addToCart(product)}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Product;
