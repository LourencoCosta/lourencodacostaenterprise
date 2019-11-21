import React from 'react'

export default function Logo({ logoName, listLogo }) { 
    console.log('Este é o list logo ' + {listLogo})
    const logoPath = listLogo.find(logo => logo.name === logoName)
    return (<div className="cardLogo">
        <img src={logoPath.path} alt={logoPath.name} />
       
        </div>)

}