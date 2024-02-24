import React, {Fragment} from "react";
import FlipCart from '../assets/flipkart.png'
import Amazon from '../assets/amazon.png'

function ContentText() {
  return (
    <div className="nike-content-text">
      <h1>YOUR FEET DESERVE THE BEST</h1>
      <p>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.
      </p>
      <div className="button-list">
            <button className="shop-now-btn">Shop Now</button>
            <button className="category-btn">Category</button>
      </div>
      <div>
      <p className="bottom-text">Also Available On</p>
      <div className="logo-list">
        <img src={FlipCart}/>
        <img src={Amazon}/>
      </div>
      </div>
    </div>
  );
}

export default ContentText;
