import {React, useState, useEffect} from 'react'
import '../style/Connecter.css'
import Banniere from './Banniere';
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";


function valider(e){
  e.preventDefault()
  /* en js la fonction preventDefault permet d'indiquer à l'utilisateur
  que si l'événement n'est pas géré explicitement,
  l'action par défaut ne devrait pas être executé comme elle l'est normalement */
}

function FormBlog()
{
  localStorage.clear();

  const [mail, setMail] = useState('')
  const [mdp, setMdp] = useState('')
  const [role, setRole] = useState('')
  const ls = localStorage;

  ls.setItem("mail", mail);
  ls.setItem("role", role);

  let navigate = useNavigate();

  let inputErrorMail = mail.includes("")

  const [clients, setClients] = useState([])
  const [affichage, setAffichage] = useState(false)

  const recup = async (e) => {
    e.preventDefault()
    await axios.post(`http://localhost:8000/connexion`,{
      mail: mail,
      mdp: mdp,
    })
    .then(res => {
      console.log(res)
      if (res.status === 200 & res.data.role === 1) {
        
        alert("Vous êtes connecté")
        navigate("/produit");
      }
      else if(res.status === 200 & res.data.role === 2) {
        alert("Vous êtes connecté")
        navigate("/adminProduit")
      }
      else {
        alert("Identifiants incorrectes")
      }
  }).catch((error) => {console.log(error)})
}

    return (
      <div className="Contenue">
        <Banniere />
          <div className="Connexion">
              <form name="Connexion" onSubmit={recup}>
                  <p><h3>Connectez-vous</h3></p>
                  <hr/>
                  <p>E-mail: <input name="mail" type="text" onChange={(e) => setMail(e.target.value)} placeholder="mail"/> </p>
                  <p>Mot de passe: <input name="mdp" type="password" onChange={(e) => setMdp(e.target.value)} placeholder="mdp"/></p> 

                  <input className="ConexionBtn" type="submit" value="Connexion" />
                  <input className="ConexionBtn" type="reset" value="supprimer" />
              </form>
          </div>

      </div>
    )
  }
export default FormBlog
