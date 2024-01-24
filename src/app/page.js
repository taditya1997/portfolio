import { Navbar } from "@/components/Navbar";
import { IconsDetails } from "@/lib/constant";
export default function Home() {
  return (
    <div className="flex  container min-h-screen text-neutral-white  border-l-green border-r-green bg-primaryBackground flex-col">
      <div className="">
        <Navbar />
        <main className="mt-12  "></main>
        {renderHeroSection()}
      </div>
    </div>
  );
}

function renderHeroSection() {
  return (
    <div className=" px-8 flex flex-col max-w-[45rem] gap-4">
      {" "}
      <h1 className=" leading-tight">Software Engineer</h1>
      <p className="mt-6 text-textZinc">
        Hello, I'm Aditya, your tech ally from Bangalore. By day, I'm a software
        maestro shaping digital landscapes. With a touch of humor, I turn
        complex challenges into triumphs. Join me on this coding adventure,
        where professionalism meets a splash of wit, making every project a step
        closer to success!
      </p>
      <div className="mt-6 flex gap-6">
        {IconsDetails.map((icon) => (
          <a href={icon.url} target="_blank">
            {icon.iconsSvg}
          </a>
        ))}
      </div>
    </div>
  );
}
