import React from "react";
import { doctorData } from "../../assets/datas/datas";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import DocotorSingleCard from "../../components/DocotorSingleCard/DocotorSingleCard";
import Biography from "../../components/Biography/Biography";
import ProgressBar from "../../ui/ProgressBar";
import SkillandEducation from "../../components/SkillandEducation/SkillandEducation";

function DoctorsSingle({ doctor }) {
  const { id } = useParams(); // Get product ID from the URL

  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  console.log(doctorData.find((doctor) => doctor.id == id));
  const selectedDoctor = doctorData.find((doctor) => doctor.id == id);
  if (!selectedDoctor) {
    console.error("Doctor not found with id:", id);
    return <div>Doctor not found!</div>; // Or navigate to a 404 page
  }
  return (
    <>
      <div className="doctor-single bg-[url('https://wgl-dsites.net/medify/wp-content/uploads/2019/08/team_page-title.jpg')] bg-cover bg-no-repeat bg-center md:h-[500px] h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full ">
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
        <div className="container h-[80px]"></div>
      </div>
      <section>
        <div className="container">
          <DocotorSingleCard />
          <Biography />
          <SkillandEducation />
          <div className="career-guidline p-[20px]">
            <h1 className="text-[30px] text-darkBlue font-semibold mb-[15px]">Career Guidelines</h1>
            <p className="m-[0_0_20px_0] text-[#3b4964]">
              Born in Britain, Samanta was the first women to receive a medical
              degree in America and the first women to be on the UK medical
              register. Blackwell helped to break down social barriers, enabling
              women to be accepted as doctors.PM&R physicians (also known as
              physiatrists) are trained to use physical modalities (stretching,
              strengthening, heat, cold, etc.) to mechanically enhance healing. <br /><br />
              Prior to joining Integrio, he spent 20+ years at Inmosys, where he
              held a wide range of global leadership roles, from services to
              products, and across operations and sales. Most recently, he was
              SVP & Global Head of the Manufacturing business, as well as a
              board member of their software subsidiary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default DoctorsSingle;
