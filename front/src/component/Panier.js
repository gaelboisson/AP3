import '../style/Panier.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Panier({count,destock}) {
  localStorage.clear();

  const [produits, setProduits] = useState([])
  const [affichage, setAffichage] = useState(false)

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
      <div id="lateral-panel">   
        <input id="lateral-panel-input" type="checkbox">
        </input>
        <label id="lateral-panel-label" for="lateral-panel-input">
        </label>
        <div id="lateral-panel-bloc">
          <div className="panier">
            <h3>Mon panier</h3>
            <div>
            {
              produits.map(produit => (
                  <div key={`produit-${produit.id}`} className="box">
                      
                      <div className='box-body'>
                          <p>{produit.nom} : {destock}</p>
                      </div>

                      <button type="button" onClick={() => count - produit.prix}>
                        -
                      </button>
                  </div>
              ))}
            </div>
            
            <br/>
            {<p>Total : {count} €</p>}
            <button type='button' name='payer'>
              Payer
            </button>
          </div>
        </div>
      </div>
    )
  }