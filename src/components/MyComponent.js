import React from "react";
// Import SRLWrapper
import { SRLWrapper } from "simple-react-lightbox";

import Logo from '../components/Logo'

import caldo_1 from '../assets/fotosgaleria/caldos/caldos_05.jpg'
import caldo_2 from '../assets/fotosgaleria/caldos/caldos_04.jpg'

import evento_12 from '../assets/fotosgaleria/Eventos/evento_12.jpg'
import evento_11 from '../assets/fotosgaleria/Eventos/evento_11.jpg'
import evento_2 from '../assets/fotosgaleria/Eventos/evento_2.jpg'
import marmitas_10 from '../assets/fotosgaleria/marmitas/marmitas_10.jpg'
import marmitas_52 from '../assets/fotosgaleria/marmitas/marmitas_52.jpg'
import marmitas_524 from '../assets/fotosgaleria/marmitas/marmitas_524.jpg'
import marmitas_800 from '../assets/fotosgaleria/marmitas/marmitas_800.jpg'
import maionese_01 from '../assets/fotosgaleria/maionese/maionese_01.jpg'
import maionese_03 from '../assets/fotosgaleria/maionese/maionese_03.jpg'
import maionese_02 from '../assets/fotosgaleria/maionese/maionese_02.jpg'

function MyComponent() {

    const listLogo = []
    async function chargeLogo() {
        listLogo.push({ name: 'caldo_1', path: caldo_1 })
        listLogo.push({ name: 'caldo_2', path: caldo_2 })
        listLogo.push({ name: 'evento_12', path: evento_12 })
        listLogo.push({ name: 'evento_11', path: evento_11 })
        listLogo.push({ name: 'evento_2', path: evento_2 })
        listLogo.push({ name: 'marmitas_10', path: marmitas_10 })
        listLogo.push({ name: 'marmitas_52', path: marmitas_52 })
        listLogo.push({ name: 'marmitas_524', path: marmitas_524 })
        listLogo.push({ name: 'marmitas_800', path: marmitas_800 })

        listLogo.push({ name: 'maionese_01', path: maionese_01 })
        listLogo.push({ name: 'maionese_02', path: maionese_02 })
        listLogo.push({ name: 'maionese_03', path: maionese_03 })

        console.log(listLogo)
    }
    chargeLogo()
    return (
        <div className="MyComponent">
            <SRLWrapper>
            
            <Logo logoName="caldo_1" listLogo={listLogo} />
            <Logo logoName="caldo_2" listLogo={listLogo} />
            <Logo logoName="evento_12" listLogo={listLogo} />
            <Logo logoName="evento_11" listLogo={listLogo} />
            <Logo logoName="evento_2" listLogo={listLogo} />
            <Logo logoName="marmitas_52" listLogo={listLogo} />
            <Logo logoName="marmitas_10" listLogo={listLogo} />
            <Logo logoName="marmitas_524" listLogo={listLogo} />
            <Logo logoName="marmitas_800" listLogo={listLogo} />
            <Logo logoName="maionese_01" listLogo={listLogo} />
            <Logo logoName="maionese_02" listLogo={listLogo} />
            <Logo logoName="maionese_03" listLogo={listLogo} />
            </SRLWrapper>
        </div>
    );
}

export default MyComponent;