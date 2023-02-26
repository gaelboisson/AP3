const express = require('express') // la récupération d'express
const app = express() // variable utilisant la librairie express
let cors = require('cors')

require('dotenv').config()

// connexion à la bdd
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DTB,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
});

app.use(express.json())
app.use(cors())

//Début de l'api côté produit

app.get('/produit', async(req,res) => { // affichage des produits
    let conn;
    try{
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete")
        const rows= await conn.query('SELECT * FROM produit');
        console.log(rows);
        res.status(200).json(rows)
    }
    catch(err){
        console.log(err);
    }
})
app.get('/produit/:id', async (req,res) => { // affichage des produits avec leur id
    const id = parseInt(req.params.id)
    let conn;
    try{
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete select")
        const rows= await conn.query('SELECT * FROM produit WHERE ID = ?', [id]);
        console.log(rows);
        res.status(200).json(rows)
    }
    catch(err){
        console.log(err);
    }
})

app.post('/produit', async (req,res) => {  //Ajout de produit
    let recup;
    try{
        console.log("lancement de la connexion")
        recup = await pool.getConnection();
        console.log("lancement de la requete insert")
        const rows= await recup.query('INSERT INTO produit (nom, img, prix, stock, description) VALUES (?, ?, ?, ?, ?)', 
        [req.body.nom, req.body.img, req.body.prix, req.body.stock, req.body.description]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch(err){
        console.log(err);
    }
})

app.put('/produit/:id', async (req,res) => { // modification des produits
    const id = parseInt(req.params.id)
    let conn;
    try{
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete update")
        const rows= await conn.query('UPDATE produit SET nom = ?, img = ?, prix = ?, stock = ?, description = ? WHERE ID = ?', 
        [req.body.nom, req.body.img, req.body.prix, req.body.stock, req.body.description, id]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch(err){
        console.log(err);
    }
})

app.delete('/produit/:id', async (req,res) => { // suppression des produits
    const id = parseInt(req.params.id)
    let conn;
    try{
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete delete")
        const rows= await conn.query('DELETE FROM produit WHERE ID = ?', [id]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch(err){
        console.log(err);
    }
})
//fin de l'api côté produit

//début de l'api côté user

app.get('/client', async(req,res) => { // affichage des utilisateurs
    let conn;
    try{
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete")
        const rows= await conn.query('SELECT * FROM client WHERE role=1');
        console.log(rows);
        res.status(200).json(rows)
    }
    catch(err){
        console.log(err);
    }
})

app.get('/client/:id', async (req,res) => { // affichage des users avec leur id
    const id = parseInt(req.params.id)
    let conn;
    try{
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete select")
        const rows= await conn.query('SELECT * FROM client WHERE ID = ?', [id]);
        console.log(rows);
        res.status(200).json(rows)
    }
    catch(err){
        console.log(err);
    }
})

app.post('/client', async (req,res) => {  //inscription des clients
    let recup;
    try{
        console.log("lancement de la connexion")
        recup = await pool.getConnection();
        console.log("lancement de la requete insert")
        const rows= await recup.query('INSERT INTO client (mail, prenom, nom, mdp) VALUES (?, ?, ?, ?)', 
        [req.body.mail, req.body.prenom, req.body.nom, req.body.mdp]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch(err){
        console.log(err);
    }
})

app.put('/client/:id', async (req,res) => { // modification des clients
    const id = parseInt(req.params.id)
    let conn;
    try{
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete update")
        const rows= await conn.query('UPDATE client SET login = ?, mdp = ? WHERE ID = ?', [req.body.login, req.body.mdp, id]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch(err){
        console.log(err);
    }
})

app.delete('/client/:id', async (req,res) => { // suppression des users
    const id = parseInt(req.params.id)
    let conn;
    try{
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete delete")
        const rows= await conn.query('DELETE FROM client WHERE ID = ?', [id]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch(err){
        console.log(err);
    }
})
// fin de l'api côté users

app.listen(8000, () => { // ouverture du serveur sur le port 8000
    console.log("Serveur à l'écoute") // afficher un message dans la console.
})
