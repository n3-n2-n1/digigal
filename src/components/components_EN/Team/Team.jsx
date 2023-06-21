import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Team.css"

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
      name: "Ivan Saroka",
      position: "CEO Infinix Holding Group, Founder & Investor.",
      social: "https://www.linkedin.com/in/isaroka/",
      image: "../../../public/imgs/Team/Ivan.png",
    },
    {
      name: "Marcos Vittorio",
      position: "CEO InfinixSoft.",
      social: "https://www.linkedin.com/company/1065325/",
      image: "../../../public/imgs/Team/Vittorio.png",
    },
    {
      name: "Hérnan Paez",
      position: "Chief Technology Officer (CTO).",
      social: "https://www.linkedin.com/company/1065325/",
      image: "../../../public/imgs/Team/hernan.png",
    },
    {
      name: "Marcela Biondi",
      position: "CFO.",
      social: "https://www.linkedin.com/company/1065325/",
      image: "../../../public/imgs/Team/marce.png",
    },
    {
      name: "Martin Gimenez",
      position: "Head of Legal & Compliance.",
      social: "https://www.linkedin.com/company/1065325/",
      image: "../../../public/imgs/Team/martin.png",
    },
    {
      name: "Luis Paez",
      position: "Business Development Manager.",
      social: "https://www.linkedin.com/in/luis-santiago-paez/",
      image: "../../../public/imgs/Team/luis.png",
    },
    {
      name: "Jeronimo G. Hutton",
      position: "Business Developer.",
      social: "https://www.linkedin.com/in/jeronimohutton",
      image: "../../../public/imgs/Team/jero.png",
    },
    {
      name: "Tommy Sondgroth",
      position: "Sales Manager US Market.",
      social: "https://www.linkedin.com/in/tommy-sondgroth-b151771a4",
      image: "../../../public/imgs/Team/Tommy.png",
    },
    {
      name: "Fernando Lepore",
      position: "Commercial Manager.",
      social: "https://www.linkedin.com/in/fernando-lepore-33125929",
      image: "../../../public/imgs/Team/fer.png",
    },
    {
      name: "Valeria Caracciolo",
      position: "Expansion leader, EMEA.",
      social: "https://www.linkedin.com/in/valeriacaracciolo",
      image: "../../../public/imgs/Team/vale.png",
    },
    {
      name: "Alejandro Bustos",
      position: "Partner solution adviser.",
      social: "https://www.linkedin.com/in/alebustos/",
      image: "../../../public/imgs/Team/ale.png",
    },
    {
      name: "Ayelen Vignuda",
      position: "Human Resources",
      social: "https://www.linkedin.com/in/ayelén-vignuda-46b782132",
      image: "../../../public/imgs/Team/aye.png",
    },
    {
      name: "Lisianne Cabral De Melo",
      position: "Partner - BRASIL.",
      social: "https://www.linkedin.com/company/1065325/",
      image: "../../../public/imgs/Team/Lisiane.png",
    },
  ];


  return (
    <div id="team" className="container-xxxl pt-6 pb-10">

      {/* Title */}
      <section data-aos-delay="290" data-aos-duration="1180" data-aos="fade-up" className="content-space-0 content-space-b-lg-1 pt-8">
        <div className="container content-space-b-0">
          <div className="row">
            <div className="col-lg-12">
              <h1 id="team_title" className="title-bold-1 infinix-title-black text-center mb-lg-5 wow fadeInUpSmall" data-wow-duration="1s" data-wow-delay=".2s"> Our <span className="selected-whitebg">Team</span></h1>
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
          <section data-aos-delay="890" data-aos-duration="1880" data-aos="fade-up" className="team_card" key={index}>
            <img src={member.image} alt={member.name} />
            <div data-aos-delay="890" data-aos-duration="1680" data-aos="fade-up">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <a href={member.social} target="_blank" rel="noreferrer">
                <img className="linkedin" src="../../../public/imgs/Icons/icons8-linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </section>
        ))}
      </Carousel>
    </div>
  );
};

export default Team