import { motion } from "framer-motion";
import { useState } from "react";
import { heroSectionSchema, listSchema } from "../shared/models/schema";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { nanoid } from "nanoid";
import TextField from "./TextField";
import { notify } from "../shared/helpers/helper";

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

  const handleDeleteForm = (event: any) => {
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
          <div className="mx-auto place-self-center ">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl  xl:text-6xl dark:text-white"
            >
              {props.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            ></motion.p>

            <SearchBar
              placeholder="Search and add cources..."
              addToList={handleAddCource}
            />

            <p className="text-2xl m-6 text-center text-white text-bold">OR</p>

            <TextField
              item={addFormData}
              handleCourceFieldChange={handleCourceFieldChange}
              handleAddCource={handleAddCource}
            />
          </div>

          <div className="flex flex-row justify-center w-full my-8">
            <Card cources={cources} onDelete={handleDeleteForm} />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
