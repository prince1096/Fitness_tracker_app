import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import styles from "./SideNav.module.css";

const SideNav = () => {
  const loaction = useLocation();

  const activeLink = (path) => {
    return loaction.pathname === path;
  };

  return (
    // <div className={styles.sidenav}>
    //   <div>
    //     <NavLink
    //       to="/"
    //       className={activeLink("/") ? styles.active : styles.inactive}
    //     >
    //       Home
    //     </NavLink>
    //   </div>
    //   <div>
    //     <NavLink
    //       to="/food"
    //       className={activeLink("/food") ? styles.active : styles.inactive}
    //     >
    //       Food
    //     </NavLink>
    //   </div>
    //   <div>
    //     <NavLink
    //       to="/exercise"
    //       className={activeLink("/exercise") ? styles.active : styles.inactive}
    //     >
    //       Exercise
    //     </NavLink>
    //   </div>
    //   <div>
    //     <NavLink
    //       to="/goals"
    //       className={activeLink("/goals") ? styles.active : styles.inactive}
    //     >
    //       Fitness Goals
    //     </NavLink>
    //   </div>
    //   <div>
    //     <NavLink to="/">Github</NavLink>
    //   </div>
    // </div>

    <div className={styles.sidenav}>
      <div className={styles.navItem}>
        <NavLink
          to="/"
          className={activeLink("/") ? styles.activeLink : styles.inactiveLink}
        >
          Home
        </NavLink>
      </div>
      <div className={styles.navItem}>
        <NavLink
          to="/food"
          className={
            activeLink("/food") ? styles.activeLink : styles.inactiveLink
          }
        >
          Food
        </NavLink>
      </div>
      <div className={styles.navItem}>
        <NavLink
          to="/exercise"
          className={
            activeLink("/exercise") ? styles.activeLink : styles.inactiveLink
          }
        >
          Exercise
        </NavLink>
      </div>
      <div className={styles.navItem}>
        <NavLink
          to="/goals"
          className={
            activeLink("/goals") ? styles.activeLink : styles.inactiveLink
          }
        >
          Fitness Goals
        </NavLink>
      </div>
      <div className={styles.navItem}>
        <NavLink to="/" className={styles.githubLink}>
          Github
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
