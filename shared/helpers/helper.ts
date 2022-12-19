import { toast } from "react-toastify";
import { ToastSchema } from "../models/schema";
import { nanoid } from "nanoid";
import { listSchema } from "../models/schema";
import { gradeMapping } from "../constants/constants";

export const notify = (message: string, status: ToastSchema) => {
  status == "success" ? toast.success(message) : toast.error(message);
};

export const getCourseItem = (
  formData: any,
  addFormData: { title: string; credit: string; grade: string }
) => {
  let course_record: listSchema;
  if (!formData) {
    course_record = {
      id: nanoid(),
      title: addFormData.title || "",
      credit: addFormData.credit || "",
      grade: addFormData.grade || "",
    };
  } else {
    course_record = {
      id: nanoid(),
      title: formData.title || "",
      credit: formData.credit || "",
      grade: formData.grade || "",
    };
  }
  return course_record;
};

export const calculateGPA = (courses: Array<listSchema>) => {
  let gpa = 0;

  for (let i = 0; i < courses.length; i++) {
    const item = courses[i];
    const course_gpa =
      (gradeMapping[item.grade] * parseInt(item.credit)) /
      parseInt(item.credit);
    gpa += course_gpa;
  }

  return gpa / courses.length;
};
