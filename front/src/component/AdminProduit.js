import '../style/Produit.css'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom'



function valider(e){
    e.preventDefault()
    /* en js la fonction preventDefault permet d'indiquer à l'utilisateur
    que si l'événement n'est pas géré explicitement,
    l'action par défaut ne devrait pas être executé comme elle l'est normalement */
}

export default function AdminProduit() {
  const [input_fleuret, setInputFleuret]= useState(0)

  const [produits, setProduits] = useState([])
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

  useEffect(() => {
    recup()
}, [])

return (
  <>
  <div className='body'>
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
                          <br/>
                          {produit.prix} €
                          <br/><br/>
                          description : {produit.description}
                          <br/><br/>
                          stock : {produit.stock} unités
                      </div>
                      <div className='box-footer'>
                        <Link to={'/editProduit/' + produit.id}>edit</Link>
                        <Link to={'/suppressionProduit/'+ produit.id}>suppr</Link>
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