function SwiperBtn({ id, children, className }) {
    return (
      <button
        id={id}
        className={`top-[70%] text-[38px] ${className} z-[11111]  w-[50px] h-[50px] rounded-[5px] bg-[#FFF] text-blue hover:text-white hover:bg-blue transition-all duration-300 ease-in-out grid place-items-center`}
      >
        {children}
      </button>
    );
  }
  
  export default SwiperBtn;
  