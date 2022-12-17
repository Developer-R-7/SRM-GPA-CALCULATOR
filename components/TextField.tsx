import { motion } from "framer-motion";
import { courceListItem } from "../shared/models/schema";

export default function TextField(props: courceListItem) {
  return (
    <div className="flex flex-row w-full">
      <motion.form
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="w-full"
      >
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Cource name
            </label>
            <input
              className="appearance-none block w-full bg-gray-900 text-white border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              id="grid-city"
              type="text"
              name="title"
              placeholder="ADE"
              value={props.item.title}
              onChange={(event) => {
                props.handleCourceFieldChange(event);
              }}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Credit
            </label>
            <input
              className="block w-full bg-gray-900 text-white border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              id="grid-zip"
              type="number"
              name="credit"
              value={props.item.credit}
              placeholder="4"
              onChange={(event) => {
                props.handleCourceFieldChange(event);
              }}
              max={10}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Grade
            </label>
            <div className="relative">
              <select
                className="appearance-none block w-full bg-gray-900 text-white  border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                id="grid-state"
                name="grade"
                value={props.item.grade}
                onChange={(event: any) => {
                  props.handleCourceFieldChange(event);
                }}
              >
                <option>Select Grade</option>
                <option>O</option>
                <option>A+</option>
                <option>A</option>
                <option>B+</option>
                <option>B</option>
                <option>C</option>
                <option>P</option>
                <option>F</option>
                <option>Ab</option>
                <option>I</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center my-4">
          <button
            onClick={(event) => {
              props.handleAddCource(event);
            }}
            className="text-gray-900 my-4 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  shadow-lg shadow-lime-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Add Cource
          </button>
          <button
            type="button"
            onClick={(event) => {
              props.handleChangeView(event);
            }}
            className="text-gray-900 my-4 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  shadow-lg shadow-lime-500/50 dark:shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Calculate
          </button>
        </div>
      </motion.form>
    </div>
  );
}
