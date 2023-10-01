import "./chooseType.css";
import { motion } from "framer-motion";

function ChooseType() {
  return (
    <motion.div
      initial={{ scale: 200 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5 }}
      className="chooseType flex justify-center items-center w-full"
    >
      ChooseType
    </motion.div>
  );
}

export default ChooseType;
