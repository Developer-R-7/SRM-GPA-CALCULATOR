import { motion } from "framer-motion";
import { listViewSchema } from "../shared/models/schema";
import List from "./List";

export default function Card(props: listViewSchema) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="flex mx-auto flex-row justify-center w-full my-8 order-2 md:order-1"
    >
      <div className="relative rounded-t-lg">
        <div className="w-full ">
          <div className="">
            <label
              className="flex items-center h-16 w-auto bg-color_list-900"
              htmlFor=""
            >
              <div className="flex flex-row w-full h-full rounded-t-lg bg-[#FB2576]">
                <div className="flex w-6/12 justify-center text-sm  text-white pl-2  items-center font-bold  ">
                  COURCE NAME
                </div>
                <div className="flex  w-3/12 justify-center text-sm text-white items-center font-bold">
                  CREDITS
                </div>
                <div className="flex w-3/12 justify-center text-sm text-white items-center  font-bold">
                  GRADE
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="w-[450px] h-[400px]  border-black z-0 bg-white overflow-auto rounded-b-lg shadow-md  dark:bg-color_pink-900 bg-opacity-90 dark:border-black-900">
          <div className="mt-4 p-4">
            {props.cources.map(function (course, i) {
              return (
                <List
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  credit={course.credit}
                  grade={course.grade}
                  onDelete={props.onDelete}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
