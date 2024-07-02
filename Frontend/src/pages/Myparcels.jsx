import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";
import { logOut } from "../redux/userRedux";

const Myparcels = () => {
  const [open, setOpen] = useState(false);
  const [parcels, setParcels] = useState([]);

  const user = useSelector((state) => state.user);
const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const getParcels = async () => {
      try {
        const res = await publicRequest.post("/parcels/me", {
          email: user.currentUser.email,
        });

        setParcels(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getParcels();
  }, []);

  const Logout = () =>{
    dispatch(logOut());
    navigate("/login")
  }
  return (
    <div>
      <div className="relative flex items-end justify-end mr-[20%] mt-[5%]  font-semibold cursor-pointer">
        <div className="flex items-center text-white" onClick={handleOpen}>
          <FaUser className="mr-[10px]" />
         {user.currentUser.fullname}
        </div>
        {open && (
          <div className="absolute top-[20px] right-0 h-[200px] w-[250px] bg-[#d9d9d9] z-[999] shadow-xl">
            <ul className="flex flex-col items-center justify-center mt-[10px] text-[#555]">
              <Link to="/allparcels">
                <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                  All Parcels
                </li>
              </Link>
              <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                Statements
              </li>
              <li className="hover:text-[#fff] my-[5px] cursor-pointer" onClick={Logout}>
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col mr-[10%] ml-[10%]">
        <h2 className="text-[18px] text-[#d9d9d9] p-[20px]">My Parcels</h2>
        
        {parcels.map((parcel, index) =>       
        (<Link to={`/parcel/${parcel._id}`} key={index}>
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[70vw] m-[20px] p-[20px] cursor-pointer text-[#555]" >
          <div>
            <ul>
              <li>From: {parcel.from}</li>
              <li>Weight: {parcel.weight}</li>
              <li>Date: {parcel.date}</li>
              <li>Sender: {parcel.sendername}</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: {parcel.to}</span>
            <button className={parcel.status === 1 ? "bg-[#555] text-white w-[100px] cursor-pointer p-[5px]" : "bg-[#21b134] text-white w-[100px] cursor-pointer p-[5px]"}>
              {parcel.status === 1 ? "Pending" : "Delivered"}
            </button>
          </div>
        </div>
        </Link>)
        )}
      </div>
    </div>
  );
};

export default Myparcels;
