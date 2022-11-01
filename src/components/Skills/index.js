import 'C:/Users/asrir/react-portfolio/src/components/Skills/index.scss'

import { Container, Row, Col } from 'react-grid-system';

import { useEffect, useState } from 'react'
import {
 
  faCss3,
  faDocker,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faJava,
  faJenkins,
  faJsSquare,
  faPhp,
  faReact,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const  Skills = ()=> {
 
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    
      return (
        <> 
        <div className="container skills-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
                </h1>
                <Container>
                            <Row align="center" justify="center" direction="row" style={{ height: '300px' }} >
                                <Col xs={5} >
                                    <p>HTML</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"90%"}}></div>
                                    </div>
                                    <p>CSS</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"85%"}}></div>
                                    </div>
                                    <p>SCSS</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"80%"}}></div>
                                    </div>
                                    <p>Javascript</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"60%"}}></div>
                                    </div>
                                    
                                </Col>
                                <Col xs={1} ></Col>
                                
                                <Col xs={5} >
                                    <p>React</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"70%"}}></div>
                                    </div>
                                    <p>Wordpress</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"55%"}}></div>
                                    </div>
                                    <p>WooCommerce</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"40%"}}></div>
                                    </div>
                                    <p>boostrap</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"30%"}}></div>
                                    </div>
                                </Col>
                                </Row>

                                <Row align="center" justify="center" direction="row" style={{ height: '80px' }} ></Row>
                                <Row align="center" justify="center" direction="row" style={{ height: '300px' }} >
                                <Col xs={5} >
                                    <p>JAVA</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"80%"}}></div>
                                    </div>
                                    <p>PHP</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"60%"}}></div>
                                    </div>
                                    <p>C++</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"40%"}}></div>
                                    </div>
                                    <p>Python</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"30%"}}></div>
                                    </div>
                                </Col>
                                
                                <Col xs={1} ></Col>
                                <Col xs={5} >
                                    <p>Adobe Illustrator</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"90%"}}></div>
                                    </div>
                                    <p>Adobe XD</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"50%"}}></div>
                                    </div>
                                    <p>Adobe InDesign</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"40%"}}></div>
                                    </div>
                                    <p>Figma</p>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"60%"}}></div>
                                    </div>
                                </Col>
                                
                            </Row>

                        </Container>
                        
                       

          </div>
          <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faFigma} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            
          </div>
          
        </div>
        <div className="stage-cube2-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGithub} color="#00000" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJenkins} color="#000" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faDocker} color="#0db7ed" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPhp} color="#777BB3" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faWordpress} color="#00749C" />
            </div>
            
          </div>
          
        </div>
        </div>
        <Loader type="pacman" />
        </>
       
        
     
    )
   
}

export default Skills
