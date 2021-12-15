import React from "react";

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
        <h1>{element.name}</h1>

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
        <ul className="list">
          <li>{element.cost} Galactic Credits</li>
          <li>{element.description}</li>
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
        <h1 style={{ backgroundColor: "white" }}>
          Are you sure you want to empty your cart?
        </h1>
        {console.log("resetCart Working")}
      </div>
    );
  };

  return (
    <div style={{ color: "white", textAlign: "center" }}>
      {props.cart.length > 0 ? (
        <div>
          <h1 style={{ position: "relative", left: "550px" }}>
            Please Review your purchases before submitting
          </h1>
          <div className="cartItemsDiv">{produceCartCards}</div>
          <div id="resetCart">
            <button onClick={resetCart}>Reset Your Cart!</button>
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
