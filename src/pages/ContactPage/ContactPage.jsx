import { BiLocationPlus } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { TiMinus } from "react-icons/ti";
import { Link } from "react-router-dom";
import Img from "../../components/LazyLoadImg/Img";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";


function ContactPage() {
  return (
    <>
      <div className="contact-page bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title-3.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                Contacts
              </h1>
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px]">
                <Link to={"/"} className="opacity-70 text-darkBlue ">
                  Home
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <span className="current opacity-[1] text-darkBlue ">
                  Contacts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full h-auto py-[40px]">
        <div className="container">
          <div className="parent ">
            <div className="top flex slg:flex-wrap">
              <div className="left p-[10px] flex flex-wrap w-full relative content-start flex-col">
                <div className="double-heading flex flex-col my-[20px]">
                  <span className="gap-[5px] text-[15px] flex items-center uppercase font-semibold text-orange">
                    quick support
                    <b>
                      <TiMinus />
                    </b>
                  </span>
                  <h1 className="text-[42px] leading-60 font-bold inline text-darkBlue md:text-[30px] md:leading-10">
                    Contact Us
                  </h1>
                </div>
                <div className="text w-[80%]">
                  <p className="mb-[20px] text-[#3b4964]">
                    Private patients, international organizations and corporate
                    businesses feel safe and softing establishing relationships.
                  </p>
                </div>
                <div className="cards">
                  <div className="card flex items-center gap-[20px] flex-none mb-[15px]">
                    <div className="img-wrapper">
                      <IoCallOutline className="text-lightBlue text-[35px]" />
                    </div>
                    <div className="content flex flex-col">
                      <h6 className="text-lightBlue break-words uppercase leading-[1.4] text-[14px] font-bold mt-[-2px] mb-[4px] mx-0">
                        call us 24/7
                      </h6>
                      <p className="m-[0_0_6px_0] text-[#3b4964] text-[16px]">
                        +998 91 123 45 67
                      </p>
                    </div>
                  </div>
                  <div className="card flex items-center gap-[20px] flex-none mb-[15px]">
                    <div className="img-wrapper">
                      <HiOutlineMailOpen className="text-lightBlue text-[35px]" />
                    </div>
                    <div className="content flex flex-col">
                      <h6 className="text-lightBlue break-words uppercase leading-[1.4] text-[14px] font-bold mt-[-2px] mb-[4px] mx-0">
                        email address
                      </h6>
                      <p className="m-[0_0_6px_0] text-[#3b4964] text-[16px]">
                        medify.clinic@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="card flex items-center gap-[20px] flex-none ">
                    <div className="img-wrapper">
                      <BiLocationPlus className="text-lightBlue text-[35px]" />
                    </div>
                    <div className="content flex flex-col">
                      <h6 className="text-lightBlue break-words uppercase leading-[1.4] text-[14px] font-bold mt-[-2px] mb-[4px] mx-0">
                        our location
                      </h6>
                      <p className="m-[0_0_6px_0] text-[#3b4964] text-[16px]">
                        27 Devision St,New York <br /> NY 10002,USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right p-[32px_50px_30px] rounded-[15px] shadow-[8px_9px_35px_0_rgba(41,41,41,0.08)] slg:w-full slg:justify-center md:p-[22px_15px_30px] md:shadow-none">
                <div className="double-heading flex flex-col my-[20px]">
                  <span className="gap-[5px] text-[15px] flex items-center uppercase font-semibold text-orange">
                    Write us
                    <b>
                      <TiMinus />
                    </b>
                  </span>
                  <h1 className="text-[42px] leading-60 font-bold inline text-darkBlue md:text-[30px] md:leading-10">
                    Get in Touch
                  </h1>
                </div>
                <div className="flex items-start w-full gap-[14px] md:gap-[20px] md:flex-col">
                  <div className="flex gap-[36px] md:gap-[10px] w-full items-center md:flex-col md:items-start">
                    <input
                      id="name"
                      className="border outline-none bg-[#F6F7FA] placeholder:font-normal p-[10px_20px] rounded-[7px] text-[17px] font-semibold border-none md:w-full"
                      type="text"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div className="flex w-full gap-[36px] md:gap-[10px] items-center md:flex-col md:items-start">
                    <input
                      className="border outline-none bg-[#F6F7FA] placeholder:font-normal p-[10px_20px] rounded-[7px] text-[17px] font-semibold border-none md:w-full"
                      inputMode="text"
                      placeholder="Your Email*"
                    />
                  </div>
                </div>
                <div className=" w-full mt-[15px] gap-[36px] md:gap-[10px] items-center md:flex-col md:items-start">
                  <input
                    className="border outline-none  w-full placeholder:font-normal bg-[#F6F7FA] p-[10px_20px] rounded-[7px] text-[17px] font-semibold border-none "
                    inputMode="text"
                    placeholder="Web Site"
                  />
                </div>{" "}
                <div className="w-full mt-[15px] h-[20vh] mb-[30px] gap-[36px] md:gap-[10px] items-center md:flex-col md:items-start">
                  <input
                    className="border outline-none h-full align-top w-full bg-[#F6F7FA] placeholder:font-normal pl-[20px] pb-[90px] rounded-[7px] text-[17px] font-semibold border-none"
                    inputMode="text"
                    placeholder="Message..."
                  />
                </div>
                <Link
                  to={"page"}
                  className="text-white bg-blue font-semibold text-[16px] p-[15px_35px] rounded-[5px] hover:bg-white hover:text-blue transform ease-in-out duration-300 border border-blue"
                >
                  See A Message{" "}
                </Link>
              </div>
            </div>
            <div className="spacer h-[90px] slg:h-[90px]"></div>
            <div className="bottom  rounded-[15px] overflow-hidden w-full h-[500px] slg:h-[300px] md:h-full">
              <Img
                className="object-cover w-full h-full"
                src="https://wgl-dsites.net/medify/wp-content/uploads/2019/08/section-bg-13.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="spacer h-[50px] slg:h-0"></div>{" "}
      <ScrollToTop/>
    </>
  );
}

export default ContactPage;
