import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = (options = {}) => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        offset: 100,
        duration: 1000,
        easing: 'ease-in-out',
        delay: 0,
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
        ...options,
      });
      AOS.refresh();
    }, 300);
  }, [options]);
  
};

export default useAOS;