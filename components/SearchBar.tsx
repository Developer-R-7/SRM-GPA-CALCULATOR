import { useState } from "react";
import { searchBarScehma, suggestionListScehma } from "../shared/models/schema";
import { all_cources } from "../shared/constants/data";

export default function SearchBar(props: searchBarScehma) {
  const [searchText, setSearchText] = useState("");
  const [showSuggestionDiv, setShowSuggestionDiv] = useState(false);
  const [suggestionList, setSuggestionList] = useState(Array<any>);

  const handleOnChange = (event: any) => {
    if (event.target.value === "") {
      setSearchText("");
      setShowSuggestionDiv(false);
      setSuggestionList([]);
    } else {
      const searchText = event.target.value.toLocaleLowerCase();
      setSearchText(searchText);
      setShowSuggestionDiv(true);
      const searchCourceList = all_cources.filter((text) => {
        return text.cource_name.toLocaleLowerCase().startsWith(searchText);
      });
      if (searchCourceList.length == 0) {
        setSuggestionList([
          { cource_name: "No result found , add manually cources below" },
        ]);
      } else {
        setSuggestionList(searchCourceList.slice(0, 6));
      }
    }
  };

  const handleOnClick = (event: any) => {
    const cource_code = event.target.id;
    const course = all_cources.filter((course) => {
      return course.cource_code === cource_code;
    })[0];

    const addToListData = {
      title: course.cource_name,
      credit: course.cource_credit,
      grade: props.addFormData.grade,
    };

    props.addToList(event, addToListData);
    setShowSuggestionDiv(false);
    setSearchText("");
  };

  return (
    <form>
      <div className="flex flex-row w-full justify-center justify-items-center mt-10">
        <div className="w-9/12">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={searchText}
              className={`block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 ${
                showSuggestionDiv ? "rounded-t" : "rounded"
              }  dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  focus:outline-none`}
              placeholder={props.placeholder}
              onChange={handleOnChange}
              autoComplete="off"
              required
            />
            <div
              className={`absolute w-full z-10 ${
                showSuggestionDiv ? "block" : "hidden"
              }`}
            >
              <div className="text-sm font-medium rounded-b-lg text-gray-900 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {suggestionList.map(function (course: suggestionListScehma, i) {
                  return (
                    <button
                      type="button"
                      onClick={handleOnClick}
                      key={course.cource_code}
                      id={course.cource_code}
                      disabled={course.cource_code ? false : true}
                      className="py-2 px-4 w-full font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                    >
                      {course.cource_code
                        ? course.cource_code + " - " + course.cource_name
                        : course.cource_name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="my-auto mx-6 w-1/4">
          <div className="relative">
            <select
              className="appearance-none p-4 h-[54px] block w-full text-sm bg-gray-900 text-white  border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              id="grid-state"
              name="grade"
              value={props.addFormData.grade}
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
    </form>
  );
}
