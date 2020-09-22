import React from "react";
// Import SRLWrapper
import { SRLWrapper } from "simple-react-lightbox";

import Logo from '../components/Logo'

import caldo_1 from '../assets/fotosgaleria/caldos/caldos_02.jpg'
import caldo_2 from '../assets/fotosgaleria/caldos/caldos_04.jpg'

function MyComponent() {

    const listLogo = []
    async function chargeLogo() {
        listLogo.push({ name: 'caldo_1', path: caldo_1 })
        listLogo.push({ name: 'caldo_2', path: caldo_2 })
        console.log(listLogo)
    }
    chargeLogo()
    return (
        <div className="MyComponent">
            <SRLWrapper>
            
            <Logo logoName="caldo_1" listLogo={listLogo} />
            <Logo logoName="caldo_2" listLogo={listLogo} />
            <Logo logoName="caldo_1" listLogo={listLogo} />
            <Logo logoName="caldo_2" listLogo={listLogo} />
            <Logo logoName="caldo_1" listLogo={listLogo} />
            <Logo logoName="caldo_2" listLogo={listLogo} />
            <Logo logoName="caldo_1" listLogo={listLogo} />
            <Logo logoName="caldo_2" listLogo={listLogo} />
            <Logo logoName="caldo_1" listLogo={listLogo} />
            <Logo logoName="caldo_2" listLogo={listLogo} />
            <Logo logoName="caldo_1" listLogo={listLogo} />
            <Logo logoName="caldo_2" listLogo={listLogo} />
            <Logo logoName="caldo_1" listLogo={listLogo} />
            <Logo logoName="caldo_2" listLogo={listLogo} />
           
            </SRLWrapper>
        </div>
    );
}

export default MyComponent;