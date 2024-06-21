import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="h-[100px] bg-[#E9EB77] flex items-center justify-between px-10">
        <Link to="/"> <img src="/logo.png" alt="" height="200px" width="200px" /></Link>
        <button className="text-[18px] cursor-pointer">Logout</button>
    </div>
  )
}

export default Navbar