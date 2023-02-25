// import {React, useState} from 'react';
// import '../style/Inscrire.css'
// import axios from 'axios'

// function valider(e){
//   e.preventDefault()
//   /* en js la fonction preventDefault permet d'indiquer à l'utilisateur
//   que si l'événement n'est pas géré explicitement,
//   l'action par défaut ne devrait pas être executé comme elle l'est normalement */
// }

// function FormBlog()
// {
//   const [Input_Login, setInputLogin] = useState('')
//   const [Input_Mdp, setInputMdp] = useState('')
//   const [Input_Mdp2, setInputMdp2] = useState('')
//   let inputErrorLogin = Input_Login.includes("")

//   const Inscription = async () => {
//     console.log("rhet")
//     await axios.post(`http://localhost:8000/user`, {
//         mail: Input_Login,
//         mdp: Input_Mdp,
//     })
//         .then(res => {
//             console.log(res)
//             if (res.status === 200) {
//                 alert("Ajout réussi")
//             }
//             else {
//                 alert("Erreur d'ajout")
//             }
//         })
// }

//     return (
//       <div className="Contenue">
//           <div className="Inscription">
//               <form name="Inscription" onSubmit={Inscription}>
//                   <p><h3>Inscrivez-vous</h3></p>
//                   <hr/>
//                   <p>Identifiant: <input name="Login" type="text" onChange={(e) => setInputLogin(e.target.value)} placeholder="Login"/> </p>
//                   <p>Mot de passe: <input name="Mdp" type="password" onChange={(e) => setInputMdp(e.target.value)} placeholder="Mdp"/></p> 
//                   <p>Vérification de mon Mot de passe: <input name="Mdp" type="password" onChange={(e) => setInputMdp2(e.target.value)} placeholder="Vérification Mot de passe"/></p>                  
                  
//                   <input name="ConexionBtn" type="submit" value="Connexion"/>

//                   {/* {
//                   Input_Mail == "gael.boisson.77@gmail.com" ?
//                   <div>
//                     Adresse mail déjà utilisée
//                   </div> 
//                   : 
//                     Input_Mdp !== Input_Mdp2 || Input_Mdp === "" ?
//                     <div>
//                     Mot de passe incorrect
//                     </div> :
//                     <p2><input name="ConexionBtn" type="submit" value="Connexion"/></p2>                  
                    
                    
//                   } */}
//               </form>
//           </div>

//       </div>
//     )
//   }
// export default FormBlog

import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import '../style/Inscrire.css'
import { useNavigate } from "react-router-dom";


export default function AjoutQuestion() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const [login, setLogin] = useState("")
    const [mdp, setMdp] = useState("")


    const ajoutQuestion = async () => {
        await axios.post(`http://localhost:8000/user`, {
            login: login,
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
        <div className='container'>
            <h2> Ajouter une question</h2>

            <form onSubmit={handleSubmit(ajoutQuestion)}>
                <label>Login </label>
                <input {...register("login", { required: true })} onChange={(e) => setLogin(e.target.value)} />

                <label>Mot de passe </label>
                <input {...register("mdp", { required: true })} onChange={(e) => setMdp(e.target.value)} />

                {(errors.theme || errors.question) ? <span>Tous les champs doivent être remplis</span> : ""}

                <input type="submit" />
            </form>
        </div>
    )
}
