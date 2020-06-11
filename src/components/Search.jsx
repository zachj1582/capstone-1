import React from "react";
import {ProductConsumer} from '../context'

const Search = () => {
  

  return (
    <ProductConsumer>
        {(value)=>{
            return (
                <input className='search-bar' type="text" placeholder='Search' onChange={(e)=> {
                    value.handleInput(e)
                }} />
            )
        }}
    </ProductConsumer>
  );
};

export default Search;
