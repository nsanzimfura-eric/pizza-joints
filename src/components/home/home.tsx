import "../styles.css";
import { motion } from "framer-motion";
import { leftData, rightData } from "./dataDescription";

function Home() {
  return (
    <div className="flex flex-col justify-start pt-10 items-center h-screen">
      <h1 className="text-4xl my-5">
        Welcome to
        <span className="text-yellow-400 text-5xl font-bold mx-3 nameTitle">
          Pizza Joints
        </span>
      </h1>
      <p className="italic text-white mb-5">At your service, we deliver</p>
      <div className=" w-full flex md:gap-50 md:flex-col lg:flex-row my-5 sm:gap-20">
        <div className="w-full flex flex-col justify-start items-start md:w-1/2 p-3 border-yellow-400 border bg-transparent rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl text-white">
          {leftData.map((item) => {
            return (
              <p key={item} className="text-sm">
                {item}
              </p>
            );
          })}
        </div>
        <div className="w-full md:w-1/2 p-3 flex flex-col justify-start items-start border-yellow-400 border bg-transparent rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl text-white">
          {rightData.map((item) => {
            return (
              <p key={item} className="text-sm">
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <button className="bg-transparent mt-10 hover:text-white hover:bg-yellow-400 text-yellow-400 border-yellow-400 border rounded px-4 py-2 transition-colors duration-300 ease-in-out">
        Prepare your Order
      </button>
    </div>
  );
}

export default Home;
