import React, { useState } from "react";
import {ProductConsumer} from '../context'

const Search = () => {
  

  return (
    <ProductConsumer>
        {(value)=>{
            return (
                <input type="text" onChange={(e)=> {
                    value.handleInput(e)
                }} />
            )
        }}
    </ProductConsumer>
  );
};

export default Search;
