// src/hooks/useAOS.js
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = () => {
  useEffect(() => {
    AOS.init({ duration: 600, offset: 200 });
  }, []);
};

export default useAOS;
