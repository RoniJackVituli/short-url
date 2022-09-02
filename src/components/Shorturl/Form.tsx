import React, { FormEvent, useState, useRef } from "react";
import classes from "./CSS/shorturl.module.css";

const Form: React.FC = () => {
  const [shortUrl, setShortUrl] = useState<string>("");
  const urlInput = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);



  async function copyTextToClipboard(text:string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(shortUrl)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  


  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const long_url: string = urlInput.current!.value;

    if (!long_url.includes("https://")) {
      setError(true);
      return;
    }

    setError(false);

    fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: `Bearer 1091c087818b87d2a1245550417bbb65fb040cfc`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: long_url,
        domain: "bit.ly",
      }),
    })
      .then((response) => {
        if (response.ok) return response.json();
        setError(true);
      })
      .then((data) => {
        setShortUrl(data.link);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.field}>
        <div className={classes.line}>
          <input
            ref={urlInput}
            className={error ? classes.error : classes.input}
            type="text"
          />
          <i className="fa-solid fa-link" id={classes.linkicon}></i>
          <button className={classes.shorten} type="submit">
            <i className="fa-solid fa-scissors"></i>
            Shorten
          </button>
        </div>
        {shortUrl && <div className={classes.line}>
          <i className="fa-regular fa-clipboard" id={classes.linkicon}></i>
          <div className={classes.input}>
            <span>{shortUrl}</span>
          </div>
          <button className={classes.shorten} type="submit" onClick={handleCopyClick}>
            <i className="fa-solid fa-copy"></i> {
              isCopied ? "Copied!" : "Copy"
            }
          </button>
        </div>}
      </div>
    </form>
  );
};

export default Form;
