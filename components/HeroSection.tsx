import Card from "./Card";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl p-6 text-center xl:text-6xl dark:text-white">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg  text-center lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <SearchBar placeholder="Search for your cources..." />
        </div>
        <div className="mt-20 contents-center lg:mt-0 lg:col-span-5 lg:flex">
          <Card />
        </div>
      </div>
    </section>
  );
}
