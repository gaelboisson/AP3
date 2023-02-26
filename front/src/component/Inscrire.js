import {React, useState} from 'react';
import '../style/Inscrire.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function valider(e){
  e.preventDefault()
  /* en js la fonction preventDefault permet d'indiquer à l'utilisateur
  que si l'événement n'est pas géré explicitement,
  l'action par défaut ne devrait pas être executé comme elle l'est normalement */
}

function FormBlog()
{
    const [mail, setMail] = useState('')
    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [mdp, setMdp] = useState('')

    let navigate = useNavigate();


  const Inscription = async () => {
    console.log("rhet")
    await axios.post(`http://localhost:8000/client`, {
        mail: mail,
        prenom: prenom,
        nom: nom,
        mdp: mdp,
    })
    .then(res => {
        console.log(res)
        if (res.status === 200) {
            alert("Ajout réussi")
            navigate("/");
        }
        else {
            alert("Erreur d'ajout")
        }
    })
}

    return (
    <div className="App">
        <div className="form">
        <p><h3>Inscription</h3></p>
        <form onSubmit={Inscription}>
            <div className="input-container ic4">
                <input name="mail" type="text" onChange={(e) => {setMail(e.target.value)}} placeholder = "Adresse mail" required />
            </div>
            <div className="input-container ic4">
                <input name="prenom" type="text" onChange={(e) => {setPrenom(e.target.value)}} placeholder = "Prenom" required />
            </div>
            <div className="input-container ic4">
                <input name="nom" type="text" onChange={(e) => {setNom(e.target.value)}} placeholder = "Nom" required />
            </div>
            <div className="input-container ic4">
                <input name="mdp" type="password" onChange={(e) => {setMdp(e.target.value)}} placeholder = "mdp" required />
            </div>

            <input name="ConexionBtn" type="submit" value="Connexion"/>
        </form>
        </div>
    </div>
    )
  }
export default FormBlog
