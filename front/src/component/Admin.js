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

export default function Admin() {
  const [input_fleuret, setInputFleuret]= useState(0)

  const [produits, setProduits] = useState([])
  const [clients, setClients] = useState([])
  const [affichage, setAffichage] = useState(false)
  
    console.log(typeof input_fleuret)
    produits.map((produit) => {console.log(produit)})

    const recup = async () => {
      await axios.get(`http://localhost:8000/produit`)
          .then(res => {
              console.log(res)
              setProduits(res.data)
              setAffichage(true)
          })
  }

    clients.map((client) => {console.log(client)})

    const recup2 = async () => {
    await axios.get(`http://localhost:8000/client`)
        .then(res => {
            console.log(res)
            setProduits(res.data)
            setAffichage(true)
        })
}

  useEffect(() => {
    recup()
}, [])

useEffect(() => {
    recup2()
}, [])

return (
  <>
  <Panier/>
  <div className='body'>
      <h2> Nos produits </h2>
      <div className="box">
          {affichage ?
            <div className="Contenu">
              {
              produits.map(produit => (
                  <div key={`produit-${produit.id}`} className="box">
                      <div className='box-title' >
                        <img src={produit.img} className="prod"/>
                      </div>
                      <div className='box-body'>
                          {produit.nom}
                          <br/><br/>
                          {produit.prix} €
                          <br/><br/>
                          {produit.description}
                      </div>
                  </div>
              ))}
            </div>
            : <p>Chargement...</p>
          }
      </div>

      <div className="box">
          {affichage ?
            <div className="Contenu">
              {
              clients.map(client => (
                  <div key={`produit-${client.id}`} className="box">
                      <div className='box-body'>
                          {client.login}
                          <br />
                          {client.mdp}
                      </div>
                  </div>
              ))}
            </div>
            : <p>Chargement...</p>
          }
      </div>
  </div>
  </>
)}