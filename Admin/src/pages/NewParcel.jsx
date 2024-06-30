import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { publicRequest } from "../requestMethods";

const NewParcel = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleAddParcel = async () => {
    try {
      await publicRequest.post("/parcels", inputs);
      toast.success("Parcel has been successfully saved to the database.")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New Parcel</h2>
      <div className="flex">
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">From</label>
            <input
              type="text"
              name="from"
              onChange={handleChange}
              placeholder="Ontario USA"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">To</label>
            <input
              type="text"
              name="to"
              onChange={handleChange}
              placeholder="Michigan, USA"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Sender Name</label>
            <input
              type="text"
              name="sendername"
              onChange={handleChange}
              placeholder="James Doe"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Recipient Name</label>
            <input
              type="text"
              name="recipientname"
              onChange={handleChange}
              placeholder="Jane Doe"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Sender Email</label>
            <input
              type="text"
              name="senderemail"
              onChange={handleChange}
              placeholder="jamesdoe@gmail.com"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Recipient Email</label>
            <input
              type="text"
              name="recipientemail"
              onChange={handleChange}
              placeholder="janedoe@gmail.com"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
        </div>
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Weight</label>
            <input
              type="Number"
              name="weight"
              onChange={handleChange}
              placeholder="200g"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Cost</label>
            <input
              type="Number"
              name="cost"
              onChange={handleChange}
              placeholder="$200"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              placeholder="20/06/2024"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Note</label>
            <textarea
              type="text"
              name="note"
              onChange={handleChange}
              placeholder="Perishable goods"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <button
            className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px]"
            onClick={handleAddParcel}
          >
            Create
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default NewParcel;
