import { motion } from "framer-motion";
import { useState } from "react";
import { heroSectionSchema, listSchema } from "../shared/models/schema";
import Card from "./Card";
import { calculateGPA, getCourseItem, notify } from "../shared/helpers/helper";
import HeaderCard from "./HeaderCard";
import ResultCard from "./ResultCard";
import Toast from "./Toast";

export default function HeroSection(props: heroSectionSchema) {
  const [courses, setCourses] = useState(Array<listSchema>);

  const [addFormData, setFormData] = useState({
    title: "",
    credit: "",
    grade: "",
  });

  const [GPA, setGPA] = useState(0.0);

  const handleCourseFieldChange = (event: any) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData: any = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData);
  };

  const handleAddCourse = (event: any, data?: any) => {
    event.preventDefault();

    const get_course = getCourseItem(data, addFormData);

    // In Future check for duplicate item in list

    if (
      get_course.title !== "" &&
      get_course.credit !== "" &&
      get_course.grade !== ""
    ) {
      const new_course: any = [...courses, get_course];
      setFormData({
        title: "",
        credit: "",
        grade: "",
      });
      setCourses(new_course);
      notify("Course added", "success");
      setGPA(calculateGPA(new_course));
    } else {
      notify("Please fill all fields", "error");
    }
  };

  const handleDeleteCourse = (event: any) => {
    event.preventDefault();
    const get_id = event.target.getAttribute("id");
    // delete only first listItem
    const updated_courses = courses.filter((object) => {
      return object.title !== get_id;
    });
    setCourses(updated_courses);
    setGPA(calculateGPA(updated_courses));
  };

  const [viewGPA, setViewGPA] = useState(false);
  const handleChangeView = (event: any, value: boolean) => {
    setViewGPA(value);
  };

  return (
    <div>
      <Toast />
      <section className="bg-white my-28 lg:bg-hero-bg lg:my-0 bg-[center_bottom_-5rem] bg-no-repeat  bg-cover scale-100 dark:bg-primary-900">
        <div className="grid max-w-screen-xl h-screen place-items-start px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2 lg:place-items-center">
          {viewGPA ? (
            <>
              <Card
                courses={
                  // !localStorage.getItem("all_courses")
                  //   ? courses
                  //   : (JSON.parse(
                  //       localStorage.getItem("all_courses")!
                  //     ) as Array<listSchema>)
                  courses
                }
                onDelete={handleDeleteCourse}
                viewGPA={viewGPA}
              />

              <ResultCard
                gpa={GPA}
                viewGPA={viewGPA}
                addFormData={addFormData}
                handleAddCourse={handleAddCourse}
                handleChangeView={handleChangeView}
                handleCourseFieldChange={handleCourseFieldChange}
              />
            </>
          ) : (
            <>
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="mx-auto"
              >
                <HeaderCard
                  hide={viewGPA}
                  title={props.title}
                  handleAddCourse={handleAddCourse}
                  addFormData={addFormData}
                  handleCourseFieldChange={handleCourseFieldChange}
                  handleChangeView={handleChangeView}
                />
              </motion.div>
              <Card
                courses={
                  // !localStorage.getItem("all_courses")
                  //   ? courses
                  //   : (JSON.parse(
                  //       localStorage.getItem("all_courses")!
                  //     ) as Array<listSchema>)
                  courses
                }
                onDelete={handleDeleteCourse}
                viewGPA={viewGPA}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
}
