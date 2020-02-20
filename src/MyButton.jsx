import React from 'react';
import './styles/MyButton.css'

export default function MyButton({ bg, color, children }) {
    function handleClick() {}
  
    return (
      <button
        onClick={handleClick}
        className="my-button"
        style={{ background: bg, color }}
      >
        {children}
      </button>
    );
  }
  