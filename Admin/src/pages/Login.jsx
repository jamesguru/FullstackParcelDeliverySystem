import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <div className="h-[80vh] flex items-center justify-evenly p-[50px] text-gray-300">
        <div>
          <h2 className="text-[#d9d9d9] font-semibold text-[35px]">
            SendIT Admin
          </h2>
          <img src="/hero.png" alt="" />
        </div>

        <div className="h-[450px] w-[450px] bg-[#E9EB77] rounded-md">
          <input
            type="text"
            placeholder="Enter your email"
            className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-none"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-none"
          />
          <button className="bg-[#1e1e1e] w-[350px] p-[15px] text-white font-semibold text-[18px] m-[10%]">
            Login
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
