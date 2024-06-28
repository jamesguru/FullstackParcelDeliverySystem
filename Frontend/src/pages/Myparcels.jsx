import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Myparcels = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="relative flex items-end justify-end mr-[20%] mt-[5%]  font-semibold cursor-pointer">
        <div className="flex items-center text-white" onClick={handleOpen}>
          <FaUser className="mr-[10px]" />
          Alok Mondala
        </div>
        {open && (
          <div className="absolute top-[20px] right-0 h-[200px] w-[250px] bg-[#d9d9d9] z-[999] shadow-xl">
            <ul className="flex flex-col items-center justify-center mt-[10px] text-[#555]">
              <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                All Parcels
              </li>
              <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                Statements
              </li>
              <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col mr-[10%] ml-[10%]">
        <h2 className="text-[18px] text-[#d9d9d9] p-[20px]">My Parcels</h2>

        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[70vw] m-[20px] p-[20px] cursor-pointer text-[#555]">
          <div>
            <ul>
              <li>From: Ontario, USA</li>
              <li>Weight: 200g</li>
              <li>Date: 26/6/2024</li>
              <li>Sender: James Doe</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Sydney, Australia</span>
            <button className="bg-[#555] text-white w-[100px] cursor-pointer p-[5px]">
              Pending
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[70vw] m-[20px] p-[20px] cursor-pointer text-[#555]">
          <div>
            <ul>
              <li>From: Ontario, USA</li>
              <li>Weight: 200g</li>
              <li>Date: 26/6/2024</li>
              <li>Sender: James Doe</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Sydney, Australia</span>
            <button className="bg-[#555] text-white w-[100px] cursor-pointer p-[5px]">
              Pending
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[70vw] m-[20px] p-[20px] cursor-pointer text-[#555]">
          <div>
            <ul>
              <li>From: Ontario, USA</li>
              <li>Weight: 200g</li>
              <li>Date: 26/6/2024</li>
              <li>Sender: James Doe</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Sydney, Australia</span>
            <button className="bg-[#21b134] text-white w-[100px] cursor-pointer p-[5px]">
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myparcels;
