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
    <div className="w-[450px] h-[400px]  border-black z-0 bg-white overflow-auto  rounded-lg shadow-md sm:py-8 dark:bg-color_pink-900 bg-opacity-90 dark:border-black-900">
      <div className="p-4">
        {props.cources.map(function (cource, i) {
          return (
            <List
              key={cource.id}
              id={cource.id}
              title={cource.title}
              credit={cource.credit}
              grade={cource.grade}
              onDelete={handleOnDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
