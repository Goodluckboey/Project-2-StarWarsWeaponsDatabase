import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
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
