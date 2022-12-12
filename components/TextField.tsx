export default function TextField() {
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
            placeholder="ADE"
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
            placeholder="4"
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
            >
              <option>O</option>
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
    </form>
  );
}
