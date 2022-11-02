import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBrain, faDownload, faHome,  faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
 const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo'>
        <img src={LogoS} alt="logo" />
        <img className='sub-logo' src={LogoSubtitle} alt="Asrir" />
        </Link>
        <nav>
            <div>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            </div>
            
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon={faBrain} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="certificate-link" to="/certificate">
                <FontAwesomeIcon icon={faAward} color="#4d4d4e"/>
            </NavLink>
            <a href='asrir.pdf' download="asrir.pdf" className="cv-link" to="/cv">
                <FontAwesomeIcon icon={faDownload} color="#4d4d4e"/>
            </a>
           
            
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/imrane-asrir/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/asrir-imrane'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://twitter.com/imrane_asrir'
                >
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
 )
 export default Sidebar
