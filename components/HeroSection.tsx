import { motion } from "framer-motion";
import { heroSectionSchema } from "../shared/models/schema";
import Card from "./Card";
import SearchBar from "./SearchBar";
import TextField from "./TextField";
export default function HeroSection(props: heroSectionSchema) {
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
            <SearchBar placeholder="Search and add cources..." />
            <p className="text-2xl m-6 text-center text-white text-bold">OR</p>
            <div className="flex flex-row w-full">
              <TextField />
            </div>
          </div>

          <div className="flex flex-row justify-center w-full my-8">
            <Card />
          </div>

          {/* <div className="contents-center lg:mt-0  flex flex-row items-center lg:flex">
            <Card />
          </div> */}
        </div>
      </section>
    </motion.div>
  );
}
