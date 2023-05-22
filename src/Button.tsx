import React from 'react'

type btnProp = {
    onClick?: () => void;
    text: string;

}

const Button = ({onClick, text}: btnProp) => {
  return (
    <div onClick={onClick} style={{cursor: 'pointer'}}>{text}</div>
  )
}

export default Button