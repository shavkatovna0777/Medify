import { TiMinus } from "react-icons/ti";
import DoctorsCard from "../DoctorsCard/DoctorsCard";
import { Link } from "react-router-dom";

function DoctorsSection({ DoctorsSectionData }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section>
      <div className="container">
        <div className="speacer h-[95px] sm:h-[80px]"></div>
        <div className="doc-main ">
          <div className="heading">
            <div className="top text-orange">
              <span className=" gap-[5px] text-[15px] flex items-center uppercase font-semibold">
                quality stuff
                <b>
                  <TiMinus />
                </b>
              </span>
            </div>
            <div className="bottom flex justify-between items-center md:flex-wrap">
              <h1 className="text-[42px] leading-60 font-bold inline text-darkBlue md:text-[30px]">
                Team of Professionals
              </h1>
              <Link
                onClick={handleClick}
                to={"page"}
                className="text-white bg-lightBlue font-semibold text-[16px] p-[12px_35px] rounded-[5px] hover:bg-blue transform ease-in-out duration-300"
              >
                View More
              </Link>
            </div>
          </div>
          <div className="speacer h-[30px]"></div>
          <div className="doc-cards grid grid-cols-4 items-center pt-[10px] slg:grid-cols-2 slg:place-items-center md:w-full md:grid-cols-1">
            {DoctorsSectionData.map((doctor) => (
              <DoctorsCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
        <div className="speacer h-[50px]"></div>
      </div>
    </section>
  );
}

export default DoctorsSection;
