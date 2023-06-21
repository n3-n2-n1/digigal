import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';

const About = () => {
  const initializeAOS = () => {
    AOS.init({
      once: false,
      easing: 'ease-out',
    });
  };

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'NFT Marketplace',
        'WEB3 Community',
        'Avant-garde NFT',
        "Unlock more"
      ],
      typeSpeed: 40, // Velocidad de escritura
      backSpeed: 30, // Velocidad de borrado
      loop: true, // Repetir infinitamente
      loopCount: Infinity, // Número de repeticiones infinitas
      showCursor: false, // Ocultar el cursor de escritura
      backDelay: 1500, // Retraso antes de iniciar el borrado
      startDelay: 1000, // Retraso antes de iniciar la escritura
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleScroll = () => {
    const scrollBg = document.getElementById('scrollbg2');
    if (scrollBg) {
      const opacity = 1 - window.scrollY / 1450;
      scrollBg.style.opacity = opacity;
    }
  };

  useEffect(() => {
    initializeAOS();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about-us" className="bg-black content-space-t-1 content-space-b-2 content-space-t-lg-2 content-space-b-lg-4">
      <div className="container-xl">
        <div id="scrollbg2" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
          <div className="row pb-5 pb-lg-10">
            <div className="col-lg-3">
              <h3 className="font-700 mb-7">About us</h3>
            </div>
            <div className="col-lg-9">
              <div>
                <h4
                  id="effect_letters"
                  className="display-6 font-300"
                  data-aos-duration="1280"
                  data-aos-delay="390"
                >
                  <span style={{ backgroundColor: 'white', padding: '2px', color: 'black' }}>
                  DIGIGAL | NFT Marketplace
                    <br />
                  </span>
                  <span ref={el} />
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="border-t-white pt-8">
                <h3 className="font-300" data-aos-duration="1280" data-aos-delay="390">
                  Explore, mint, sell and buy, easier than ever.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


