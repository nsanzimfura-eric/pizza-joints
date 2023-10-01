import "../styles.css";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { leftData, rightData } from "./dataDescription";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import phoneAnim from "../../assets/lotties/phoneAnim.json";

function Home() {
  const phoneRef = useRef<LottieRefCurrentProps>(null);
  const [isPhoneAnimating, setIsPhoneAnimating] = useState(true);

  return (
    <div className="flex flex-col justify-start pt-10 items-center h-screen">
      <h1 className="text-4xl my-5">
        Welcome to
        <motion.span className="text-yellow-400 text-5xl font-bold mx-3 nameTitle">
          Pizza Joints
        </motion.span>
      </h1>
      {!isPhoneAnimating && (
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          className="italic text-white mb-5"
        >
          At your service, we deliver
        </motion.p>
      )}
      <div className=" w-full flex md:gap-20 lg:flex-row my-5">
        <motion.div
          className="w-full flex flex-col justify-start items-start md:w-1/2 p-3 border-yellow-400 border bg-transparent rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl text-white"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
        >
          {leftData.map((item) => {
            return (
              <motion.p key={item} className="text-sm">
                {item}
              </motion.p>
            );
          })}
        </motion.div>
        <motion.div
          className="w-full display-none-one-426 md:w-1/2 p-3 flex flex-col justify-start items-start border-yellow-400 border bg-transparent rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl text-white"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
        >
          {rightData.map((item) => {
            return (
              <motion.p
                initial={{ color: "#8a2ce2", opacity: 0.3 }}
                animate={{ color: "white", opacity: 1 }}
                key={item}
                className="text-sm"
              >
                {item}
              </motion.p>
            );
          })}
        </motion.div>
      </div>
      <div className=" prepareBox w-full flex items-center justify-center p-0 m-0">
        <motion.div initial={{ y: "-50vh" }} animate={{ y: 0 }}>
          <Lottie
            lottieRef={phoneRef}
            className="phoneRef"
            animationData={phoneAnim}
            onComplete={() => {
              phoneRef.current?.pause();
              setIsPhoneAnimating(false);
            }}
            loop={false}
          />
        </motion.div>
        {!isPhoneAnimating && (
          <motion.button
            className="btnPrepare bg-transparent mt-2 hover:text-white hover:bg-yellow-400 text-yellow-400 border-yellow-400 border rounded px-4 py-2 transition-colors duration-300 ease-in-out"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
          >
            Prepare your Order
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default Home;
