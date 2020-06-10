import React, { useState } from "react";
import { ProductConsumer } from "../context";
import Product from "./Product";
import Search from './Search'

const ProductView = (props) => {
  const [input, setInput] = useState("");
  return (
    <div className="products-grid">
        <Search/>
      <ProductConsumer>
        {(value) => {
          return value.products.map((product) => {
            return <Product key={product.id} product={product} />;
          });
        }}
      </ProductConsumer>
    </div>
  );
};

export default ProductView;
