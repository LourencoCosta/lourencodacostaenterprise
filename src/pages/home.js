import React from 'react';

//import React, { useEffect, useState } from 'react';
//import Carousel from 'react-bootstrap/Carousel'
//css
import './home.css';
//js
//import script_slides from './slides.js';
import SimpleReactLightbox from "simple-react-lightbox";
import MyComponent from "../components/MyComponent";

import Menu from '../components/Menu'
import Logo from '../components/Logo'
import Cardapios from '../components/Cardapios'


//images
import logoQuitutes from '../assets/logo.png'
import pathy from '../assets/pathy.png'

import face_logo from '../assets/face_logo.jpg'
import logo_whats from '../assets/logo_whats.png'
import insta_logo from '../assets/insta_logo.png'


//https://www.npmjs.com/package/simple-react-lightbox
//https://codesandbox.io/s/simple-react-lightboxss-39wrb?fontsize=10
function Main() {
  const listLogo = []
  async function chargeLogo() {
    listLogo.push({ name: 'logoQuitutes', path: logoQuitutes })
    listLogo.push({ name: 'pathy', path: pathy })

    listLogo.push({ name: 'face_logo', path: face_logo })
    listLogo.push({ name: 'logo_whats', path: logo_whats })
    listLogo.push({ name: 'insta_logo', path: insta_logo })
    console.log(listLogo)
  }
  chargeLogo()



  return (
    <div className="container-main">
      <div className="div-arredondada div-home-menu">
        <div className="div-menu"><Menu /></div>
        <div className="logoCentral">
          <Logo logoName="logoQuitutes" listLogo={listLogo} />

        </div>
        <p> Nossa Alegria é fazer os seu estomago sorrir</p>
      </div>

      <div className="div-arredondada div-home-nossa-especilidade">
        <p className="paragrafo-titulo">Nossa Especialidade</p>
        <p className="pagrafo-subtitulo">Levar alegria para seu estômago!</p>
        <div className="div-linha"></div>
        <p className="paragrafo-texto">
          Nossa especialidade é levar alegria através da gastronomia afetiva, comidas feitas de acordo com o gosto do cliente para que cada mordida seja como uma experiência divina.
        </p>
        <p className="paragrafo-texto">
          Todos os pratos possuem a assinatura da chef de cozinha Patricia Paula Amancio, que possui graduação em gastronomia e atua atendendo desde buffets para festas diversas (casamentos, aniversários, festa de debutante, confraternizações, etc.), confecção de marmitas low carb feitas sobre encomenda, cuscuz, lasanhas (alface, abobrinha, carne com queijo, etc.), tortas, Nhoques, feijoadas, entre outros pratos.
        </p>
        <div className="div-depoimento-pathy">
          <div className="div-foto-pathy"><Logo logoName="pathy" listLogo={listLogo} /><p className="paragrafo-nome">Chef Patricia Paula Amancio</p></div>
          <p className="paragrafo-texto paragrafo-depoimento">"Eu amo trabalhar na cozinha, é uma forma de compartilhar amor e afeto."</p>
        </div>
      </div>

      <div className="div-arredondada div-home-galeria-tentacao">
        <p className="paragrafo-titulo">Galeria da Tentação</p>
        <p className="pagrafo-subtitulo">Atenção: cenas fortes para seu apetite, não recomendamos a visualização caso você esteja com fome!</p>
        <div className="div-linha"></div>

        <SimpleReactLightbox>
          <MyComponent />
        </SimpleReactLightbox>


      </div>

      <div className="div-arredondada div-cardapios">
        <p className="paragrafo-titulo">Cardápios</p>
        <p className="pagrafo-subtitulo">Aqui é onde começa a sua satisfação, confira os nossos pratos disponíveis para encomendas!</p>
        <div className="div-linha"></div>
        <SimpleReactLightbox>
          <Cardapios/>
        </SimpleReactLightbox>
      </div>

      <div className="div-arredondada div-contato">
        <p className="paragrafo-titulo">Contato</p>
        <p className="pagrafo-subtitulo">Entre em contato para mais detalhes.</p>
        <div className="div-linha"></div>
        <div className="logo-redessociais">
          <Logo logoName="face_logo" listLogo={listLogo} />
          <p>Facebook: </p> <a href="https://www.facebook.com/quitutesdapathy">quitutesdapathy</a>
        </div>
        <div className="logo-redessociais">
          <Logo logoName="insta_logo" listLogo={listLogo} />
          <p>Instagram: </p> <a href="https://www.instagram.com/quitutesdapathy/">@quitutesdapathy</a>
        </div>
        <div className="logo-redessociais">
          <Logo logoName="logo_whats" listLogo={listLogo} />
          <p>Whatsapp: </p> <a href="https://bit.ly/quitutesdapathy">98135-5009</a>
        </div>
      </div>

      <div className="div-arredondada">

        <div className="App">

        </div>


      </div>

    </div>


  )
}

export default Main;
