import { useState } from "react";
import { searchBarScehma, suggestionListScehma } from "../shared/models/schema";
import { all_cources } from "../shared/constants/data";
import List from "./List";

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
      setSuggestionList(searchCourceList);
    }
  };

  return (
    <form>
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
            showSuggestionDiv ? "rounded-t-lg" : "rounded-lg"
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
            {suggestionList.map(function (cource, i) {
              return (
                <button
                  type="button"
                  key={cource.cource_code}
                  id={cource.cource_code}
                  className="py-2 px-4 w-full font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                >
                  {cource.cource_code + " - " + cource.cource_name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </form>
  );
}
