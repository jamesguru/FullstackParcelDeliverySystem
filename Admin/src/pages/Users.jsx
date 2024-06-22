import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
const Users = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "fullName", headerName: "Full Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "age", headerName: "Age", type: "number", width: 100 },

    { field: "address", headerName: "Address", width: 300 },
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
      fullName: "John Doe",
      email: "john.doe@example.com",
      age: 30,
      country: "USA",
      address: "123 Main St, New York, NY",
    },
    {
      id: 2,
      fullName: "Alice Brown",
      email: "alice.brown@example.com",
      age: 25,
      country: "Canada",
      address: "456 Maple Ave, Toronto, ON",
    },
    {
      id: 3,
      fullName: "Chris Evans",
      email: "chris.evans@example.com",
      age: 35,
      country: "USA",
      address: "789 Oak St, Houston, TX",
    },
    {
      id: 4,
      fullName: "Laura Wilson",
      email: "laura.wilson@example.com",
      age: 28,
      country: "UK",
      address: "101 Pine Rd, London",
    },
    {
      id: 5,
      fullName: "Peter Parker",
      email: "peter.parker@example.com",
      age: 22,
      country: "USA",
      address: "202 Elm St, Phoenix, AZ",
    },
    {
      id: 6,
      fullName: "Tony Stark",
      email: "tony.stark@example.com",
      age: 48,
      country: "USA",
      address: "303 Cedar Blvd, Boston, MA",
    },
    {
      id: 7,
      fullName: "Bruce Wayne",
      email: "bruce.wayne@example.com",
      age: 40,
      country: "USA",
      address: "404 Birch Ln, Detroit, MI",
    },
    {
      id: 8,
      fullName: "Diana Prince",
      email: "diana.prince@example.com",
      age: 32,
      country: "USA",
      address: "505 Fir Ave, San Diego, CA",
    },
    {
      id: 9,
      fullName: "Natasha Romanoff",
      email: "natasha.romanoff@example.com",
      age: 29,
      country: "Russia",
      address: "606 Spruce St, Moscow",
    },
    {
      id: 10,
      fullName: "Scott Lang",
      email: "scott.lang@example.com",
      age: 37,
      country: "USA",
      address: "707 Willow Dr, Las Vegas, NV",
    },
  ];

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Users</h1>
        <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer">
          New User
        </button>
      </div>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
};

export default Users;
