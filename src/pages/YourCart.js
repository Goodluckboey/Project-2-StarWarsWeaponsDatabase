import React from "react";
import { NavLink, Link } from "react-router-dom";

const YourCart = (props) => {
  const cartDataArray = props.cart;

  const produceCartCards = cartDataArray.map((element, index) => {
    return (
      <div
        className="shoppingCards"
        id={index}
        data-aos="flip-down"
        data-aos-easing="ease-in-out"
        data-aos-delay="20"
        data-aos-duration="500"
        style={{ backgroundColor: "rgba(53, 73, 84, 0.3)", borderRadius: "2%" }}
      >
        {/* <div className="individualCards"> */}
        <h1 style={{ fontFamily: "A68MarketFont" }}>{element.name}</h1>

        <section>
          <img
            className="cart-images"
            src={element.url1}
            alt=""
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              //   padding: "10px",
            }}
          ></img>
        </section>
        <ul className="list2" style={{ width: "100%" }}>
          <br />
          <li>{element.cost} Galactic Credits</li>
          <li>{element.description}</li>
          <li
            style={{
              fontWeight: "bold",
              textDecorationLine: "underline",
              width: "50%",
            }}
          >
            NO REFUNDS
          </li>
        </ul>
        <br />
        <button
          style={{
            backgroundColor: "grey",
            borderRadius: "100%",
            width: "30px",
            textAlign: "center",
            padding: "5px",
            position: "absolute",
            top: "-15px",
            left: "-15px",
          }}
          onClick={() => removeFromCart(index)}
        >
          X
        </button>
      </div>
    );
  });

  const removeFromCart = (index) => {
    const cartArr = cartDataArray.filter((element, i) => i !== index);
    props.setCart(cartArr);
  };

  const resetCart = () => {
    return (
      <div
        id="resetPrompt"
        style={{
          position: "absolute",
          width: "500px",
          height: "auto",
          backgroundColor: "white",
        }}
      >
        {props.setCart([])}
        {console.log("resetCart Working")}
      </div>
    );
  };

  return (
    <div style={{ color: "white", textAlign: "center" }}>
      {props.cart.length > 0 ? (
        <div>
          <h1 style={{ position: "relative", textAlign: "center" }}>
            Please Review your purchases before submitting
          </h1>
          <div className="cartItemsDiv">{produceCartCards}</div>
          <div id="resetCart">
            <div
              style={{
                display: "flex",
                marginLeft: " auto",
                marginTop: "75px",
                marginBottom: "100px",
              }}
            >
              <button
                onClick={resetCart}
                style={{
                  position: "relative",
                  marginLeft: "auto",
                }}
              >
                Reset Your Cart!
              </button>
              <Link className="checkout">Check Out</Link>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ position: "relative", left: "775px" }}>
          No purchases to review
        </h1>
      )}
    </div>
  );
};

export default YourCart;
