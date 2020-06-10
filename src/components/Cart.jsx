import React from "react";
import { ProductConsumer } from "../context";

const Cart = (props) => {
  return (
    <div>
      <ProductConsumer>
        {(value) => {
          console.log(value);
          if (value.cart.length > 0) {
            return (
              <div>
                <h1>Your Cart</h1>
                <div>
                  <p>Products:</p>
                  <p>Product name:</p>
                  <p>price:</p>
                  <p>Quantity:</p>
                  <p>Remove:</p>
                  <p>Total:</p>
                </div>
                {value.cart.map((item) => {
                  return (
                    <div key={item.id}>
                      <img src={item.product_image} alt="product" />
                      <p>{item.product_name}</p>
                      <p>{item.price}</p>
                      <button onClick={()=> value.increment(item.id)} >+</button>
                      <p>{item.count}</p>
                      <button onClick={()=> value.decrement(item.id)} >-</button>
                      <button>remove</button>
                      <p>{item.total}</p>
                    </div>
                  );
                })}
                <div>
            <p>subtotal: {value.cartSubtotal}</p>
            <p>tax: {value.cartTax}</p>
            <p>total: {value.cartTotal}</p>
                </div>
              </div>
            );
          } else {
            return <h1>Empty Cart</h1>;
          }
        }}
      </ProductConsumer>
    </div>
  );
};

export default Cart;
