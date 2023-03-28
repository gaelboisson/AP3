import React, { useState } from 'react';
import '../style/Banniere.css'
import { Link } from 'react-router-dom';
import logo from '../asset/logo.jpg';

export default function BanniereClient() {
  return (
    <div className="header">
        <nav className="navbar"> 
          <img src={logo} height="15%" width="9%"></img>
                <ul className="navbar-header">
                    <Link to="/produit"> Produits </Link>
                </ul>
        </nav>
    </div>
  )
}