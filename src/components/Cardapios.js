import React from 'react'
import Cardapio_1 from '../assets/cardapios/cardapio_1.jpeg'
import Cardapio_2 from '../assets/cardapios/cardapio_2.jpeg'
import { SRLWrapper } from "simple-react-lightbox";
export default function Cardapios (){
    return (
       <div className="div-cardapios">
         <SRLWrapper>
            <img src={Cardapio_1} alt="Cardapio" />
            <img src={Cardapio_2} alt="Cardapio 2" />
        </SRLWrapper>   
       </div>
    )
}