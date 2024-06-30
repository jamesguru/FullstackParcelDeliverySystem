import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

const Parcels = () => {

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "senderName", headerName: "Sender Name", width: 150 },
    { field: "recipientName", headerName: "Recipient Name", width: 150 },
    { field: "from", headerName: "From", width: 130 },
    { field: "to", headerName: "To", width: 130 },
   
    { field: "cost", headerName: "Cost ($)", type: "number", width: 130 },
    
    
  ];

  const rows = [
    {
      id: 1,
      senderName: "John Doe",
      recipientName: "Jane Smith",
      from: "New York",
      to: "Los Angeles",
      weight: 2.5,
      cost: 25.0,
    },
    {
      id: 2,
      senderName: "Alice Brown",
      recipientName: "Bob Johnson",
      from: "Chicago",
      to: "Miami",
      weight: 1.2,
      cost: 15.0,
    },
    {
      id: 3,
      senderName: "Chris Evans",
      recipientName: "Emma Davis",
      from: "Houston",
      to: "San Francisco",
      weight: 3.0,
      cost: 30.0,
    },
    {
      id: 4,
      senderName: "Laura Wilson",
      recipientName: "Michael Brown",
      from: "Dallas",
      to: "Seattle",
      weight: 0.8,
      cost: 10.0,
    },
    {
      id: 5,
      senderName: "Peter Parker",
      recipientName: "Gwen Stacy",
      from: "Phoenix",
      to: "Denver",
      weight: 4.5,
      cost: 40.0,
    },
    {
      id: 6,
      senderName: "Tony Stark",
      recipientName: "Steve Rogers",
      from: "Boston",
      to: "Atlanta",
      weight: 1.5,
      cost: 20.0,
    },
    {
      id: 7,
      senderName: "Bruce Wayne",
      recipientName: "Clark Kent",
      from: "Detroit",
      to: "Orlando",
      weight: 2.0,
      cost: 22.0,
    },
    {
      id: 8,
      senderName: "Diana Prince",
      recipientName: "Barry Allen",
      from: "San Diego",
      to: "Portland",
      weight: 3.2,
      cost: 35.0,
    },
    {
      id: 9,
      senderName: "Natasha Romanoff",
      recipientName: "Wanda Maximoff",
      from: "Philadelphia",
      to: "Austin",
      weight: 2.8,
      cost: 28.0,
    },
    {
      id: 10,
      senderName: "Scott Lang",
      recipientName: "Hope Van Dyne",
      from: "Las Vegas",
      to: "Minneapolis",
      weight: 1.0,
      cost: 12.0,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#444] text-[18px] m-2 cursor-pointer" />
        </Link>

        <div className="flex justify-between p-[10px]">
          <span className="text-[18px] text-[#444]">All Parcels</span>
          <span className="font-semibold text-[#444]">Alok Mondala</span>
        </div>

        <div className="p-3">
        <DataGrid rows={rows} columns={columns}
        checkboxSelection
        />
        </div>
      </div>
    </div>
  );
};

export default Parcels;
