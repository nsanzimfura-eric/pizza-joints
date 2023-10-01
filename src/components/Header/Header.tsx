import Lottie from "lottie-react";
import logo from "../../assets/lotties/logo.json";
import tsapp from "../../assets/lotties/tsapp.json";
import "../styles.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="w-full headerBox flex items-center justify-between p-5 m-0 pt-10 shadow-md rounded-b-3xl">
      <div className="flex flex-col gap-0  logo_container">
        <Lottie animationData={logo} className="logo" />
        <div className="text-white logoText flex">
          PiZza <span className="singleLetter p-0 m-0">JO</span>InTs
        </div>
      </div>
      <div className="links flex gap-10 items-center">
        <motion.a
          href="https://maps.app.goo.gl/2H7HscDamcbKtQ426"
          className="link text-sm md:text-base lg:text-lg hidden sm:block"
        >
          Find us here
        </motion.a>
        <motion.a
          href="https://wa.me/+250735317999"
          target="_blank"
          className="link text-sm md:text-base lg:text-lg"
        >
          <Lottie
            animationData={tsapp}
            className="tsapp"
            width={50}
            height={50}
          />
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
