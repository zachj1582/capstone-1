import React from "react";
import { ProductConsumer } from "../context";
import StripeCheckout from "react-stripe-checkout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = (props) => {
  const onToken = (token, value) => {
    console.log("1", token, ":", "2", value);
    value.clearCart();
    toast.success("Hey, congrats!! Your friends are in for it now! :)", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div>
      <ProductConsumer>
        {(value) => {
          if (value.cart.length > 0) {
            return (
              <div>
                <h1>Your Cart</h1>
                <div className="cart-cats">
                  <p className="cart-title">Products:</p>
                  <p className="cart-title">Product name:</p>
                  <p className="cart-title">price:</p>
                  <p className="cart-title">Quantity:</p>
                  <p className="cart-title">Remove:</p>
                  <p className="cart-title">Total:</p>
                </div>
                {value.cart.map((item) => {
                  return (
                    <div className="cart-row" key={item.id}>
                      <img
                        className="cart-pic"
                        src={item.product_image}
                        alt="product"
                      />
                      <p className="cart-name">{item.product_name}</p>
                      <p className="cart-price">Galleons ~ {item.price}</p>
                      <div className="cart-qty">
                        <button
                          className="btn-count"
                          onClick={() => value.increment(item.id)}
                        >
                          +
                        </button>
                        <p>{item.count}</p>
                        <button
                          className="btn-count"
                          id="btn-right"
                          onClick={() => value.decrement(item.id)}
                        >
                          -
                        </button>
                      </div>
                      <div className="cart-remove">
                        <button
                          id="cart-remove-btn"
                          onClick={() => value.removeItem(item.id)}
                        >
                          remove
                        </button>
                      </div>
                      <p className="cart-item-total">{item.total}</p>
                    </div>
                  );
                })}
                <div className="checkout-box">
                  <div className='checkout' >
                    <p>subtotal: {value.cartSubtotal}</p>
                    <p>tax: {value.cartTax}</p>
                    <p>total: {value.cartTotal}</p>
                    <StripeCheckout
                      name="Weasleys Wizard Wheezes"
                      description="making a payment"
                      stripeKey="pk_test_GhYQPCyhp1LBOBzeW1cJMOwd00xVKtKBQS"
                      token={(token) => onToken(token, value)}
                      //  image={''}
                      amount={value.cartTotal * 100}
                      panelLabel="Submit Payment"
                      allowRememberMe={true}
                      billingAddress={false}
                      zipCode={false}
                    ></StripeCheckout>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div>
                <h1 id="empty-cart">Your Cart Is Empty</h1>
                <img
                  id="logo"
                  src="/capstone project pics/Weasleys_Wizard_Wheezes logo.png"
                  alt="Logo"
                />
              </div>
            );
          }
        }}
      </ProductConsumer>
      <ToastContainer />
    </div>
  );
};

export default Cart;
