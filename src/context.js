import React, { useState } from "react";
import mockData from "./MOCK_DATA.json";

const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([...mockData]);
  const [detailItem, setDetailItem] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [input, setInput] = useState('')

  const handleSearch = () => {
    let tempProducts = [...products]
    let tempProducts = tempProducts.filter(val => {
      return (
        val.product_name.toLowerCase().includes(input.toLowerCase())

    )})
  }

  const handleInput = e => {
    setInput(e.target.value)
  }

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetailItem(product);
  };

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    setProducts([...tempProducts]);
    setCart([...cart, product]);
    setDetailItem({ ...product });

    addTotals([...cart, product]);
  };

  const getTotals = (items) => {
    let subtotal = 0;
    items.map((item) => {
      console.log("item:", item, "subtotal:", subtotal);
      subtotal += item.total;
    });
    const tempTax = subtotal * 0.0825;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    return {
      subtotal,
      tax,
      total,
    };
  };

  const addTotals = (item) => {
    const totals = getTotals(item);
    setCartSubtotal(totals.subtotal);
    setCartTax(totals.tax);
    setCartTotal(totals.total);
  };
  
  const increment = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCart([...tempCart]);
    addTotals();
  };

  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart([...tempCart]);
    }
    addTotals();
  };

  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    const index = tempProducts.indexOf(getItem(id));
    let removedItem = tempProducts[index];
    removedItem.inCart = false;
    removedItem.count = 0;
    removedItem.total = 0;

    tempCart = tempCart.filter((item) => item.id !== id);

    setCart([...tempCart]);
    setProducts([...tempProducts]);
    addTotals();
  };

  const clearCart = () => {
    setCart([]);
    addTotals();
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        detailItem,
        cartSubtotal,
        cartTax,
        cartTotal,
        cart,
        addToCart: addToCart,
        handleDetail: handleDetail,
        clearCart: clearCart,
        decrement: decrement,
        increment: increment,
        removeItem: removeItem,
        handleSearch: handleSearch,
        handleInput: handleInput
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
