import React from 'react';
import './styles/Nav.css'

export default function NavBar({img1, img2}) {
    return  <nav className="navbar">
              <img src = {img1} alt="logo"/>
              <img src = {img2} alt="navbar"/>
            </nav>
}