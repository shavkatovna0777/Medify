import Header from "../Header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <Header />
      <main className="relative">
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default Main;
