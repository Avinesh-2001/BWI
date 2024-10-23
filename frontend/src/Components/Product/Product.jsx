import React, { Component } from "react";
import Prod_Feature from "./../Product/Prod_Feature"
import { aboutUsContent2 } from "./../MainPage/textcontent";
import "./../Css/product.css";

export class Product extends Component {
  render() {
    return (
      <div>
        <h2 className="product-head">Product</h2>
        <div className="product">
          <h4 style={{textAlign:"justify" , fontWeight:"normal", fontSize:"1rem"}}>{aboutUsContent2}</h4>
        </div>
        <div className="product-feat">
            <h2 style={{textAlign:"center"}}>Our Hospital Product Feature</h2>
            
        </div>
        <div>
          <Prod_Feature/>  
        </div>

      </div>
    );
  }
}

export default Product;
