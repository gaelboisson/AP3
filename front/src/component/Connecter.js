import {React, useState, useEffect} from 'react'
import '../style/Connecter.css'
import axios from 'axios'

function valider(e){
  e.preventDefault()
  /* en js la fonction preventDefault permet d'indiquer à l'utilisateur
  que si l'événement n'est pas géré explicitement,
  l'action par défaut ne devrait pas être executé comme elle l'est normalement */
}

function FormBlog()
{
  const [mail, setMail] = useState('')
  const [mdp, setMdp] = useState('')
  let inputErrorMail = mail.includes("")

  const [clients, setClients] = useState([])
  const [affichage, setAffichage] = useState(false)

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
      <div className="Contenue">
          <div className="Connexion">
              <form name="Connexion" onsubmit="vérif()">
                  <p><h3>Connectez-vous</h3></p>
                  <hr/>
                  <p>E-mail: <input name="mail" type="text" onChange={(e) => setMail(e.target.value)} placeholder="mail"/> </p>
                  <p>Mot de passe: <input name="mdp" type="password" onChange={(e) => setMdp(e.target.value)} placeholder="mdp"/></p> 
                  

                  {
                  mail != "gael.boisson.77@gmail.com" || mdp ?
                  <div>
                    {/* Votre mail n'est pas enregistre */}
                  </div> : 
                   <p2><input name="ConexionBtn" type="submit" value="Connexion" onsubmit={valider}/></p2> 
                  }
              </form>
          </div>

      </div>
    )
  }
export default FormBlog
