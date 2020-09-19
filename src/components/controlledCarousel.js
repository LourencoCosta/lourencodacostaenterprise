//import React, { useState } from 'react';
import React from 'react';
import Logo from './Logo'
import Carousel from 'react-bootstrap/Carousel'
import '../Main.css';

import logoQuitutes from '../assets/logo.png'
import caldos from '../assets/caldos.jpg'
import marmitas from '../assets/Marmitoas.jpg'
import salsinha from '../assets/salsinha.jpg'
import pathy from '../assets/pathy.png'

export default function ControlledCarousel() {


    const listLogo = []
    async function chargeLogo() {
        listLogo.push({ name: 'logoQuitutes', path: logoQuitutes })
        listLogo.push({ name: 'pathy', path: pathy })
        listLogo.push({ name: 'caldos', path: caldos })
        listLogo.push({ name: 'marmitas', path: marmitas })
        listLogo.push({ name: 'salsinha', path: salsinha })
        console.log(listLogo)
    }
    chargeLogo()

    return (
        <Carousel data-ride="carousel" data-interval="false">

            <Carousel.Item >
                <Logo logoName="caldos" listLogo={listLogo} classNameString={'d-block w-100'} />

            </Carousel.Item>

            <Carousel.Item>
                <Logo logoName="marmitas" listLogo={listLogo} classNameString={'d-block w-100'} />

            </Carousel.Item>

            <Carousel.Item>
                <Logo logoName="salsinha" listLogo={listLogo} classNameString={'d-block w-100'} />

            </Carousel.Item>
        </Carousel>
    )
}


