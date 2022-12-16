import { motion } from "framer-motion";
import { useState } from "react";
import { heroSectionSchema, listSchema } from "../shared/models/schema";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { nanoid } from "nanoid";

export default function HeroSection(props: heroSectionSchema) {
  const [cources, setCources] = useState(Array<listSchema>);
  const [addFormData, setFormData] = useState({
    title: "",
    credit: "",
    grade: "",
  });

  const handleAddFormChange = (event: any) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData: any = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData);
  };

  const handleAddFormSubmit = (event: any, data: any) => {
    const cource_record = {
      id: nanoid(),
      title: addFormData.title || data.title,
      credit: addFormData.credit || data.credit,
      grade: addFormData.grade || data.grade,
    };

    const new_cource: any = [...cources, cource_record];
    setFormData({
      title: "",
      credit: "",
      grade: "",
    });
    setCources(new_cource);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <section className="bg-white my-28 lg:bg-hero-bg lg:my-0 bg-[center_bottom_-5rem] bg-no-repeat  bg-cover scale-100 dark:bg-primary-900">
        <div className="grid max-w-screen-xl h-screen place-items-start px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2 lg:place-items-center">
          <div className="mx-auto place-self-center ">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl  xl:text-6xl dark:text-white"
            >
              {props.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            ></motion.p>
            <SearchBar
              placeholder="Search and add cources..."
              addToList={handleAddFormSubmit}
            />
            <p className="text-2xl m-6 text-center text-white text-bold">OR</p>
            <div className="flex flex-row w-full">
              <form className="w-full" onSubmit={handleAddFormSubmit}>
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
                      name="title"
                      placeholder="ADE"
                      value={addFormData.title}
                      onChange={handleAddFormChange}
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
                      name="credit"
                      value={addFormData.credit}
                      placeholder="4"
                      onChange={handleAddFormChange}
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
                        className="appearance-none block w-full bg-gray-900 text-gray-500  border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        id="grid-state"
                        name="grade"
                        value={addFormData.grade}
                        onChange={handleAddFormChange}
                        required
                      >
                        <option selected disabled>
                          Select Grade
                        </option>
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
                    type="submit"
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
            </div>
          </div>

          <div className="flex flex-row justify-center w-full my-8">
            <Card cources={cources} />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
