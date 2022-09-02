import React from 'react'
import classes from './CSS/shorturl.module.css'

const Title: React.FC = () => {
  return (
    <div>
      <h1 className={classes.title}>
      Link shortener
      </h1>
      <h1 className={classes.title}>website</h1>
      <h3 className={classes.subtitle}>Enter your url in the input field below to shorten them</h3>
    </div>
  )
}

export default Title