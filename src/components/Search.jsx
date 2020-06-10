import React, { useState } from "react";
import {ProductConsumer} from '../context'

const Search = () => {
  

  return (
    <ProductConsumer>
        {(value)=>{
            return (
                <input type="text" onChange={(e)=> {
                    value.handleInput(e)
                    value.handleSearch()
                }} />
            )
        }}
    </ProductConsumer>
  );
};

export default Search;
