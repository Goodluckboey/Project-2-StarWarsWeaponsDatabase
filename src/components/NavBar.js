import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  let numbOfCartItems = props.cart.length;
  return (
    <header className={styles.navbar}>
      <nav>
        <ul className="links">
          <li>
            <NavLink
              activeClassName={styles.active}
              style={{ color: "gold" }}
              to="/bounties"
            >
              Bounties
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/fullcollection">
              Collection
            </NavLink>
          </li>
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
              alt=""
            />
          </NavLink>
          <h1 id="Num-Cart-Items">{numbOfCartItems}</h1>
        </div>
      </nav>
      
    </header>
  );
};

export default NavBar;
