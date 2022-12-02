import React, { useState, useEffect } from "react";
import Fleuret from '../asset/fleuret.jpg'
import '../style/Produit.css'
import Gant from '../asset/gant.jpg'
import Kadi from '../asset/pannier.webp'
import Fil from '../asset/fil_de_corps.jpg'
import Housse from '../asset/housse.jpg'
import Protec from '../asset/protec.jpg'
import ReactDOM from "react-dom/client";
import UserInfo from './UserInfo'
import Panier from "./Panier";

function valider(e){
    e.preventDefault()
    /* en js la fonction preventDefault permet d'indiquer à l'utilisateur
    que si l'événement n'est pas géré explicitement,
    l'action par défaut ne devrait pas être executé comme elle l'est normalement */
}

export default function FavoriteColor() {
  const [input_fleuret, setInputFleuret]= useState(0)
  const [input_gant, setInputGant]= useState(0)
  const [input_fil, setInputFil]= useState(0)
  const [input_housse, setInputHousse]= useState(0)
  const [input_protec, setInputProtec]= useState(0)
  
  const User = [
    {name:"Kingdom",Star:5}
  ]
  
  const User1 = [
    {name:"OnePiece",Star:5}
  ]

  const User2 = [
    {name:"Chainsaw Man",Star:4}
  ]

  const User3 = [
    {name:"Choujin X",Star:3}
  ]

  const User4 = [
    {name:"Dandadan",Star:3}
  ]
    const [count, setCount] = useState(0)
    

    useEffect(()=>{
      User.push(
        {id:count,
        star:0,})

        console.log(User)
        console.log(count)
    },[count])
    console.log(typeof input_fleuret)
  return (
    <>
    <Panier input_fleuret={input_fleuret} input_gant={input_gant} input_fil={input_fil}
    input_housse={input_housse} input_protec={input_protec}/>
    
    <div className="Contenu">
      
      
        <div className='Fleuret'>
             <img src={Fleuret} height="250px" width="200px"></img>
             <p>Fleuret électrique Apex : 219.99€</p>
             {User.map((user, index) => (

              <UserInfo star={user.Star} />
              ))}
             <button
        type="button"
        onClick={() => setInputFleuret(input_fleuret - 1)}
      >
        <p> __</p> 
      </button>

             <button
        type="button"
        onClick={() => setInputFleuret(input_fleuret + 1)}
      >
             <img src={Kadi} height="20px" width="20px"></img>
      </button>
         </div>
      
      
        <div className='Gant'>
            <img src={Gant} height="250px" width="200px"></img>
            <p>Gant escrime : 24.99€</p>
            {User1.map((user, index) => (

            <UserInfo star={user.Star} />
))}
            <button
        type="button"
        onClick={() => setInputGant(input_gant - 1)}
      >
        <p> __ </p> 
      </button>

            <button
        type="button"
        onClick={() => setInputGant(input_gant + 1)}
      >
            <img src={Kadi} height="20px" width="20px"></img>
            </button>
        </div>

      
      
        <div className='Fil'>
            <img src={Fil} height="250px" width="200px"></img>
            <p>Fil de corps fleuret/sabre : 28€</p>
            {User2.map((user, index) => (

            <UserInfo star={user.Star} />))}
            <button
              type="button"
              onClick={() => setInputFil(input_fil - 1)}
            >
            <p> __ </p> 
            </button>

            <button
        type="button"
        onClick={() => setInputFil(input_fil + 1)}
      >
            <img src={Kadi} height="20px" width="20px"></img>
            </button>
        </div>

        <div className='Housse'>
            <img src={Housse} height="250px" width="200px"></img>
            <p>Housse de transport : 35€</p>
            {User3.map((user, index) => (

            <UserInfo star={user.Star} />))}
            <button
        type="button"
        onClick={() => setInputHousse(input_housse - 1)}
      >
        <p> __ </p> 
      </button>

            <button
        type="button"
        onClick={() => setInputHousse(input_housse + 1)}
      >
           <img src={Kadi} height="20px" width="20px"></img>
            </button>
        </div>
      
      
      <div className='Protec'>
            <img src={Protec} height="250px" width="200px"></img>
            <p>Protection poitrine : 42€</p>
            {User4.map((user, index) => (

              <UserInfo star={user.Star} />
              ))}
              <button
        type="button"
        onClick={() => setInputProtec(input_protec - 1)}
      >
        <p> __</p> 
      </button>

            <button
        type="button"
        onClick={() => setInputProtec(input_protec + 1)}
      >
        <img src={Kadi} height="20px" width="20px"></img>
      </button>
        </div>
      
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);