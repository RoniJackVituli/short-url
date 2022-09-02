import React from "react";

import classes from "./CSS/Button.module.css";

type Props = {
  type: "button" | "submit" | undefined;
  className: string | undefined;
  text: string;
  icon: string;
};

const Button: React.FC<Props> = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={props.className}
    >
      <span className={classes.button__icon}>
        <i className={props.icon} />
      </span>
      <span className={classes.button__text}>{props.text}</span>
    </button>
  );
};

export default Button;
