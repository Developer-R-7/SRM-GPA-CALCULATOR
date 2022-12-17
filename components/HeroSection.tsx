import { motion } from "framer-motion";
import { useState } from "react";
import { heroSectionSchema, listSchema } from "../shared/models/schema";
import Card from "./Card";
import { nanoid } from "nanoid";
import { getCourceItem, notify } from "../shared/helpers/helper";
import HeaderCard from "./HeaderCard";
import ProgressBar from "./RoundProgressBar";
import { render } from "react-dom";

export default function HeroSection(props: heroSectionSchema) {
  const [cources, setCources] = useState(Array<listSchema>);

  const [addFormData, setFormData] = useState({
    title: "",
    credit: "",
    grade: "",
  });

  const handleCourceFieldChange = (event: any) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData: any = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData);
  };

  const handleAddCource = (event: any, data?: any) => {
    event.preventDefault();

    const get_cource = getCourceItem(data, addFormData);

    // In Future check for duplicate item in list

    if (
      get_cource.title !== "" &&
      get_cource.credit !== "" &&
      get_cource.grade !== ""
    ) {
      const new_cource: any = [...cources, get_cource];
      setFormData({
        title: "",
        credit: "",
        grade: "",
      });
      setCources(new_cource);
    } else {
      notify("Missing Value", "error");
    }
  };

  const handleDeleteCource = (event: any) => {
    event.preventDefault();
    const get_id = event.target.getAttribute("id");
    // delete only first listItem
    const updated_cources = cources.filter((object) => {
      return object.title !== get_id;
    });
    setCources(updated_cources);
  };

  const [viewGPA, setViewGPA] = useState(false);
  const handleChangeView = (event: any) => {
    setViewGPA(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <section className="bg-white my-28 lg:bg-hero-bg lg:my-0 bg-[center_bottom_-5rem] bg-no-repeat  bg-cover scale-100 dark:bg-primary-900">
        <div className="grid max-w-screen-xl h-screen place-items-start px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2 lg:place-items-center">
          {!viewGPA ? (
            <>
              <HeaderCard
                hide={viewGPA}
                title={props.title}
                handleAddCource={handleAddCource}
                addFormData={addFormData}
                handleCourceFieldChange={handleCourceFieldChange}
                handleChangeView={handleChangeView}
              />
              <Card cources={cources} onDelete={handleDeleteCource} />
            </>
          ) : (
            <>
              <Card cources={cources} onDelete={handleDeleteCource} />
              <ProgressBar gpa={3} viewGPA={viewGPA} />
            </>
          )}
        </div>
      </section>
    </motion.div>
  );
}
