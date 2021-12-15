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
        <ul className="links">
          <li>
            <NavLink activeClassName={styles.active} to="/pistols">
              Blaster Pistols
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/rifles">
              Rifle Variants
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/cannons">
              Repeating Cannons
            </NavLink>
          </li>
        </ul>
        <div id="cartHolder">
          <NavLink to="/yourcart">
            <img
              id="cart"
              src="https://img.icons8.com/material-rounded/48/ffffff/favorite-cart.png"
            />
          </NavLink>
          <h1 id="Num-Cart-Items">{numbOfCartItems}</h1>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
