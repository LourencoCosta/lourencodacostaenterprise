import React from 'react';
import './Main.css';
import Footer from './components/Footer'
import Menu from './components/Menu'
import Logo from './components/Logo'

 //images of logo
 import s3Logo from './assets/s3.png'
 import cLogo from './assets/C.png'
 import reactLogo from './assets/react.png'
 import javaLogo from './assets/java.png'
 import gitLogo from './assets/Git.png'
 import jsLogo from './assets/JS.png'
 import nodeLogo from './assets/node.png'
 import css3 from './assets/css3.png'
 import html5 from './assets/html5.png'
 import java from './assets/java.png'
 import junit from './assets/junit.png'
 import oracledb from './assets/orcacledb.png'
 import spring from './assets/spring.png'
 import wildfly from './assets/wildfly.png'

function Main() {

  const listLogo = []
  async function chargeLogo() {
    listLogo.push({ name: 's3Logo', path: s3Logo })
    listLogo.push({ name: 'cLogo', path: cLogo })
    listLogo.push({ name: 'reactLogo', path: reactLogo })
    listLogo.push({ name: 'javaLogo', path: javaLogo })
    listLogo.push({ name: 'gitLogo', path: gitLogo })
    listLogo.push({ name: 'jsLogo', path: jsLogo })
    listLogo.push({ name: 'nodeLogo', path: nodeLogo })

    listLogo.push({ name: 'css3', path: css3 })
    listLogo.push({ name: 'html5', path: html5 })
    listLogo.push({ name: 'java', path: java })
    listLogo.push({ name: 'junit', path: junit })
    listLogo.push({ name: 'oracledb', path: oracledb })
    listLogo.push({ name: 'spring', path: spring })
    listLogo.push({ name: 'wildfly', path: wildfly })

    console.log(listLogo)
  }
  chargeLogo()


  return (
    <div className="container-main">
      <Menu />
      <section className="container-body">

        <section> Quem Sou eu </section>

        <p className="description"> Sou técnico em telecomunicações e snalista de sistemas Graduado com 5 anos de experiência na área de desenvolvimento de  sitemas, com passegem por grandes empresas nas áreas fiscais e de telcomunicações</p>
        <p className="description">Atualmente trabalho como analista de sistemas na Fundação CPqD onde atuo na área de desenvolviemnto de produtos e manutenções corretivas, além de atuar em um empreendimento próprio na área de soluções de software a Lourenco Enterprise, com atuação em território nacional</p>


        <div className="jumbotron">
          <p className="titleExperience">Experiencia com Tecnologias</p>
          <div>
            <Logo logoName="reactLogo" listLogo={listLogo}></Logo>
            <p>React js</p>
          </div>
          <div>
            <Logo logoName="javaLogo" listLogo={listLogo}></Logo>
            <p>Java</p>
          </div>
          <div>
            <Logo logoName="gitLogo" listLogo={listLogo}></Logo>
            <p>Git</p>
          </div>
          <div>
            <Logo logoName="wildfly" listLogo={listLogo}></Logo>
            <p>WildFly</p>
          </div>
          <div>
            <Logo logoName="oracledb" listLogo={listLogo}></Logo>
            <p>Oracle</p>
          </div>
          <div>
            <Logo logoName="s3Logo" listLogo={listLogo}></Logo>
            <p>Amazon</p>
          </div>
          <div>
            <Logo logoName="css3" listLogo={listLogo}></Logo>
            <p>CSS3</p>
          </div>
          <div>
            <Logo logoName="html5" listLogo={listLogo}></Logo>
            <p>HTML5</p>
          </div>
          <div>
            <Logo logoName="jsLogo" listLogo={listLogo}></Logo>
            <p>Javascript</p>
          </div>
          <div>
            <Logo logoName="spring" listLogo={listLogo}></Logo>

            <p>Spring Boot</p>
          </div>
          <div>
            <Logo logoName="cLogo" listLogo={listLogo}></Logo>
            <p>C</p>
          </div>
          <div>
            <Logo logoName="junit" listLogo={listLogo}></Logo>
            <p>JUnit</p>
          </div>
          <div>
            <Logo logoName="nodeLogo" listLogo={listLogo}></Logo>
            <p>Node</p>
          </div>
        </div>
      </section>

      <Footer name="inicial"> </Footer>
    </div>

  )
}

export default Main;
