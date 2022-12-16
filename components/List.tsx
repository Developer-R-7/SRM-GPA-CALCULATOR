import { motion } from "framer-motion";
import { listSchema } from "../shared/models/schema";

export default function List(props: listSchema) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="mb-4">
        <label
          className="flex items-center h-16 w-auto bg-color_list-900"
          htmlFor=""
        >
          <div className="flex flex-row w-full h-full rounded-lg bg-gray-700">
            <div className="flex w-6/12 justify-center text-sm  text-white pl-2 text-center items-center font-bold">
              {props.title}
            </div>
            <div className="flex  w-3/12 justify-center text-sm text-white items-center text-center font-bold">
              {props.credit}
            </div>
            <div className="flex w-3/12 justify-center text-sm text-white items-center text-center font-bold">
              {props.grade}
            </div>
            <div className="h-fit relative min-h-full flex justify-end">
              <button
                className="absolute float-right  rounded-full bg-red-600 text-center hover:bg-blue-500 text-white text-xs px-2 py-1 -right-2 -top-2 align-center cursor-pointer alert-del "
                id={props.title}
                onClick={(event) => {
                  props.onDelete(event);
                }}
              >
                &times;
              </button>
            </div>
          </div>
        </label>
      </div>
    </motion.div>
  );
}
