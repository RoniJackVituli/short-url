import React from "react";
import classes from "./CSS/shorturl.module.css";
const Form: React.FC = () => {
  
  return (
    <form >
      <div className={classes.field}>
        <div className={classes.line}>
          <input className={classes.input} type="text" />
          <i className="fa-solid fa-link" id={classes.linkicon}></i>
          <button className={classes.shorten} type="submit">
            <i className="fa-solid fa-scissors"></i>
            Shorten
          </button>
        </div>
        <div className={classes.line}>
          <i className="fa-regular fa-clipboard" id={classes.linkicon}></i>
          <div className={classes.input}></div>
          <button className={classes.shorten} type="submit">
            <i className="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
