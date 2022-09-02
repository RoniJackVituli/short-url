import React from "react";
import classes from './CSS/Nav.module.css'
const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.p}>
        Developer by <strong>Roni Jack Vituli</strong> @ 2022
      </p>
    </footer>
  );
};

export default Footer;
