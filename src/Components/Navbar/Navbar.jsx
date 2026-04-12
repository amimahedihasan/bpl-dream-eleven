import dollarImg from "../../assets/dollar_1.png";
import logo from "../../assets/logo.png";

const Navbar = ({ coin }) => {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-16" />
        </div>

        {/* Menu and Coin Section */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            <li className="cursor-pointer hover:text-black">Home</li>
            <li className="cursor-pointer hover:text-black">Fixture</li>
            <li className="cursor-pointer hover:text-black">Teams</li>
            <li className="cursor-pointer hover:text-black">Schedules</li>
          </ul>

          {/* Coin Display */}
          <div className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl font-bold">
            <span>{coin} Coin</span>
            <img src={dollarImg} alt="coin" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;