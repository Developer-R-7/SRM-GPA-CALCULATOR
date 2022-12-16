import { toast } from "react-toastify";
import { ToastSchema } from "../models/schema";

export const notify = (message: string, status: ToastSchema) => {
  status == "success" ? toast.success(message) : toast.error(message);
};
