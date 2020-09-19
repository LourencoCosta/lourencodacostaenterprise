import React from 'react';

import './Main.css';
//componentes

import Logo from './components/Logo'

//images
import logoQuitutes from './assets/logo.png'

import pathy from './assets/pathy.png'
import face_logo from './assets/face_logo.jpg'
import logo_whats from './assets/logo_whats.png'
import insta_logo from './assets/insta_logo.png'


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

        <div className="logoCentral">
          <Logo logoName="logoQuitutes" listLogo={listLogo} />
          <p>Página em Construção</p>
        </div>

      </div>

      <div className="div-arredondada div-em-construcao">
        <p>Entre em contato: </p>
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

    </div>


  )
}

export default Main;
