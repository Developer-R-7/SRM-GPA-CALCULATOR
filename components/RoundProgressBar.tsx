import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { progressBarScehma } from "../shared/models/schema";
import ProgressProvider from "./ChangingProgressProvider";

export default function ProgressBar(props: progressBarScehma) {
  return (
    <div className="flex mx-auto flex-row justify-center w-full">
      <div className={`w-[250px] h-[250px] ${props.viewGPA ? "" : "hidden"}`}>
        <ProgressProvider valueStart={0} valueEnd={!props.gpa ? 0 : props.gpa}>
          {(value: number) => (
            <CircularProgressbar
              value={value}
              strokeWidth={12}
              minValue={0}
              maxValue={10}
              text={`${value.toFixed(2)}`}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathTransitionDuration: 1.2,
                textSize: "16px",
                pathColor: "#F05454",
                backgroundColor: "#041C32",
                trailColor: "#041C32",
                textColor: "#fff",
              })}
            />
          )}
        </ProgressProvider>
      </div>
    </div>
  );
}
