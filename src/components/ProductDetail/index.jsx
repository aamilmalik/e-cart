import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../api/Data";
import "./style.css";
import Product from "../Product";

function ProductDetail({cart,setCart}) {
  const param = useParams();
  const { id } = param;

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([])


  useEffect(() => {
    const filterProduct = items.filter((product) => {
      return product.id == id;
    });
    setProduct(filterProduct[0]);

    const filteredRelatedProduct = items.filter((relatedProduct)=>{
    return relatedProduct.category === product.category;
    })
     setRelatedProducts(filteredRelatedProduct)
     
  }, [id,product.category]);

  const addToCart=(product)=>{
    setCart([...cart,product]);
    alert("Successfully Added in Cart");
  }

  return (
    <>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹ </button>
          <button className="btn btn-warning" 
           onClick={()=>addToCart(product)}
          >Add To Cart</button>
        </div>
      </div>

      <h1 className="text-center">Related Products</h1>
       <Product items={relatedProducts} cart={cart} setCart={setCart} />

    </>
  );
}

export default ProductDetail;
