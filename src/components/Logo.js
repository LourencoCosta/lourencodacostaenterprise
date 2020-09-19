import React from 'react'

export default function Logo({ logoName, listLogo, classNameString}) { 
    console.log('Este é o list logo ' + {listLogo})
    const logoPath = listLogo.find(logo => logo.name === logoName)
    if (!classNameString){   
        return (
        
            <div className="cardLogo">
                <img src={logoPath.path} alt={logoPath.name} />
            </div>
        )
    }else{
        return (
            <div className="cardLogo">
                <img src={logoPath.path} alt={logoPath.name} className={classNameString}/>
            </div>
        )
    }


}