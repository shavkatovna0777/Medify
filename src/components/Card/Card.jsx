import Img from "../../components/LazyLoadImg/Img";

function Card({ title, imageUrl, description }) {
  return (
    <div className="card bg-white flex flex-col items-center justify-center p-10 rounded-[15px] shadow-[0_0_30px_0_rgba(0,42,106,0.1)] transform transition-transform duration-500 hover:-translate-y-5 slg:w-full slg:h-auto md:w-[100%] md:p-5">
      <div className="img-wrapper mb-4">
        <Img
          className="h-auto max-w-full no-drag"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="card-content text-center">
        <h2 className="text-[22px] leading-[1.4] font-semibold mb-3 text-darkBlue">
          {title}
        </h2>
        <p className="text-[16px] text-[#47546D]">{description}</p>
      </div>
    </div>
  );
}

export default Card;
