import LogoTitle from '../../assets/images/logo-s1.png';

import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = ()=>{
    const [letterClass ,setLetterClass]= useState('text-animate')
    const nameArray = ['S','R','I','R']
    const jobArray = ['C','o','m','p','u','t','e','r',' ','S','c','i','e','n','c','e',' ','S','t','u','d','e','n','t','.',]
   
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])
    
    return (
        <>
              <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>    
                    <br/> 
                    <span className={`${letterClass} _13`}>I</span>    
                    <span className={`${letterClass} _14`}>'m</span>    
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                    <br/>

                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}/>
                    </h1>
                    
                    <a href="mailto:myinbox@asrimrane.live?
&subject=The%20subject%20of%20the%20email
&body=The%20body%20of%20the%20email" className ='flat-button'>

                                CONTACT ME  

                            </a>
                 </div>
                 <Logo/>
            </div>
            
            <Loader type="pacman" />
          </>
    );
}
export default Home