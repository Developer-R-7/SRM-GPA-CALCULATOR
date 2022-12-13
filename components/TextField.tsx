import { useState } from "react";
import { listSchema } from "../shared/models/schema";
import List from "./List";

export default function TextField() {
  const [cource_title, setCourceTitle] = useState("");
  const [cource_credit, setCourceCredit] = useState("");
  const [cource_grade, setCourceGrade] = useState("");
  const [cource, setCource] = useState([{} as listSchema]);

  const addToList = async (event: any) => {
    event.preventDefault();
    const data: listSchema = {
      cource_title: cource_title,
      credit: cource_credit,
      grade: cource_grade,
    };

    if (!cource_title || !cource_credit || !cource_grade) {
      // Throw toast here
      console.log("missing value");
    } else {
      setCource([...cource, data]);
      setCourceTitle("");
      setCourceCredit("");
      setCourceGrade("");
    }
    console.log(cource);
  };

  return (
    <form className="w-full">
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            Cource Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-900 text-white border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
            id="grid-city"
            type="text"
            name="cource_title"
            placeholder="ADE"
            value={cource_title}
            onChange={(e) => {
              setCourceTitle(e.target.value);
            }}
            required
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
            className="appearance-none block w-full bg-gray-900 text-white border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
            id="grid-zip"
            type="number"
            name="cource_credit"
            placeholder="4"
            value={cource_credit}
            onChange={(e) => {
              setCourceCredit(e.target.value);
            }}
            required
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
              className="appearance-none block w-full bg-gray-900 text-white border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              id="grid-state"
              name="cource_grade"
              value={cource_grade == "" ? "O" : cource_grade}
              onChange={(e) => {
                setCourceGrade(e.target.value);
              }}
              required
            >
              <option value="O">O</option>
              <option>A+</option>
              <option>A</option>
              <option>B+</option>
              <option>B</option>
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
          onClick={addToList}
          className="text-gray-900 my-4 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  shadow-lg shadow-lime-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Add Cource
        </button>
        <button
          type="button"
          className="text-gray-900 my-4 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  shadow-lg shadow-lime-500/50 dark:shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Calculate
        </button>
      </div>
    </form>
  );
}
