import "../styles.css";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { leftData, rightData } from "./dataDescription";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import phoneAnim from "../../assets/lotties/phoneAnim.json";
import { routes } from "../utils/routes";
import { useNavigate } from "react-router-dom";

function Home() {
  const phoneRef = useRef<LottieRefCurrentProps>(null);
  const [isPhoneAnimating, setIsPhoneAnimating] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-start pt-5 items-center h-screen">
      <h1 className="text-4xl my-5">
        Welcome to
        <motion.span className="text-yellow-400 text-5xl font-bold mx-3 nameTitle">
          Pizza Joints
        </motion.span>
      </h1>
      {!isPhoneAnimating && (
        <motion.p
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          className="italic text-white mb-5"
          transition={{ duration: 2 }}
        >
          At your service, we deliver
        </motion.p>
      )}
      <div className="showUpBoxes w-full flex items-center justify-center md:gap-20 lg:flex-row mt-5">
        <AnimatePresence>
          <motion.div
            className="flex flex-col animate-single-box gap-3 justify-start items-start p-5  border-yellow-400 border bg-transparent rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl text-white"
            initial={{ x: "-100vw" }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 20,
              delay: 1.5,
            }}
            exit="initial"
          >
            {leftData.map((item) => {
              return (
                <div key={item}>
                  <motion.p
                    className="text-sm overflow-hidden uppercase"
                    initial={{ opacity: 0.3, y: "-50px" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3 }}
                  >
                    {item}
                  </motion.p>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            className="display-none-one-426 gap-3 animate-single-box p-5 flex flex-col justify-start items-start border-yellow-400 border bg-transparent rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl text-white"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 20,
              delay: 1.5,
            }}
            exit="initial"
          >
            {rightData.map((item) => {
              return (
                <motion.p
                  initial={{ opacity: 0.3, y: "-50px" }}
                  animate={{ opacity: 1, y: 0 }}
                  key={item}
                  className="text-sm overflow-hidden uppercase"
                  transition={{ duration: 3 }}
                >
                  {item}
                </motion.p>
              );
            })}
          </motion.div>
        </AnimatePresence>
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
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            onClick={() => navigate(routes.chooseType)}
          >
            Prepare your Order
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default Home;
