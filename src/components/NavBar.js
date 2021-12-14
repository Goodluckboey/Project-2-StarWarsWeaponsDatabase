import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

/* {cart.map((element) => {
          if (cart.length > 0) {
            return (
              <div>
                <h3>{element.name}</h3>
                <h3>{element.cost}</h3>
              </div>
            );
          }
        })} */

const NavBar = (props) => {
  let numbOfCartItems = props.cart.length;
  return (
    <header className={styles.navbar}>
      <nav>
        <div id="cartHolder">
          <img
            id="cart"
            src="https://img.icons8.com/material-rounded/48/ffffff/favorite-cart.png"
          />
          <h1 id="Num-Cart-Items">{numbOfCartItems}</h1>
        </div>
        <ul className="links">
          <li>
            <NavLink activeClassName={styles.active} to="/pistols">
              Pistols
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/rifles">
              Rifles
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/cannons">
              Cannons
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
