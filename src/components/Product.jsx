import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

const Product = (props) => {
  const {
    product_name,
    product_image,
    price,
    category,
    id,
    inCart,
  } = props.product;
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <div className="product-card">
            <div
              className="img-container"
              onClick={() => value.handleDetail(id)}
            >
              <Link to="/details">
                <img className="img" src={product_image} alt="product" />
              </Link>
            </div>
            <p>{product_name}</p>
            <p>Galleons ~ {price}</p>
            <p>{category}</p>
            <button
              className="pcard-addto"
              onClick={() => value.addToCart(id)}
              disabled={inCart}
            >
              {inCart ? <p className='btn-txt' >In cart</p> : <p className='btn-txt' >Add to cart</p>}
            </button>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Product;
