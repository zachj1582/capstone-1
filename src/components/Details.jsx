import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

const Details = (props) => {
  return (
    <ProductConsumer>
      {(value) => {
        console.log(value)
        const {
          id,
          product_name,
          product_image,
          manufacturer,
          price,
          serial_number,
          category,
          inCart,
        } = value.detailItem;
        return (
          <div className="product-card">
            <div className="img_container">
                <img src={product_image} alt="Product" />
            </div>
            <p>{manufacturer}</p>
            <p>{product_name}</p>
            <p>{price}</p>
            <p>{serial_number}</p>
            <p>{category}</p>
            <Link to="/">
              <button>Back to products</button>
            </Link>
            <button onClick={() => value.addToCart(id)}>Add to cart</button>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
