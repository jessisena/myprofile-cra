
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

import styles from "./NavBar.module.css";

export default class NavBar extends React.PureComponent {

  render() {

    return (
      <Router>
        <div className={styles.navbar}>
          <Link to={"#mybackground"}><h3 className={styles.itemNavbar}>Background</h3></Link>
          <Link to={"#mywork"}><h3 className={styles.itemNavbar}>Work</h3></Link>
          <Link to={"#myprojects"}><h3 className={styles.itemNavbar}>Projects</h3></Link>
          <Link to={"#myskills"}><h3 className={styles.itemNavbar}>Skills</h3></Link>
        </div>
      </Router>
    );
  
  }

}