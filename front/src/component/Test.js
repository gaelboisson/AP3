import React, { useState } from "react";
import ReactDOM from "react-dom";
import Axios from 'axios';
import '../style/Test.css';

export default function Test(){
    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
const register =(e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/utilisateur",{
            login : login,
            mdp : mdp,
        }).then((response) => {
            if(response.data.message){
                setRegisterStatus(response.data.message);
            }else{
                setRegisterStatus("Votre compte à bien été créé")

            }
        })
    }
return(
    <div className="App">
        <div className="form">
        <form>
            <div className="input-container ic4">
                <input name="login" type="text" onChange={(e) => {setLogin(e.target.value)}} placeholder = "Entrer votre Nom" required />
            </div>
            <div className="input-container ic4">
                <input name="mdp" type="text" onChange={(e) => {setMdp(e.target.value)}} placeholder = "Entrer votre mdp" required />
            </div>
            <button className="btn btn-primary mt-3" type="submit" onClick={register} lstyle={{ marginRight: 20}}>Enregistrer</button>
            <h1 style ={{fontSize:'15px', textAlign: 'center', marginTop:'20'}}>{registerStatus}</h1>
        </form>
        </div>
    </div>
)
}