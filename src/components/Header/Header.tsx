import Lottie from "lottie-react";
import logo from "../../assets/lotties/logo.json";
import "../styles.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="w-full headerBox flex items-center justify-between p-5 m-0 pt-10">
      <Lottie animationData={logo} className="logo" />
      <div className="links flex gap-10 items-center">
        <motion.a href="https://maps.app.goo.gl/2H7HscDamcbKtQ426">
          Find us here
        </motion.a>
        <motion.a href="https://maps.app.goo.gl/2H7HscDamcbKtQ426">
          Call us
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
