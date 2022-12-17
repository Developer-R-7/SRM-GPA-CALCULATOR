import { motion } from "framer-motion";
import { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { progressBarScehma } from "../shared/models/schema";

export default function ProgressBar(props: progressBarScehma) {
  return (
    <div className="flex mx-auto flex-row justify-center w-full">
      <motion.div
        className={`w-[200px] h-[200px] ${props.viewGPA ? "" : "hidden"}`}
      >
        <CircularProgressbar
          value={props.gpa}
          strokeWidth={15}
          minValue={0}
          maxValue={10}
          text={`${props.gpa}`}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathTransitionDuration: 0.9,
            textSize: "16px",
            pathColor: "#F05454",
            backgroundColor: "#041C32",
            trailColor: "#041C32",
            textColor: "#fff",
          })}
        />
      </motion.div>
    </div>
  );
}
