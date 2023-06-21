import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Trending.css"
import nft1 from "../../../../public/imgs/Trending/off-1.png";
import nft2 from "../../../../public/imgs/Trending/off-2.png";
import nft3 from "../../../../public/imgs/Trending/off-3.png";
import nft4 from "../../../../public/imgs/Trending/off.png";


import { useEffect } from "react";

// Configuración del slider, cuanto elementos mostrar en cuestion del tamaño de la pantalla.

const responsive = {
  LargeDesktop: {
    breakpoint: { max: 4000, min: 1100 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1100, min: 850 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 850, min: 590 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 590, min: 0 },
    items: 1
  }
};

const Team = () => {
  
{/* Inicializo AOS para las Animaciones */}
  const initializeAOS = () => {
    AOS.init({
      once: false,
      easing: 'ease-out',
    });
  };

  useEffect(() => {
    initializeAOS();
  }, []);


{/* Información "Hardcodeada" de los miembros del equipo */}
  const teamData = [
    {
      image: `${nft1}`,
    },
    {
      name: "Carolina Ramirez",
      position: "CEO InfinixSoft.",
      social: "https://www.linkedin.com/company/1065325/",
      image: `${nft2}`,
    },
    {
      name: "Agustin Gamietea",
      position: "Sales Management",
      social: "https://www.linkedin.com/company/1065325/",
      image: `${nft3}`,
    },
    {
      name: "Agustin Gamietea",
      position: "Sales Management",
      social: "https://www.linkedin.com/company/1065325/",
      image: `${nft4}`,
    },
  ];


  return (
    <div id="team" className="container-xxxl pt-6 pb-10">

      {/* Title */}
      <section data-aos-delay="290" data-aos-duration="1180" data-aos="fade-up" className="content-space-0 content-space-b-lg-1 pt-8">
        <div className="container content-space-b-0">
          <div className="row">
            <div className="col-lg-12">
              <h1 id="team_title" className="title-bold-1 infinix-title-black text-center mb-lg-5 wow fadeInUpSmall" data-wow-duration="1s" data-wow-delay=".2s"> #trending <span className="selected-whitebg">NFTs</span></h1>
            </div>
          </div>
        </div>
      </section>

      {/* Componente Carousel - Configuración de Props */}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3600}
        centerMode={false}
        className="sliderContainer"
        containerClass="container-with-dots"
        dotListClass=""
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* Recorro cada Objeto del Array "teamData" */}
        {teamData.map((member, index) => (
         
            <img src={member.image} alt={member.name} className="img" />
            
         
        ))}
      </Carousel>
    </div>
  );
};

export default Team