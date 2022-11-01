
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import React from 'react'
import "./index.scss"

import Cert from './Cert'
import Loader from 'react-loaders'



const Certificate = ()=>{
    

        
        const [letterClass, setLetterClass] = useState('text-animate')
        useEffect(() => {
             setTimeout(() => {
              setLetterClass('text-animate-hover')
            }, 3000)
          }, [])
        
          return (
            <> 
            <div className="container certificate-page">
                <div className="text-zone">
                  <h1>
                    <AnimatedLetters
                      letterClass={letterClass}
                  strArray={['C', 'e', 'r', 't', 'i', 'f','i','c','a','t','e']}
                  idx={15}
                />
                    </h1>
                    <p>
                    <ul>
      <li>Progamation Java <strong>(OpenClassrooms)</strong></li>
      </ul>
      
      </p>
      
      <p >
          <ul>
      <li>Progamation Javascript<strong>(OpenClassrooms)</strong></li>
      </ul>
      </p>
    <p>
    <ul>
      <li>Écrivez du JavaScript pour le web<strong>(OpenClassrooms)</strong></li>
      </ul>       
    </p>
    <p>
    <ul>
      <li>JavaScript course<strong>(Sololearn)</strong></li>
      </ul>       
    </p>
    <p>
    <ul>
      <li>Php course<strong>(Sololearn)</strong></li>
      </ul>       
    </p>
     
      <p align="LEFT" >
      <ul>
      <li>DevOps <strong>(Orange Digital Center)</strong></li>
    </ul>
      </p>
      
        </div>
        
        <Cert/>
            </div>
            <Loader type="pacman" />
          </>
    );
}
export default Certificate