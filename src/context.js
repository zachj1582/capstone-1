import React, { useState, useEffect } from "react";
import mockData from "./MOCK_DATA.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductContext = React.createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([...mockData]);
  const [detailItem, setDetailItem] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (input) => {
    const tempProducts = [...products];
    let filteredProducts = tempProducts.filter((val) => {
      return val.product_name.toLowerCase().includes(input.toLowerCase());
    });
    if (input.length > 0) {
      return setFilteredProducts([...filteredProducts]);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    handleSearch(e.target.value);
  };

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetailItem(product);
  };

  useEffect(() => {
    addTotals();
  });

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    if (product.inventory_count < 1) {
      toast.error(
        "Yikes, this item is currently out of stock. We're always replenishing, check back soon!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } else {
      product.inCart = true;
      product.count = 1;
      product.inventory_count--;
      const price = product.price;
      product.total = price;

      setProducts([...tempProducts]);
      setCart([...cart, product]);
      setDetailItem({ ...product });
    }
  };

  const getTotals = () => {
    let subtotal = 0;
    cart.map((item) => (subtotal += item.total));
    const tempTax = subtotal * 0.0825;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    return {
      subtotal,
      tax,
      total,
    };
  };

  const addTotals = () => {
    const totals = getTotals();
    setCartSubtotal(totals.subtotal);
    setCartTax(totals.tax);
    setCartTotal(totals.total);
  };

  const increment = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    if (product.inventory_count < 1) {
      return toast.error(
        "Yikes, this item is currently out of stock. We're always replenishing, check back soon!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } else {
      product.count++;
      product.inventory_count--;
      product.total = product.count * product.price;
      setCart([...tempCart]);
      addTotals();
    }
  };

  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count--;
    product.inventory_count++;
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
    removedItem.inventory_count += removedItem.count;
    removedItem.count = 0;
    removedItem.total = 0;

    tempCart = tempCart.filter((item) => item.id !== id);

    setCart([...tempCart]);
    setProducts([...tempProducts]);
    addTotals();
  };

  const clearCart = (id) => {
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
        filteredProducts,
        input,
        addToCart: addToCart,
        handleDetail: handleDetail,
        clearCart: clearCart,
        decrement: decrement,
        increment: increment,
        removeItem: removeItem,
        handleSearch: handleSearch,
        handleInput: handleInput,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
