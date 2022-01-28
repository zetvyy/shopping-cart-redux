import React from "react";
import "./Cart.css";
import bdenim from "./bdenim.jpg";
import redhoodie from "./redhoodie.jpg";

const Cart = () => {
  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <div className="row mt-5">
        <div className="col-sm-8 card_cart">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Cart</h3>
              <div className="product">
                <img src={bdenim} alt="bdenim" />
                <h3 className="card-text">Blue Denim Shirt</h3>
              </div>
              <div className="product">
                <img src={redhoodie} alt="redhoodie" />
                <h3 className="card-text">Red Hoodie</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 card_checkout">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">The total amount of</h5>
              <p className="card-text">Temporary amount</p>
              <p className="card-text">Shipping</p>
              <button className="btn btn-primary btn_checkout">
                Go somewhere
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
