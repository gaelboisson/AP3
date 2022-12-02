import React, { useState } from 'react';
import '../style/Banniere.css'
import { Link } from 'react-router-dom';
import logo from '../asset/logo.jpg';

export default function Banniere() {
  return (
    <div className="header">
        <nav className="navbar"> 
          <img src={logo} height="15%" width="9%"></img>
                <ul className="navbar-header">
                    <li><Link to="/"> Accueil </Link></li>
                </ul>
                <ul className="navbar-header3">
                    <li><Link to="/inscr"> Inscription </Link></li>
                </ul>
                <ul className="navbar-header4">
                    <li><Link to="/connect"> Se connecter </Link></li>
                </ul>
        </nav>
    </div>
  )
}