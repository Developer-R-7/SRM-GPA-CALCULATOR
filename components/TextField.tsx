import { motion } from "framer-motion";
import { courceListItem } from "../shared/models/schema";

export default function TextField(props: courceListItem) {
  return (
    <div className="flex flex-row w-full">
      <form>
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
                <option>Your grade</option>
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
            className="text-white my-4 bg-[#FF7000] font-medium rounded text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Add cource
          </button>
          <button
            type="button"
            onClick={(event) => {
              props.handleChangeView(event, props.viewGPA ? false : true);
            }}
            className="text-white my-4 bg-[#54B435] font-medium rounded text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            {props.viewGPA ? "Edit cources" : "Calculate"}
          </button>
        </div>
      </form>
    </div>
  );
}
