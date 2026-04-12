import bannerMain from "../../assets/banner-main.png";
import bgShadow from "../../assets/bg-shadow.png";

const Banner = ({ handleFreeCredit }) => {
  return (
    <div className="container mx-auto px-4 mt-6">
      <div 
        className="bg-black rounded-3xl py-16 flex flex-col items-center justify-center text-center space-y-6"
        style={{
          backgroundImage: `url(${bgShadow})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <img src={bannerMain} alt="Banner Logo" className="w-64" />
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-4xl px-4">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-xl text-gray-400 font-medium italic">Beyond Boundaries Beyond Limits</p>
        <div className="border border-[#E7FE29] p-1.5 rounded-2xl">
          <button 
            onClick={handleFreeCredit}
            className="bg-[#E7FE29] hover:bg-[#d4e924] text-black font-bold py-3 px-8 rounded-xl transition-all"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;