import React, { useState, useEffect } from "react";
import '../style/Produit.css'
import Kadi from '../asset/pannier.webp'
import ReactDOM from "react-dom/client";
import Panier from "./Panier";
import axios from 'axios';

function valider(e){
    e.preventDefault()
    /* en js la fonction preventDefault permet d'indiquer à l'utilisateur
    que si l'événement n'est pas géré explicitement,
    l'action par défaut ne devrait pas être executé comme elle l'est normalement */
}

export default function FavoriteColor() {


  const [produits, setProduits] = useState([])
  const [affichage, setAffichage] = useState(false)
  
    const [count, setCount] = useState(0)
    const [destock, setDestock] = useState(0)

    produits.map((produit) => {console.log(produit)})

    const recup = async () => {
      await axios.get(`http://localhost:8000/produit`)
          .then(res => {
              console.log(res)
              setProduits(res.data)
              setAffichage(true)
          })
  }

  useEffect(() => {
    recup()
}, [])

return (
  <>
  <Panier count={count} destock={destock}/>
  <div className='body'>
      <div className="box">
          {affichage ?
            <div className="Contenu">
              {
              produits.map(produit => (
                  <div key={`produit-${produit.id}`} className="box">
                      <div className='box-title' >
                        <img src={`${process.env.PUBLIC_URL}/images/${produit.img}`} className="prod"/>
                      </div>
                      <div className='box-body'>
                          {produit.nom}
                          <br />
                          {produit.prix} €
                      </div>
                      <button type="button" onClick={() =>setCount(count + produit.prix) & setDestock(destock + 1)}>
                        <img src={Kadi} className="Kadi"></img>
                      </button>
                  </div>
              ))}
            </div>
            : <p>Chargement...</p>
          }
      </div>
  </div>
  </>
)}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);