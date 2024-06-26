import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="h-[100px] bg-[#e9eb77] flex items-center justify-between px-10">
      <img src="/logo.png" alt="" height="200px" width="200px" />

      <Link to="/login">
        <button className="bg-[#1e1e1e] p-[10px] text-gray-300 cursor-pointer border-none w-[100px]">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
