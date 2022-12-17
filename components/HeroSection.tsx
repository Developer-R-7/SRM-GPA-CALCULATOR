import { motion } from "framer-motion";
import { useState } from "react";
import { heroSectionSchema, listSchema } from "../shared/models/schema";
import Card from "./Card";
import { nanoid } from "nanoid";
import { notify } from "../shared/helpers/helper";
import HeaderCard from "./HeaderCard";

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
    let cource_record: listSchema;
    if (!data) {
      cource_record = {
        id: nanoid(),
        title: addFormData.title || "",
        credit: addFormData.credit || "",
        grade: addFormData.grade || "",
      };
    } else {
      cource_record = {
        id: nanoid(),
        title: data.title || "",
        credit: data.credit || "",
        grade: data.grade || "",
      };
    }
    console.log(cource_record);

    if (
      cource_record.title !== "" &&
      cource_record.credit !== "" &&
      cource_record.grade !== ""
    ) {
      const new_cource: any = [...cources, cource_record];
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

    const updated_cources = cources.filter((object) => {
      return object.title !== get_id;
    });
    setCources(updated_cources);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <section className="bg-white my-28 lg:bg-hero-bg lg:my-0 bg-[center_bottom_-5rem] bg-no-repeat  bg-cover scale-100 dark:bg-primary-900">
        <div className="grid max-w-screen-xl h-screen place-items-start px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2 lg:place-items-center">
          <HeaderCard
            title={props.title}
            handleAddCource={handleAddCource}
            addFormData={addFormData}
            handleCourceFieldChange={handleCourceFieldChange}
          />

          <Card cources={cources} onDelete={handleDeleteCource} />
        </div>
      </section>
    </motion.div>
  );
}
