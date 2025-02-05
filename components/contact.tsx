import React from "react";
import Link from "next/link";
import Head from "next/head";

export function Contact() {
  return (
    <div
      className="md:-ml-32 md:-mr-32 grid grid-cols-1 md:grid-cols-2"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <Head>
        <title>Contact Us - Nishtha Architects</title>
        <meta
          name="description"
          content="Contact Nishtha Architects for architectural inquiries. Find our phone number, address, and email. Reach out to us for your residential and commercial projects in Vadodara."
        />
      </Head>
      <section className="p-6 md:p-0 pb-28 md:pb-24  md:ml-24 max-w-screen space-y-3 items-start text-left md:py-6">
        <div className="mx-au mt-20 flex max-w-[88rem] flex-col space-y-4 text-left">
          <h2
            aria-label=" Contact The Studio"
            className="font-heading text-6xl text-black dmsans-bold font-medium leading-[1.1] mb-5 md:text-7xl"
          >
            Contact The Studio
          </h2>
        </div>
        <div className=" md:grid-cols-1">
          <div className="flex md:flex-col flex-col">
            <Link
              href="tel:8072701454"
              target="_blank"
              aria-label="Phone Number: 8072701454"
              className="text-xl hover:text-orange-400 dmsans leading-normal text-left text-gray-800 sm:text-md sm:leading-8"
            >
              Phone Number: 8320868303
            </Link>
            <br />
            <Link
              href="https://maps.app.goo.gl/RNaqw1K57AMitdgt7"
              target="_blank"
              className="text-xl hover:text-orange-400 dmsans leading-normal text-left text-gray-800 sm:text-md sm:leading-8"
              aria-label=" Nishtha Decor, Vasna Rd, Ashwamegh Nagar, Saiyed Vasna, Vadodara, Gujarat 390012."
            >
              Address: Nishtha Decor, Vasna Rd, Ashwamegh Nagar, Saiyed Vasna,{" "}
              <br />
              Vadodara, Gujarat 390012.
            </Link>
            <br />
            <Link
              href="mailto:NishthaShah@gmail.com"
              target="_blank"
              aria-label="Mail: NishthaShah@gmail.com"
              className="text-xl hover:text-orange-400  leading-normal text-left text-gray-800 sm:text-md sm:leading-8"
            >
              Mail: NishthaShah@gmail.com
            </Link>
          </div>
        </div>
      </section>
      <iframe
        className="justify-end flex float-right md:h-[30rem] w-[40vh] h-[40vh] 2xl:w-[77vh] xl:w-[67vh] lg:w-[57vh] md:w-[47vh]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.55549772228!2d73.14068217557947!3d22.2948217430934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc89e1aff5fe5%3A0x21d1adb67d2d83f1!2sGruh%20Sajavat!5e0!3m2!1sen!2sin!4v1738770309999!5m2!1sen!2sin"
        style={{ border: "0", margin: "3vh" }}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Contact;
