"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function IndexPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      className="h-100 w-[90%] flex items-center max-w-screen overflow-y-auto"
      style={{ minHeight: "100vh" }}
    >
      <div className="md:p-0 p-4 max-w-full flex flex-col gap-8 md:-mt-10 ">
        <p
          aria-label="Nishtha Studio"
          className="2xl:text-8xl xl:text-8xl lg:text-8xl md:text-8xl sm:text-8xl flex items-center justify-flex-start flex-wrap max-w-full z-30 title-gradient text-6xl duration-1000 font-display"
        >
          <Image
            src="/logo.png" // Replace with your actual image path
            alt="Descriptive image"
            width={500} // Adjust as per your image dimensions
            height={500} // Adjust as per your image dimensions
            className="w-[25%] sm:w-[70%] md:w-[40%] lg:w-[15%] transition-all duration-500 ease-in-out transform overflow-hidden md:mt-0 mt-4"
          />{" "}
          <span>Decor</span>
        </p>

        <p
          aria-label="Nishtha Studio"
          className="2xl:text-8xl xl:text-8xl lg:text-8xl md:text-7xl sm:text-7xl dmsans-home title-gradient2 flex dmsans-home flex-wrap max-w-full   z-30 text-6xl dmsans-home title-gradient3    duration-1000   font-display   "
        >
          helping you shape
          <span className="sm:hidden dmsans-home hidden md:inline-block">
            &nbsp;
          </span>
        </p>
        <p
          aria-label="Nishtha Studio"
          className="2xl:text-8xl xl:text-8xl lg:text-8xl md:text-7xl sm:text-7xl dmsans-home title-gradient2 sm:inline-block md:hidden flex dmsans-home flex-wrap max-w-full   z-30 text-6xl dmsans-home title-gradient    duration-1000   font-display   "
        >
          shape
        </p>
        <p
          aria-label="Nishtha Studio"
          className="2xl:text-8xl xl:text-8xl lg:text-8xl md:text-7xl sm:text-7xl dmsans-home title-gradient2 flex dmsans-home flex-wrap   z-30 text-6xl dmsans-home title-gradient4    duration-1000   font-display   "
        >
          Your Dreams
        </p>

        <div className="md:max-w-full grid lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 grid-cols-2 md:gap-x-24  xl:gap-x-12 lg:gap-x-40 2xl:gap-x-32 gap-x-12  flex-row  sm:leading-8">
          <article className="flex flex-col title-gradient4 mt-8">
            <h3 className="dmsans title-gradient title-gradient4 md:text-4xl  text-3xl mb-3">
              04{" "}
            </h3>
            <h3 className="dmsans text-muted-foreground dmsans   text-[0.9rem] md:text-sm">
              Years designing
            </h3>
            <h3 className="dmsans text-muted-foreground dmsans text-[0.9rem] md:text-sm">
              architectural marvels
            </h3>
          </article>

          <article className="flex flex-col md:ml-0 xs:ml-10 dmsans-home title-gradient3 mt-8">
            <h3 className=" dmsans title-gradient  title-gradient3 md:text-4xl text-3xl mb-3">
              25
            </h3>
            <h3 className="dmsans text-muted-foreground dmsans text-[0.9rem] md:text-sm">
              Successful projects
            </h3>
            <h3 className="dmsans text-muted-foreground dmsans text-[0.9rem] md:text-sm">
              delivered
            </h3>
          </article>

          <article className="flex flex-col title-gradient3  mt-8">
            <h3 className=" dmsans title-gradient title-gradient3 md:text-4xl text-3xl mb-3">
              05{" "}
            </h3>
            <h3 className="dmsans text-muted-foreground dmsans text-[0.9rem] md:text-sm">
              Iconic buildings shaping
            </h3>

            <h3 className="dmsans text-muted-foreground dmsans text-[0.9rem] md:text-sm">
              the architectural landscape
            </h3>
          </article>

          <article className="flex flex-col dmsans-home title-gradient4 md:ml-0 xs:ml-10 mt-8">
            <h3 className="title-gradient dmsans title-gradient4 md:text-4xl text-3xl mb-3">
              08
            </h3>
            <h3 className="dmsans text-muted-foreground dmsans text-[0.9rem] md:text-sm">
              Multidisciplinary team
            </h3>

            <h3 className="dmsans text-muted-foreground dmsans text-[0.9rem] md:text-sm">
              members collaborating
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
}
