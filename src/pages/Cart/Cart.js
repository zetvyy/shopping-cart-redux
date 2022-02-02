import React, { useState, useEffect } from "react";
import "./Cart.css";
import { MdDelete } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store/actions/CartAction";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  const products = useSelector(({ cart }) => cart.data);

  const price = cartData.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setCartData(products);
  }, [products]);

  const handleAdd = (product) => {
    const productExist = cartData.find((item) => item.id === product.id);
    if (productExist) {
      setCartData(
        cartData.map((item) =>
          item.id === product.id ? { ...productExist, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartData([...cartData, { ...product, qty: 1 }]);
    }
  };

  const handleSubstract = (product) => {
    const productExist = cartData.find((item) => item.id === product.id);
    if (productExist) {
      setCartData(
        cartData.map((item) =>
          item.id === product.id
            ? { ...productExist, qty: item.qty - (item.qty > 0 ? 1 : 0) }
            : item
        )
      );
    } else {
      setCartData([...cartData, { ...product, qty: 1 }]);
    }
  };

  const handleRemove = (product) => {
    dispatch(removeItem(product));
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <div className="row mt-5">
        <div className="col-sm-8 card_cart">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <div className="card-body">
              <h3 className="card-title">Cart</h3>

              {cartData &&
                cartData.map((product) => (
                  <div className="product">
                    <div className="row">
                      <div className="col-md-4">
                        <img src={product.image} alt="bdenim" />
                      </div>
                      <div className="col-md-6 detail">
                        <h3 className="card-text">{product.name}</h3>
                        <p>{product.detail}</p>
                        <p>Color : {product.color}</p>
                        <p>Size : {product.size}</p>
                        <MdDelete className="btn_delete" />
                        <span onClick={() => handleRemove(product)}>
                          REMOVE ITEM
                        </span>
                        <BsFillHeartFill
                          className="btn_love"
                          style={{ marginLeft: "20px" }}
                        />{" "}
                        <span>MOVE TO WISH LIST</span>
                        <span className="product_price">${product.price}</span>
                      </div>
                      <div className="col-md-2 wrapper">
                        <button
                          className="btn_qty_minus"
                          onClick={() => handleSubstract(product)}
                        >
                          -
                        </button>
                        <span className="qty">{product.qty}</span>
                        <button
                          className="btn_qty_plus"
                          onClick={() => handleAdd(product)}
                        >
                          +
                        </button>
                        <p style={{ fontSize: "14px" }}>(Note : 1 piece)</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="col-sm-4 card_checkout">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <div className="card-body">
              <h5 className="card-title">The total amount of</h5>
              <p className="card-text">
                Temporary amount <span>${price.toFixed(2)}</span>{" "}
              </p>
              <p className="card-text">
                Shipping <span>$00,00</span>{" "}
              </p>
              <hr />
              <p style={{ fontWeight: "bold" }}>
                Total amount of <span>${price.toFixed(2)}</span> <br />{" "}
                (including VAT)
              </p>
              <button className="btn btn-primary btn_checkout">
                GO TO CHECKOUT
              </button>
            </div>
          </div>

          <select name="" id="">
            <option value="50">add a discount code (optional)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Cart;
