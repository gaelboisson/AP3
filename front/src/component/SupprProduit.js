import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


export default function SupprProduit() {
    const { handleSubmit } = useForm();
    let { id } = useParams()
    let navigate = useNavigate()

    const suppressionProduit = async () => {

        await axios.delete(`http://localhost:8000/produit/` + id)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert("Suppression réussi")
                    navigate("/");
                }
                else {
                    alert("Erreur de supression")
                }
            })
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(suppressionProduit)} >
                <h2> Confirmer la suppression ?</h2>
                <input type="submit" value="Valider" />
                <Link to="/" className='bouton-annuler'> Annuler </Link>
            </form>
        </div>
    )
}
