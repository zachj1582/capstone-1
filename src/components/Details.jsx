import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Details = (props) => {
  return (
    <div>
      <ProductConsumer>
        {(value) => {
          const {
            id,
            product_name,
            product_image,
            price,
            serial_number,
            category,
            inCart,
            details,
          } = value.detailItem;
          return (
            <div className="details">
              <div className="img-container-detail">
                <img className="img-detail" src={product_image} alt="Product" />
              </div>
              <div className="info-detail">
                <h2>{product_name}</h2>
                <p className="p-details">{details}</p>
                <p className="p-info">Galleons ~ {price}</p>
                <p className="p-info">Category ~ {category}</p>
                <p className="p-info">Sku ~ {serial_number}</p>
                <div className='btn-cont-detail' >
                  <Link to="/">
                    <button className="btn-detail" id='left' >Back to products</button>
                  </Link>
                  <button

                    className="btn-detail"
                    disabled={inCart}
                    onClick={() => value.addToCart(id)}
                  >
                    {inCart ? <p>in cart</p> : <p> Add to cart</p>}
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
      <ToastContainer />
    </div>
  );
};

export default Details;
