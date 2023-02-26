import {React, useState} from 'react';
import '../style/Inscrire.css'
import '../style/Test.css'
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
    const [nom, setNom] = useState('')
    const [img, setImg] = useState('')
    const [prix, setPrix] = useState('')
    const [stock, setStock] = useState('')
    const [description, setDescription] = useState('')

    let navigate = useNavigate();


  const Ajouter = async () => {
    console.log("rhet")
    await axios.post(`http://localhost:8000/produit`, {
        nom: nom,
        img: img,
        prix: prix,
        stock: stock,
        description: description,
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
        <form onSubmit={Ajouter}>
            <div className="input-container ic4">
                <input name="nom" type="text" onChange={(e) => {setNom(e.target.value)}} placeholder = "Nom du produit" required />
            </div>
            <div className="input-container ic4">
                <input name="img" type="text" onChange={(e) => {setImg(e.target.value)}} placeholder = "Chemmin de l'image" required />
            </div>
            <div className="input-container ic4">
                <input name="prix" type="text" onChange={(e) => {setPrix(e.target.value)}} placeholder = "Prix" required />
            </div>
            <div className="input-container ic4">
                <input name="stock" type="text" onChange={(e) => {setStock(e.target.value)}} placeholder = "Stock" required />
            </div>
            <div className="input-container ic4">
                <input name="description" type="text" onChange={(e) => {setDescription(e.target.value)}} placeholder = "Description" required />
            </div>

            <input name="AjoutBtn" type="submit" value="Ajouter"/>
        </form>
        </div>
    </div>
    )
  }
export default FormBlog