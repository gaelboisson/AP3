import React, { useState, useEffect } from "react";
import '../style/Produit.css'
import Kadi from '../asset/pannier.webp'
import Moins from '../asset/moins.png'
import Fleuret from '../asset/fleuret.jpg'
import Gant from '../asset/gant.jpg'
import Fil from '../asset/fil_de_corps.jpg'
import Housse from '../asset/housse.jpg'
import Protec from '../asset/protec.jpg'
import ReactDOM from "react-dom/client";
import Panier from "./Panier";
import axios from 'axios';

function valider(e){
    e.preventDefault()
    /* en js la fonction preventDefault permet d'indiquer à l'utilisateur
    que si l'événement n'est pas géré explicitement,
    l'action par défaut ne devrait pas être executé comme elle l'est normalement */
}

export default function FavoriteColor(props) {
  const [input_fleuret, setInputFleuret]= useState(0)
  const [input_gant, setInputGant]= useState(0)
  const [input_fil, setInputFil]= useState(0)
  const [input_housse, setInputHousse]= useState(0)
  const [input_protec, setInputProtec]= useState(0)

  const [produits, setProduits] = useState([])
  const [affichage, setAffichage] = useState(false)

  // const produit = [
  //   {nom: 'Fleuret électrique', prix: 219.99, stock: 40, img: Fleuret, constante: [input_fleuret, setInputFleuret]},
  //   {nom: 'Gant escrime', prix: 24.99, stock: 40, img: Gant, constante: [input_gant, setInputGant]},
  //   {nom: 'Fil de corps fleuret/sabre', prix: 28, stock: 60, img: Fil, constante: input_fil, setInputFil},
  //   {nom: 'Housse de transport', prix: 35, stock: 40, img: Housse, constante: input_housse, setInputHousse},
  //   {nom: 'Protection poitrine', prix: 42, stock: 30, img: Protec, constante: input_protec, setInputProtec}
  // ]
  
    const [count, setCount] = useState(0)


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

  useEffect(() => {
    recup()
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
                          <br />
                          {produit.prix} €
                      </div>
                      <button type="button" onClick={() => setCount(count + 1)}>
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