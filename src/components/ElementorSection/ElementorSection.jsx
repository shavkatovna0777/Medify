import ElementorCard from "../ElementorCard/ElementorCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ElementorSection({ ElementorCardData }) {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);

  return (
    <section className="relative transition-all duration-300 ease-in-out bg-blue bg-[url('https://wgl-dsites.net/medify/wp-content/uploads/2019/08/section-bg-15.png')] slg:bg-none md:bg-none bg-contain bg-no-repeat bg-[0px_34%] w-full min-h-[400px] ">
      <div className="container py-[70px]">
        <div className="elementor-main ">
          <div
            className="cards flex items-center text-center slg:flex-wrap"
            data-aos="fade-up"
            data-aos-once="true"
          >
            {ElementorCardData.map((card, index) => (
              <ElementorCard
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                className={`animation slide-in-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ElementorSection;
