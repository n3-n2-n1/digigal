import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Categories.css";

import cat1 from "../../../../public/imgs/Categories/cat1.png";
import cat2 from "../../../../public/imgs/Categories/cat2.png";
import cat3 from "../../../../public/imgs/Categories/cat3.png";


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

const Categories = () => {

  {/* Inicializo AOS para las Animaciones */ }
  const initializeAOS = () => {
    AOS.init({
      once: false,
      easing: 'ease-out',
    });
  };

  useEffect(() => {
    initializeAOS();
  }, []);


  {/* Información "Hardcodeada" de los miembros del equipo */ }
  const teamData = [
    {
      name: "Ivan Saroka",
      position: "CEO Infinix Holding Group, Founder & Investor.",
      social: "https://www.linkedin.com/in/isaroka/",
      image: "../../../../public/imgs/Categories/cat1.png",
    },
    {
      name: "Marcos Vittorio",
      position: "CEO InfinixSoft.",
      social: "https://www.linkedin.com/company/1065325/",
      image: "../../../../public/imgs/Categories/cat2.png",
    },
    {
      name: "Hérnan Paez",
      position: "Chief Technology Officer (CTO).",
      social: "https://www.linkedin.com/company/1065325/",
      image: "../../../../public/imgs/Categories/cat3.png",
    },
  ];


  return (
    <section id="#categories" class="bg-black">

      <div class="container">
      <h1 id="team_title" className="title-bold-1 infinix-title-black text-center mb-lg-5 wow fadeInUpSmall" data-wow-duration="1s" data-wow-delay=".2s"> Categories<span className="selected-whitebg"> #avantGarde</span></h1>

        <div class="row">

          <div class="col-md-4">
            <div class="card">
              <img src="../../../../public/imgs/Categories/cat1.png" class="card-img-top" alt="..." />
              <div class="card-body text-center d-flex flex-column ">
                <h5 class="card-title mb-5">BA Art</h5>
                <button type="submit" class="btn btn-white align-self-center">Explore</button>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <img src="../../../../public/imgs/Categories/cat1.png" class="card-img-top" alt="..." />
              <div class="card-body text-center d-flex flex-column">
                <h5 class="card-title mb-5">Collectibles</h5>
                <button type="submit" class="btn btn-white align-self-center">Explore</button>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <img src="../../../../public/imgs/Categories/cat1.png" class="card-img-top" alt="..." />
              <div class="card-body text-center d-flex flex-column">
                <h5 class="card-title mb-5">Metaverse</h5>
                <button type="submit" class="btn btn-white align-self-center">Explore</button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Categories