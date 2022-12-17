import React from "react";
import { ProgressProviderSchema } from "../shared/models/schema";
const ProgressProvider = ({
  valueStart,
  valueEnd,
  children,
}: ProgressProviderSchema) => {
  const [value, setValue] = React.useState(valueStart);
  React.useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};
export default ProgressProvider;
