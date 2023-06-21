import '../styles/vendor.min.css';
import '../styles/App.css';
import { useEffect, useState } from 'react';
import Preloader from '../components/components_EN/Preloader/Preloader';
import Header from "../components/components_EN/Header/Header";
import Hero from "../components/components_EN/Hero/Hero";
import About from "../components/components_EN/About/About";
import Enterprises from "../components/components_EN/Enterprises/Enterprises";
import Trending from "../components/components_EN/Trending/Trending";
import SolutionsText from "../components/components_EN/SolutionsText/SolutionsText";
import Partners from "../components/components_EN/Partners/Partners";
import Footer from "../components/components_EN/Footer/Footer";
import CookiesModal from '../components/components_EN/Cookies/Cookies';
import BackToTopButton from '../components/components_EN/BackToTopButton/Button';
import Collections from '../components/components_EN/Collections/Collections';
import Categories from '../components/components_EN/Categories/Categories';
import LogoSlide from '../components/components_EN/LogoSlide/LogoSlide';
import StarsCanvas from '../components/components_EN/canvas/Stars';
import {Canvas} from "@react-three/fiber";


const Landing_EN = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2200);
  }, []);

  return (
    <>
      {!loaded && <Preloader />}
      {loaded && (
        <>
          <Header />



            <main>
              <Hero />
              <About />
              <Trending />
              <Collections />
              <Categories />
            </main>
          <Footer />
          <CookiesModal />
          <BackToTopButton />
        </>
      )}
    </>
  );
};

export default Landing_EN;
