import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Parcels = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "senderName", headerName: "Sender Name", width: 150 },
    { field: "recipientName", headerName: "Recipient Name", width: 150 },
    { field: "from", headerName: "From", width: 130 },
    { field: "to", headerName: "To", width: 130 },
   
    { field: "cost", headerName: "Cost ($)", type: "number", width: 130 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      rendercell: () => {
        return (
          <>
            <button className="bg-teal-500 text-white cursor-pointer w-[70px]">
              Edit
            </button>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      rendercell: () => {
        return (
          <>
            <FaTrash />
          </>
        );
      },
    },
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
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Parcels</h1>
       <Link to="/newparcel">
       <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer">
          New Parcel
        </button>
       </Link>
      </div>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
};

export default Parcels;
