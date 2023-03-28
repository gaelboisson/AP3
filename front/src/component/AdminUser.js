import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../style/User.css'
import BanniereAdmin from './BanniereAdmin';


function valider(e){
    e.preventDefault()
    /* en js la fonction preventDefault permet d'indiquer à l'utilisateur
    que si l'événement n'est pas géré explicitement,
    l'action par défaut ne devrait pas être executé comme elle l'est normalement */
}

export default function AdminProduit() {
  const [input_fleuret, setInputFleuret]= useState(0)

  const [clients, setClients] = useState([])
  const [affichage, setAffichage] = useState(false)

    clients.map((client) => {console.log(client)})

    const recup = async () => {
    await axios.get(`http://localhost:8000/client`)
        .then(res => {
            console.log(res)
            setClients(res.data)
            setAffichage(true)
        })
}

  useEffect(() => {
    recup()
}, [])

return (
  <>
  <BanniereAdmin/>
  <div className='body'>
    <h1>Utilisateurs</h1>
      <div className="box">
          {affichage ?
            <div className="Contenu">
              {
              clients.map(client => (
                  <div key={`produit-${client.id}`} className="Ubox">
                      <div className='box-body'>
                          <p className="champs">Adresse mail : {client.mail}</p>
                          <p>Prenom : {client.prenom}</p>
                          <p>Nom : {client.nom}</p>
                          <p>Mot de passe : {client.mdp}</p>
                      </div>
                      <div className='box-footer'>
                        <Link to={'/supprUser/'+ client.id}>suppr</Link>
                      </div>
                  </div>
              ))}
            </div>
            : <p><br/>Chargement...</p>
          }
      </div>
  </div>
  </>
)}