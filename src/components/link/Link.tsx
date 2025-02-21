import React from 'react'
import { linkStyles } from './linkStyles';

const Link = ({selectedStyle}) => {
    console.log(selectedStyle);
    
  return (
    <div>This is a <a className={linkStyles[selectedStyle]}> link </a> of {selectedStyle}</div>
  )
}

export default Link