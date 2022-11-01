import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Pdf from 'C:/Users/asrir/react-portfolio/src/assets/pdf/asrir.pdf'
import Ensem from '../About/Ensem'
import Loader from 'react-loaders'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
const  About = ()=> {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    
      return (
        <>
          <div className="container about-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e','.']}
              idx={15}
            />
                </h1>
          <p>
          Currently I am a computer science engineering student in the 3rd year  at ENSEM.<br></br>
          
         
          </p>
          <p align="LEFT">
          <strong>I am looking for a PFE internship in Web development,
          software development, ERP system, Devops.</strong>
          </p>
          <p>
          My passion and curiosity in the computer field allowed me
          to acquire high-level technical skills and
          learn new technologies.
          </p>
          
          <h1>
                <AnimatedLetters
                  letterClass={letterClass}
              strArray={['E','x','p','é','r','i','e','n','c','e','s','.']}
              idx={15}
            />
                </h1>
          <p>
      </p>
      
      <p >
          <ul>
      <li><strong> Intern at Mohammed VI University of Health Sciences </strong> | July. 2022 - Sept. 2022</li>
      <ul>
        <li>Automation of a process on a BPMN platform (Alfresco Process Services) </li>
      </ul>
      </ul>
      </p>
      <p  >
          <ul>
      <li><strong> Intern at Mohammed VI University of Health Sciences</strong> | July. 2021 - Sept. 2021</li>
      </ul>
      </p>
    <p>
    <ul>
      <li><strong>Seller (E-commerce)</strong></li>
      <ul>
        <li> <FontAwesomeIcon icon={faGlobe} color="#000"/><a href="https://zeffana.com" target="_blank" rel="noreferrer" > www.zeffana.com </a> | Jan. 2020 - August. 2022</li>
        <ul>
        <li>Shoe store</li>
      </ul>
        <li><FontAwesomeIcon icon={faInstagram} color="#000"/><a href=" https://www.instagram.com/electro_zeffana/" target="_blank" > ElectroZeffana </a>  | juil. 2019 - Janv. 2021</li>
        <ul>
        <li>Shop selling electronic equipment</li>
      </ul>
      </ul>
      </ul>       
    </p>
      <p>
      <ul>
      <li> <strong>Designer (Freelance)</strong> | Jan. 2020 - présent</li>
      <ul>
        <li>Logo design</li>
      </ul>
      <ul>
        <li>Creation of advertising poster</li>
      </ul>
     

    </ul>
      </p>
      
          <a href={Pdf} download="asrir.pdf"  className ='flat-button'>DOWNLOAD CV</a>

          </div>
          <Ensem/>
        </div>
        <Loader type="pacman" />
        </>
    )
        

    
}
export default About