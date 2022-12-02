import '../style/Panier.css'
import React, { useState } from 'react';

export default function Panier({input_fleuret, input_gant, input_fil, input_housse, input_protec}) {
    // const [input_fleuret, setInputFleuret]= useState(0)
    // const [input_gant, setInputGant]= useState('0')
    // const [input_fil, setInputFil]= useState('0')
    // const [input_housse, setInputHousse]= useState('0')
    // const [input_protec, setInputProtec]= useState('0')
    // console.log(input_kingdom)

    return (
      <div id="lateral-panel">   
        <input id="lateral-panel-input" type="checkbox">
        </input>
        <label id="lateral-panel-label" for="lateral-panel-input">
        </label>
        <div id="lateral-panel-bloc">
          <div className="panier">
            <h3>Mon panier</h3>
            <p>Fleuret électrique Apex : {input_fleuret}</p>
            <p>Gant escrime : {input_gant}</p>
            <p>Fil de corps fleuret : {input_fil}</p>
            <p>Housse de transport : {input_housse}</p>
            <p>Protection poitrine : {input_protec}</p><br/>
            {/* <p>Total : {input_fleuret + input_gant + input_fil + input_housse + input_protec}</p> */}
            <button type='button' name='payer'>
              Payer
            </button>
          </div>
        </div>
      </div>
    )
  }