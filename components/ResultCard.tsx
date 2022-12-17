import { resultCardScehma } from "../shared/models/schema";
import ProgressBar from "./RoundProgressBar";
import TextField from "./TextField";

export default function ResultCard(props: resultCardScehma) {
  return (
    <div className="flex flex-col content-center">
      <ProgressBar viewGPA={props.viewGPA} gpa={props.gpa} />
      <div className="mt-6">
        <TextField
          item={props.addFormData}
          handleCourceFieldChange={props.handleCourceFieldChange}
          handleAddCource={props.handleAddCource}
          handleChangeView={props.handleChangeView}
        />
      </div>
    </div>
  );
}
