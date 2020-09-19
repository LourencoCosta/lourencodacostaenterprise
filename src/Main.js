import React from 'react';
//import React, { useEffect, useState } from 'react';
//import Carousel from 'react-bootstrap/Carousel'
//css
import './Main.css';
//js
//import script_slides from './slides.js';

//componentes
import Menu from './components/Menu'
import Logo from './components/Logo'
import ControlledCarousel from './components/controlledCarousel'
//images
import logoQuitutes from './assets/logo.png'
import caldos from './assets/caldos.jpg'
import marmitas from './assets/Marmitoas.jpg'
import salsinha from './assets/salsinha.jpg'
import pathy from './assets/pathy.png'
//import berinjela from './assets/berinjela.jpg'
//import bucho from './assets/bucho.jpg'
//import feijoada from './assets/feijoada.jpg'
//import Shimeji from './assets/Shimeji.jpg'

function Main() {
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

    <div className="container-main">
      <div className="div-arredondada div-home-menu">
        <Menu />
        <div className="logoCentral">
          <Logo logoName="logoQuitutes" listLogo={listLogo} />
        </div>
      </div>

      <div className="div-arredondada div-home-nossa-especilidade">
        <p className="paragrafo-titulo">Nossa Especialidade</p>
        <p className="pagrafo-subtitulo">Levar alegria para seu estômago!</p>
        <div className="div-linha"></div>
        <p className="paragrafo-texto">
          Nossa especialidade é levar alegria através da gastronomia afetiva, comidas feitas de acordo com o gosto do cliente para que cada mordida seja como uma experiência divina.
        </p>
        <p className="paragrafo-texto">
          Todos os pratos possuem a assinatura da chef de cozinha Patricia Paula Amancio, que possui graduação em gastronomia e atua atendendo desde bufês para festas diversas (casamentos, aniversários, festa de debutante, confraternizações, etc.), confecção de marmitas low carb feitas sobre encomenda, cuscuz, lasanhas (alface, abobrinha, carne com queijo, etc.), tortas, Nhoques, feijoadas, entre outros pratos.
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

         <div className="div-controlledCarousel">  <ControlledCarousel/></div>
       
      </div>

      <div className="div-arredondada">
        <p className="paragrafo-titulo">Cardápios</p>
        <p className="pagrafo-subtitulo">Aqui é onde começa a sua satisfação, confira os nossos pratos disponíveis para encomendas!</p>
        <div className="div-linha"></div>
      </div>

      <div className="div-arredondada">
        <p className="paragrafo-titulo">Depoimentos</p>
        <p className="pagrafo-subtitulo">Aqui alguns depoimentos de algumas pessoas que já provaram dos nossos serviços|</p>
        <div className="div-linha"></div>
      </div>

      <div className="div-arredondada">
        <p className="paragrafo-titulo">Contato</p>
        <p className="pagrafo-subtitulo">Entre em contato para mais detalhes.</p>
        <div className="div-linha"></div>
      </div>

      <div className="div-arredondada">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
      <div className="div-arredondada">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>

 


    </div>


  )
}

export default Main;
