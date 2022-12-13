import { listSchema } from "../shared/models/schema";

export default function List(props: listSchema) {
  return (
    <div className="mb-4">
      <label
        className="flex items-center h-16 w-auto bg-color_list-900"
        htmlFor="task_8"
      >
        <div className="flex flex-row w-full h-full rounded-lg bg-gray-700">
          <div className="flex w-8/12 justify-center text-sm  text-black pl-2  items-center  ">
            {props.cource_title}
          </div>
          <div className="flex  w-2/12 justify-center text-sm text-black items-center font-bold">
            {props.credit}
          </div>
          <div className="flex w-2/12 justify-center text-sm text-black items-center  font-bold">
            {props.grade}
          </div>
          <div className="h-fit relative min-h-full flex justify-end">
            <button className="absolute float-right  rounded-full bg-red-600 text-center hover:bg-blue-500 text-white text-xs px-2 py-1 -right-2 -top-2 align-center cursor-pointer alert-del ">
              &times;
            </button>
          </div>
        </div>
      </label>
    </div>
  );
}
