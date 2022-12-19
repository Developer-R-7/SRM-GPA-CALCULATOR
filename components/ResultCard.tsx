import { motion } from "framer-motion";
import { resultCardScehma } from "../shared/models/schema";
import ProgressBar from "./RoundProgressBar";
import TextField from "./TextField";

export default function ResultCard(props: resultCardScehma) {
  return (
    <div className="flex mx-auto flex-col content-center md:order-1">
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, bounce: true }}
      >
        <ProgressBar viewGPA={props.viewGPA} gpa={props.gpa} />
      </motion.div>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ opacity: 0, y: 35 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="mt-16">
          <TextField
            item={props.addFormData}
            handleCourceFieldChange={props.handleCourceFieldChange}
            handleAddCource={props.handleAddCource}
            handleChangeView={props.handleChangeView}
            viewGPA={props.viewGPA}
          />
        </div>
      </motion.div>
    </div>
  );
}
