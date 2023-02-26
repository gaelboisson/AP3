import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../style/Produit.css'


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
  <div className='body'>
    <h1>Utilisateurs</h1>
      <div className="box">
          {affichage ?
            <div className="Contenu">
              {
              clients.map(client => (
                  <div key={`produit-${client.id}`} className="box">
                      <div className='box-body'>
                          Adresser mail : {client.mail}
                          <br />
                          Prenom : {client.prenom}
                          <br />
                          Nom : {client.nom}
                          <br />
                          Mot de passe : {client.mdp}
                      </div>
                      <div className='box-footer'>
                        <button Link to={'/supprUser/'+ client.id}>suppr</button>
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