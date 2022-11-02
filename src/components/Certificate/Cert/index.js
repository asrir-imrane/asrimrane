import { useEffect, useRef } from 'react'

import LogoS from '../../../assets/images/Sans titre.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  

  return (
    <div className="logo-containerss" ref={bgRef}>
      <img
        className="solid-logoss"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />


      
    </div>
  )
}

export default Logo