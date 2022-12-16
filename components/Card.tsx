import { listViewSchema } from "../shared/models/schema";
import List from "./List";

export default function Card(props: listViewSchema) {
  const handleOnDelete = (event: any) => {
    event.preventDefault();
    const get_id = event.target.getAttribute("id");

    const updated_cources = props.cources.filter((object) => {
      return object.id !== get_id;
    });
  };

  return (
    <div className="w-[450px] h-[400px]  border-black z-0 bg-white overflow-auto rounded-lg shadow-md  dark:bg-color_pink-900 bg-opacity-90 dark:border-black-900">
      <div className="w-full">
        <div className="mb-4">
          <label
            className="flex items-center h-16 w-auto bg-color_list-900"
            htmlFor=""
          >
            <div className="flex flex-row w-full h-full  bg-[#FB2576]">
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
      <div className="p-4">
        {props.cources.map(function (cource, i) {
          return (
            <List
              key={cource.id}
              id={cource.id}
              title={cource.title}
              credit={cource.credit}
              grade={cource.grade}
              onDelete={props.onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
