import dollarImg from "../../assets/dollar_1.png";

const Navbar = ({coin}) => {
  return (
    <div className=" container mx-auto">
      <div className="navbar  bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="flex justify-between items-center font-bold  gap-2">
           {coin} coins
            <img src={dollarImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
