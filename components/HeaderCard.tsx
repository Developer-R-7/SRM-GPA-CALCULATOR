import { motion } from "framer-motion";
import { headerCardSchema } from "../shared/models/schema";
import SearchBar from "./SearchBar";
import TextField from "./TextField";

export default function HeaderCard(props: headerCardSchema) {
  return (
    <div className={`mx-auto place-self-center ${props.hide ? "hidden" : ""}`}>
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl  xl:text-6xl dark:text-white"
      >
        {props.title}
      </motion.h1>

      <SearchBar
        placeholder="Search and add cources..."
        addToList={props.handleAddCource}
        addFormData={props.addFormData}
        handleCourceFieldChange={props.handleCourceFieldChange}
      />
      <p className="text-sm p-2 text-gray-300 ">
        Select your grade first then search cource
      </p>

      <p className="text-2xl m-6 text-center text-white text-bold">OR</p>

      <TextField
        item={props.addFormData}
        handleCourceFieldChange={props.handleCourceFieldChange}
        handleAddCource={props.handleAddCource}
        handleChangeView={props.handleChangeView}
        viewGPA={props.hide}
      />
    </div>
  );
}
