import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Parcel = () => {
  const location = useLocation();
  const [parcel, setParcel] = useState({})
  const parcelId = location.pathname.split("/")[2];

  useEffect(() =>{
    const getParcel = async() =>{
      try {
        const res = await publicRequest.get("/parcels/find/" + parcelId);
        setParcel(res.data)
      } catch (error) {
        console.log(error);
      }
    }

    getParcel()
  } ,[parcelId])
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#fff] h-[80vh] w-[60vw] rounded-md">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#444] text-[18px] m-2 cursor-pointer" />
        </Link>

        <div className="flex justify-between">
          <div className="flex-1">
            <ul className="m-3 text-[#444]">
              <li className="mt-3">From: {parcel.from} </li>
              <li className="mt-3">Weight: {parcel.weight} </li>
              <li className="mt-3">Date: {parcel.date}</li>
              <li className="mt-3">Sender: {parcel.sendername} </li>
              <li className="mt-3">To: {parcel.to} </li>
              <li className="mt-3">Cost: ${parcel.cost} </li>
              <li className="mt-3">Recipient: {parcel.recipientname}</li>
              <li className="mt-3">Track ID: {parcel._id}</li>
              <li className="mt-3">Note: {parcel.note} </li>
            </ul>

            <button className={parcel.status === 1 ? "bg-[#555] text-white w-[100px] cursor-pointer p-[5px]" : "bg-[#21b134] text-white w-[100px] cursor-pointer p-[5px]"}>
              {parcel.status === 1 ? "Pending" : "Delivered"}
            </button>
          </div>

          <div className="flex-1">
            <ul className="m-3 text-[#444]">
              <li className="mt-3">Sender Email: {parcel.senderemail} </li>
              <li className="mt-3">Recipient Email: {parcel.recipientemail}</li>
            </ul>

            <textarea
              name=""
              cols={50}
              rows={7}
              className="outline-none p-[50px] m-[20px] bg-[#d9d9d9] text-[#555]"
              placeholder="Leave a feedback"
              id=""
            ></textarea>

            <button className="bg-[#1e1e1e] w-[200px] p-[10px] text-white cursor-pointer m-[20px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
