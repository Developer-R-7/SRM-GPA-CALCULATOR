import { toast } from "react-toastify";
import { ToastSchema } from "../models/schema";
import { nanoid } from "nanoid";
import { listSchema } from "../models/schema";
import { gradeMapping } from "../constants/constants";

export const notify = (message: string, status: ToastSchema) => {
  status == "success" ? toast.success(message) : toast.error(message);
};

export const getCourceItem = (
  formData: any,
  addFormData: { title: string; credit: string; grade: string }
) => {
  let cource_record: listSchema;
  if (!formData) {
    cource_record = {
      id: nanoid(),
      title: addFormData.title || "",
      credit: addFormData.credit || "",
      grade: addFormData.grade || "",
    };
  } else {
    cource_record = {
      id: nanoid(),
      title: formData.title || "",
      credit: formData.credit || "",
      grade: formData.grade || "",
    };
  }
  return cource_record;
};

export const calculateGPA = (cources: Array<listSchema>) => {
  let gpa = 0;

  for (let i = 0; i < cources.length; i++) {
    const item = cources[i];
    const cource_gpa =
      (gradeMapping[item.grade] * parseInt(item.credit)) /
      parseInt(item.credit);
    gpa += cource_gpa;
  }

  return gpa / cources.length;
};
