import { useEffect, useRef } from 'react'

import Sans from '../../../assets/images/ENSEM.png'
import './index1.scss'

const Certif = () => {
  const bgRef = useRef()
  
  const solidLogoRef = useRef()

  

  return (
    <div className="logo-containers" ref={bgRef}>
      <img
        className="solid-logos"
        ref={solidLogoRef}
        src={Sans}
        alt=""
      />


      
    </div>
  )
}

export default Certif