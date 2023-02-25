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
                    <Link to="/"> Accueil </Link>
                </ul>
                <ul className="navbar-header3">
                    <Link to="/inscr"> Inscription </Link>
                </ul>
                <ul className="navbar-header4">
                    <Link to="/connect"> Se connecter </Link>
                </ul>
        </nav>
    </div>
  )
}