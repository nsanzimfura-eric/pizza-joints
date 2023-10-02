import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./chooseType.css";
import { motion } from "framer-motion";
import { videoJsOptions } from "./dataDescription";
import VideoJSComp from "../utils/video";

function ChooseType() {
  const playerRef = React.useRef(null);
  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <motion.div
      initial={{ scale: 200 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5 }}
      className="chooseType py-10 flex justify-center flex-col gap-5 items-center w-full"
    >
      <p className="text-yellow-400 text-sm">How we prepare you Pizza</p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 1, type: "tween" }}
        className="video_parent flex flex-wrap gap-4 w-full"
      >
        {videoJsOptions.map((item, index) => {
          return (
            <motion.div
              key={index}
              transition={{ duration: 0.5 }}
              animate={{ rotate: 2 }}
              whileHover={{ rotate: 0 }}
              className="shadow-md rounded-b-3xl p-3 m-0 video_child"
            >
              <VideoJSComp options={item} onReady={handlePlayerReady} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default ChooseType;
