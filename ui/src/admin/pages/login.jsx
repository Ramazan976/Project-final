import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin1234") {
      localStorage.setItem("role", "admin");
      navigate("/home");
    } else {
      alert ("Yanlış istifadeçi adı və ya şifrə");
    }
  };

  return (
    <>
      <section className="relative h-[400px] w-full bottom-20 overflow-x-hidden">
        <img src="https://preview.colorlib.com/theme/karma/img/banner/common-banner.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-end gap-3 px-4 md:px-12 lg:px-40 pt-52 z-10 max-w-screen-xl mx-auto">
          <h2 className="font-bold text-4xl text-white text-center">Login/Register</h2>
          <div className="flex flex-row justify-start gap-2">
            <a href="/" className="text-white">Home</a>
            <i className="fa-solid fa-arrow-right text-white pt-1"></i>
            <a href="" className="text-white">Login/Register</a>
          </div>
        </div>
      </section>

       <div className=" flex-col lg:flex-row  flex justify-center items-center gap-20 mb-20">
        <div className="relative inline-block w-4xl max-w-[600px]">
          <img src="https://preview.colorlib.com/theme/karma/img/login.jpg" alt="shoes-black" className="w-full h-full object-cover"/>
          <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col bg-black/60">
          <h2 className="text-white font-semibold text-3xl mb-3">New to our website?</h2>
          <p className="text-white mb-7 w-[400px]">There are advances being made in science and technology everyday, and a good example of this is the</p>
           <button className="!bg-amber-500 text-white font-medium py-2 w-52 rounded hover:bg-amber-500 transition">
                CREATE AN ACCOUNT
            </button>
          </div>
        </div>

        <div className=" flex flex-col gap-7">
        <h2 className="font-bold self-center">LOG IN TO ENTER</h2>
        <input type="email" placeholder="Username" className="border-b border-gray-300 h-10 outline-none w-80 pb-3 placeholder:!text-gray-500" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="border-b border-gray-300 h-10 outline-none w-80 pb-3 placeholder:!text-gray-500" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="flex flex-row gap-3">
        <input type="checkbox" name="" id="remember"/>
        <label htmlFor="remember" className="text-[#777777]">Keep me logged in</label>
        </div>
        <button className="!bg-amber-500 text-white font-medium py-2 w-80 rounded hover:bg-amber-500 transition" onClick={handleLogin}>
          LOG IN
        </button>
        <p className="text-gray-500 self-center cursor-pointer">Forgot Password?</p>
        </div>
        </div>

    </>
  );
};

export default Login;
