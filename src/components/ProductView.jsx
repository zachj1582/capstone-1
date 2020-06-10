import React, { useState } from "react";
import { ProductConsumer } from "../context";
import Product from "./Product";
import Search from "./Search";

const ProductView = (props) => {
  return (
    <div className="products-grid">
      <Search />
      <ProductConsumer>
        {(value) => {
          if (value.input.length > 0) {
            return value.filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            });
          } else {
            return value.products.map((product) => {
              return <Product key={product.id} product={product} />;
            });
          }
        }}
      </ProductConsumer>
    </div>
  );
};

export default ProductView;
