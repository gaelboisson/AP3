import '../style/App.css';
import Banniere from './Banniere';
import Produits from './Produit';
import Panier from './Panier';
import Inscrire from './Inscrire';
import Connecter from './Connecter';
import AdminProduit from './AdminProduit';
import AjoutProduit from './AjoutProduit';
import EditProduit from './EditProduit';
import SupprProduit from './SupprProduit';
import AdminUser from './AdminUser';
import Footer from './Footer'
import { Route, Routes, Link } from "react-router-dom";
import React, { useState } from 'react';
import SupprUser from './SupprUser';

function App() {
  return (
    <div className="App">
      <Banniere />
      <Routes>
        <Route path="/connect" element={<Connecter />} />
        <Route path="/inscr" element={<Inscrire />} />
        <Route path="/" element={<Produits />} />
        <Route path="/adminProduit" element={<AdminProduit />} />
        <Route path="/ajoutProduit" element={<AjoutProduit />} />
        <Route path="/editProduit/:id" element={<EditProduit />} />
        <Route path="/suppressionProduit/:id" element={<SupprProduit />} />
        <Route path="/adminUser" element={<AdminUser />} />
        <Route path="/supprUser/:id" element={<SupprUser />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
