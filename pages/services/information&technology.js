import Link from "next/link";
import React from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const projects = [
  {
    name: "Avani Nepal",
    link: "https://avaninepal.com",
    image: "/avani.png",
  },
  {
    name: "Shiva Travels",
    link: "https://shivatravels.com.np/",
    image: "/shiva.png",
  },
  {
    name: "Romania Consulate",
    link: "https://consulatefrontend.bisavatechnology.com/",
    image: "/consulate.png",
  },
  {
    name: "Giti",
    link: "https://www.gitinepal.com/",
    image: "/giti.png",
  },
];

const informationTechnology = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className="">
          <img
            src="/bisava1.jpeg"
            alt=""
            className="w-[200px] text-center m-auto"
          />
          <h1 className="text-4xl text-center mt-5">About Bisava Technology</h1>
        </div>
        <div className="px-3 md:px-20 py-5">
          <h1 className="text-xl text-justify">
            Bisava is a team of dedicated IT professionals thriving to deliver
            high quality client-based product, services and solution that helps
            business prosper in their respective field through the help of
            Information and Technology. A group of IT enthusiast with
            international exposure in the same sector, Bisava Technology is
            driven to provide a seamless transition for businesses to adapt to
            latest dynamics of IT with the help of 50+ national engineers,
            consultants and 5+ international consultants from various part of
            the globe. The team here at BISAVA aims to facilitate solutions and
            services to clients based on their demand and beyond. Our experts
            will guide you through the process and support your businesses with
            different packages that fits best for you.
          </h1>
        </div>
        <h1 className="text-4xl text-center my-5">Our Services</h1>

        <div class="grid sm:grid-cols-2  gap-10 max-w-8xl mx-auto px-6 sm:px-6 lg:px-14 ">
          <div>
            <h1 class=" text-2xl text-center mb-4">Mobile App Development</h1>
            <div class="w-full">
              <img
                src="/mobileapp.jpg"
                alt="Mobile App Development"
                class="object-cover m-auto"
              />
            </div>
          </div>
          <div>
            <h1 class=" text-2xl text-center mb-4">Web App Development</h1>
            <div class="w-full">
              <img
                src="/webapp.jpg"
                alt="Web App Development"
                class="object-cover m-auto"
              />
            </div>
          </div>
          <div>
            <h1 class=" text-2xl text-center mb-4">Graphics Design</h1>
            <div class="w-full">
              <img
                src="/graphics.jpg"
                alt="Graphics Design"
                class="object-cover m-auto"
              />
            </div>
          </div>
          <div>
            <h1 class=" text-2xl text-center mb-4">UI/UX Design</h1>
            <div class="w-full">
              <img
                src="/ui.jpg"
                alt="UI/UX Design"
                class="object-cover m-auto"
              />
            </div>
          </div>

          <div>
            <div className="text-center">
              <h1 className="text-3xl mb-5">
                In partnership with{" "}
                <Link
                  href="https://veloxtech.us/"
                  target="_blank"
                  className="font-bold"
                >
                  Volex
                </Link>{" "}
              </h1>
            </div>
            <h1 class=" text-2xl text-center mb-4">Cloud Security</h1>
            <div class="w-full">
              <img
                src="/cloud.png"
                alt="Cloud Security"
                class="object-cover m-auto h-60"
              />
            </div>
          </div>
        </div>
        <div className="px-0 md:px-20 py-5">
          <h1 className="text-4xl text-center">Our Projects</h1>
          <div className="grid md:grid-cols-2 gap-10 my-5">
            {projects.map((value) => (
              <div class="flex items-center justify-center w-full">
                <a
                  class="relative block bg-gray-900 group w-full"
                  href={value.link}
                  target="_blank"
                >
                  <img
                    class="absolute inset-0 object-cover max-w-full h-auto m-auto group-hover:opacity-50"
                    src={value.image}
                    alt=""
                  />
                  <div class="relative">
                    <div class="my-28">
                      <div class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                        <div className="flex items-center flex-col">
                          <p class="text-xl text-white text-center">
                            {value.name}
                          </p>
                          <button class="px-4 py-2 text-sm text-white bg-purple-800 mt-3">
                            View Live Site
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-4xl text-center my-8">Our Clients</h1>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/c6.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/cit.jpeg"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/nea.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>

            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/idm.jpeg"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/romanialogo.jpeg"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/gitilogo.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/shivalogo.jpg"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default informationTechnology;
