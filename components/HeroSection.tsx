import { heroSectionSchema } from "../shared/models/schema";
import Card from "./Card";
import SearchBar from "./SearchBar";

export default function HeroSection(props: heroSectionSchema) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2 place-items-center">
        <div className="mx-auto place-self-center ">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl text-center xl:text-6xl dark:text-white">
            {props.title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg  text-center lg:text-xl dark:text-gray-400">
            {props.description}
          </p>
          <SearchBar placeholder="Search and add cources..." />
        </div>
        <div className="mt-20  contents-center lg:mt-0  flex flex-row px-20 items-center lg:flex">
          <Card />
        </div>
      </div>
    </section>
  );
}
