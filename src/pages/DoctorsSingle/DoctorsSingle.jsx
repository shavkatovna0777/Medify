import React from "react";
import { doctorData } from "../../assets/datas/datas";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import DocotorSingleCard from "../../components/DocotorSingleCard/DocotorSingleCard";
import Biography from "../../components/Biography/Biography";
import SkillandEducation from "../../components/SkillandEducation/SkillandEducation";
import CarrerGuidelines from "../../components/CarrerGuidelines/CarrerGuidelines";
import ContactME from "../../components/ContactME/ContactME";

function DoctorsSingle({ doctor }) {
  const { id } = useParams();

  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  console.log(doctorData.find((doctor) => doctor.id == id));
  const selectedDoctor = doctorData.find((doctor) => doctor.id == id);
  if (!selectedDoctor) {
    console.error("Doctor not found with id:", id);
    return <div>Doctor not found!</div>;
  }
  return (
    <>
      <div className="doctor-single bg-[url('https://wgl-dsites.net/medify/wp-content/uploads/2019/08/team_page-title.jpg')] bg-cover bg-no-repeat bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full md:h-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                Team
              </h1>
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px]">
                <Link to={"/"} className="opacity-70 text-darkBlue ">
                  Home
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <Link
                  to={"/page"}
                  className="current opacity-70 text-darkBlue "
                >
                  Doctors
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <span className="current opacity-[1] text-darkBlue ">
                  {" "}
                  {selectedDoctor.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer">
        <div className="container h-[80px] md:h-[40px]"></div>
      </div>
      <section>
        <div className="container">
          <DocotorSingleCard />
          <Biography />
          <SkillandEducation />
          <CarrerGuidelines />
          <ContactME />
        </div>
      </section>
    </>
  );
}

export default DoctorsSingle;
