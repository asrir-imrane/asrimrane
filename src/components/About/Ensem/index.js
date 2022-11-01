import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import Sans from '../../../assets/images/ENSEM.png'
import './index1.scss'

const Certif = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

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