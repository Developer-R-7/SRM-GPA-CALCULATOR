export default function List() {
  return (
    <div className="mb-4">
      <label
        className="flex border-2 border-color_list_grade-900 items-center h-16 w-auto rounded bg-color_list-900"
        htmlFor="task_8"
      >
        <div className="flex flex-row w-full h-full rounded-lg">
          <div className="flex w-8/12 justify-center bg-color_list_grade-900 text-sm  text-black pl-2  items-center  ">
            Foundation of Artificial Intelligence and Machine Learning
          </div>
          <div className="flex  w-2/12 justify-center bg-color_list_grade-900 text-sm text-black items-center font-bold">
            2
          </div>
          <div className="flex w-2/12 justify-center bg-color_list_grade-900 text-sm text-black items-center  font-bold">
            3
          </div>
        </div>
      </label>
    </div>
  );
}
