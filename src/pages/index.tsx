import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Element, animateScroll as scroll } from 'react-scroll';
import { HiArrowUp } from "react-icons/hi";
import useAOS from "@/hooks/useAOS";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
const HeroComponent = dynamic(() => import("@/components/Hero"));
const SPRComponent = dynamic(() => import("@/components/SPR"));
const PortalComponent = dynamic(() => import("@/components/Portal"));
const Members = dynamic(() => import("@/components/Members"));
const FAQComponent = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

const Home = () => {
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeHeight = document.getElementById('/home')?.offsetHeight || 0 ;

      if (scrollPosition > homeHeight) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      delay: 0,
      smooth: true,
    });
  };

 useAOS();

  return (
    <Box>
      <Navbar/>
      <Element name="/" id="/" href='' className="xl:h-[calc(100vh-130px)] w-auto"> <HeroComponent /> </Element>
      <Element name="spr" id="spr" href=''> <SPRComponent/> </Element>
      <Element name="portal" id="portal" href=''> <PortalComponent/> </Element>
      <Element name="members" id="members" href=''> <Members/> </Element>
      <Element name="contact" id="contact" href=''> <Contact/> </Element>
      <Element name="faq" id="faq" href=''> <FAQComponent/> </Element>
      <Footer/>

      {showScrollToTop && (
        <div className="fixed bottom-8 right-8 z-50 hover:scale-105 hover:duration-300">
          <button
            onClick={scrollToTop}
            className="
              bg-secondary 
              p-2.5 
              rounded-full 
              shadow-lg 
              hover:bg-secondary-dark 
              transition 
              duration-300
              hover:shadow-lg
            "
            aria-label="Scroll to top"
          >
            <HiArrowUp size={20} className="text-white" />
          </button>
        </div>
      )}
    </Box>
  );
};

export default Home;
export async function getStaticProps(context: any) {
  const locale: string = context.locale ?? "km";
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  };
}
