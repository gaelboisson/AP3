import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function EditProduit() {
    let { id } = useParams()

    const { handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const [nom, setNom] = useState("")
    const [prix, setPrix] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")
    const [stock, setStock] = useState("")

    const recup = async () => {
        await axios.get(`http://localhost:8000/produit/` + id)
            .then(res => {
                setNom(res.data[0].nom)
                setPrix(res.data[0].prix)
                setDescription(res.data[0].description)
                setImg(res.data[0].img)
                setStock(res.data[0].stock)
            })
    }

    const editProduit = async () => {
        await axios.put(`http://localhost:8000/produit/` + id, {
            nom: nom,
            prix: prix,
            descritpion: description,
            img: img,
            stock: stock,
        })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert("Envoie réussi")
                    navigate("/");
                }
                else {
                    alert("Erreur d'envoi")
                }
            })
    }
    
    useEffect(() => {
        recup()
    }, [])

    return (
        <div className='container'>
            <br/><br/><br/>
            <h2> Editer un produit</h2>

            <form onSubmit={handleSubmit(editProduit)}>
                <label>Nom </label>
                <input defaultValue={nom} onChange={(e) => setNom(e.target.value)} />

                <label>Prix </label>
                <input defaultValue={prix} onChange={(e) => setPrix(e.target.value)} />

                <label>Description </label>
                <input defaultValue={description} onChange={(e) => setDescription(e.target.value)} />

                <label>Chemin de l'image </label>
                <input defaultValue={img} onChange={(e) => setImg(e.target.value)} />

                <label>Stock </label>
                <input defaultValue={stock} onChange={(e) => setStock(e.target.value)} />

                {(errors.nom || errors.prix || errors.description || errors.img || errors.stock) ? <span>Tous les champs doivent être remplis</span> : ""}

                <input type="submit" />
            </form>
        </div>
    )
}
