import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

const Product = (props) => {
  const {
    product_name,
    product_image,
    manufacturer,
    price,
    serial_number,
    category,
    id,
    inCart,
  } = props.product;
  return (
    <div className="product-card">
      <ProductConsumer>
        {(value) => {
          return (
            <div>
              <div
                className="img_container"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={product_image} alt="product" />
                </Link>
              </div>
              <p>{manufacturer}</p>
              <p>{product_name}</p>
              <p>{price}</p>
              <p>{serial_number}</p>
              <p>{category}</p>
              <button onClick={() => value.addToCart(id)}>Add to cart</button>
            </div>
          );
        }}
      </ProductConsumer>
    </div>
  );
};

export default Product;
