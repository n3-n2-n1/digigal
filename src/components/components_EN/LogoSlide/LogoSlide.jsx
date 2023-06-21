import React from 'react'
import style from "./LogoSlide.css"
import infobae from "../../../../public/imgs/Partners/infobae.jpg"
import cisco from "../../../../public/imgs/Partners/cisco.png"
import ebay from "../../../../public/imgs/Partners/ebay.png"



const LogoSlide = () => {
  return (

    <section className="slider">


      <div className="container">

        <div className="logoSlider">

          <div className="slider1">
            <img src={infobae} />
            <img src={cisco} />
            <img src={ebay} />
            <img src={infobae} />
            <img src={cisco} />
            <img src={ebay} />
            <img src={infobae} />
            <img src={cisco} />
            <img src={ebay} />
            <img src={ebay} />
            <img src={ebay} />
            <img src={ebay} />
            <img src={ebay} />
            <img src={ebay} />
            <img src={ebay} />

          </div>

          </div>
      </div>

    </section>
  )
}

export default LogoSlide