import React from 'react';
import './styles/CoolHOne.css';

export default function CoolHOne(props) {
return  <div className="main">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
}