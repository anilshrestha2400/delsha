import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

const about = () => {
  return (
    <div>
      <Header />
      {/* <div className="mb-5">
        <img
          src="/aboutus.jpg"
          alt=""
          className="w-full h-[600px] object-cover"
        />
      </div> */}
      <Container>
        <div class="my-10">
          <h3 class="text-5xl mb-2  font-bold text-center">About Us</h3>

          <div className="my-8 mx-10 block min-[1192px]:hidden">
            <h3 className="text-xl text-justify text-gray-800">
              Delsha Holdings is an impartial and cohesive community that seeks
              to create value creation through long-term holdings in a select
              group of companies. <br />
              Group of companies includes{" "}
              <span className="font-bold italic">Bisava Technology</span> as It
              service sector,{" "}
              <span className="font-bold italic">Avani Nepal</span> as Cosmetics
              sector,{" "}
              <span className="font-bold italic">
                Pacific Engineering Co. Pvt. Ltd.
              </span>{" "}
              as construction sector,{" "}
              <span className="font-bold italic">Chainge Digial</span> as
              marketing sector,{" "}
              <span className="font-bold italic"> Madhuka Drone Service</span>{" "}
              as drone service provider and{" "}
              <span className="font-bold italic">Ultra LED Display</span> to
              light your brands. Our Ventures enjoy work and always go above and
              beyond to ensure that our clients are satisfied.
            </h3>
          </div>

          <div className="hidden min-[1192px]:block min-[1192px]:mb-20">
            <div className="relative w-full h-[80vh] my-5">
              <div className="bg-gray-300 w-2/3 grid place-items-center absolute">
                <div className="my-8 mx-5 px-10 py-10 mr-40 ">
                  <h1 className="font-mono text-3xl mb-3 text-sky-500">
                    Who we are
                  </h1>
                  <h3 className="text-xl text-justify text-gray-800">
                    Delsha Holdings is an impartial and cohesive community that
                    seeks to create value creation through long-term holdings in
                    a select group of companies.
                    <br />
                    <br />
                    Group of companies includes{" "}
                    <span className="font-bold italic">
                      Bisava Technology
                    </span>{" "}
                    as It service sector,{" "}
                    <span className="font-bold italic">Avani Nepal</span> as
                    Cosmetics sector,{" "}
                    <span className="font-bold italic">
                      Pacific Engineering Co. Pvt. Ltd.
                    </span>{" "}
                    as construction sector,{" "}
                    <span className="font-bold italic">Chainge Digial</span> as
                    marketing sector,{" "}
                    <span className="font-bold italic">
                      {" "}
                      Madhuka Drone Service
                    </span>{" "}
                    as drone service provider and{" "}
                    <span className="font-bold italic">
                      Ultra LED Display
                    </span>{" "}
                    to light your brands. Our Ventures enjoy work and always go
                    above and beyond to ensure that our clients are satisfied.
                  </h3>
                </div>
              </div>
              <div className="absolute -bottom-16 right-12">
                <img src="/drone.jpg" alt="" className="w-[500px] h-[300px]" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-center mb-10">Our Ventures</h1>
        {/* <div>
          {" "}
          <div>
            <div className="mx-auto text-center">
              <h1 className="text-3xl font-semibold mb-3 underline decoration-black">
                BISAVA TECHNOLOGY
              </h1>
            </div>
            <div className="py-5 flex justify-between space-x-10">
              <div className="w-2/3 py-10">
                <h1 className="text-xl text-justify">
                  Bisava is a team of dedicated IT professionals thriving to
                  deliver high quality client-based product, services and
                  solution that helps business prosper in their respective field
                  through the help of Information and Technology. A group of IT
                  enthusiast with international exposure in the same sector,
                  Bisava Technology is driven to provide a seamless transition
                  for businesses to adapt to latest dynamics of IT with the help
                  of 50+ national engineers, consultants and 5+ international
                  consultants from various part of the globe. The team here at
                  BISAVA aims to facilitate solutions and services to clients
                  based on their demand and beyond. Our experts will guide you
                  through the process and support your businesses with different
                  packages that fits best for you.
                </h1>
              </div>
              <div className="w-1/3 text-center ">
                <Image
                  src="/bisava1.jpeg"
                  alt=""
                  width={300}
                  height={300}
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="mx-auto text-center">
              <h1 className="text-3xl font-semibold mb-3 underline decoration-black">
                CHAINGE DIGITAL
              </h1>
            </div>
            <div className="py-5 flex justify-between space-x-10">
              <div className="w-1/3 text-center px-10">
                <Image
                  src="/Chainge_digital_logo.png"
                  alt=""
                  width={300}
                  height={300}
                  quality={100}
                />
              </div>
              <div className="w-2/3 py-6">
                <h1 className="text-xl text-justify">
                  Chainge Digital is an independent advertising company located
                  in Nagpokhari. We started this company to help grow companies
                  that are Vintage, as well as fresh in the market with our high
                  visibility location. Along with showroom, Physical
                  advertisement , digital social media marketing we have
                  introduce d digital board of 150 sq.ft in our permises. The
                  digital board can provide high quality visual and auditive
                  experiences. It continually attracts passer by's attention
                  from its bright colours, leaving a continious ad impression
                  and increase awareness. With help of creativity in ad
                  designing and use of screen it makes people to stop and watch
                  the ads. You can create animations videos, images to do the
                  branding and marketing.
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="mx-auto text-center">
              <h1 className="text-3xl font-semibold mb-3 underline decoration-black">
                MADHUKA DRONE SERVICES
              </h1>
            </div>
            <div className="py-5 flex justify-between space-x-10">
              <div className="w-2/3 py-10">
                <h1 className="text-xl text-justify">
                  Madhuka Drone Services Pvt. Ltd is been planned with the
                  purpose to provide various services of drones that will make
                  the lives of people better. Various aerial tasks, mostly
                  focused on data acquisition, that is required to be performed
                  at different fields of operation is provided by our company
                  with accuracy, efficiency, low risk and low cost.
                </h1>
              </div>
              <div className="w-1/3 text-center py-10">
                <Image
                  src="/madhukalogo.png"
                  alt=""
                  width={300}
                  height={300}
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="mx-auto text-center">
              <h1 className="text-3xl font-semibold mb-3 underline decoration-black">
                AVANI NEPAL
              </h1>
            </div>
            <div className="py-5 flex justify-between space-x-10">
              <div className="w-1/3 text-center px-24">
                <Image
                  src="/c6.png"
                  alt=""
                  width={200}
                  height={200}
                  quality={100}
                />
              </div>
              <div className="w-2/3 py-6">
                <h1 className="text-xl text-justify">
                  Mother Nature's best gift is natural and organic herbs and
                  plants. Our mother is our first doctor, so why not heal
                  ourselves by using the natural products provided by mother
                  nature? Protect your beautiful skin, hair, and body naturally
                  by using Avani’s products which are made by traditional
                  Ayurvedic approach.
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="mx-auto text-center">
              <h1 className="text-3xl font-semibold mb-3 underline decoration-black">
                PACIFIC ENGINEERING Co. Pvt. Ltd.
              </h1>
            </div>
            <div className="py-5 flex justify-between space-x-10">
              <div className="w-2/3 py-10">
                <h1 className="text-xl text-justify">
                  Pacific Engineering Co. Pvt. Ltd is an “A” Class construction
                  company specializing in the construction of major
                  infrastructure projects and has served the nation as a dynamic
                  Nepali construction firm after our Chairman Mr. Thakur Prasad
                  Kandel entered the construction sector as a young entrepreneur
                  in 1981 A.D. In the present day, the company has proven itself
                  to be one of the largest physical infrastructure construction
                  companies in Nepal with a track record of having completed
                  200+ projects of different nature, complexity, and volume. The
                  company possesses a strong passion for construction which is
                  reflected by the wealth of national road, bridge, irrigation,
                  hydropower, bus park and airport projects that the company has
                  successfully completed in the past 40+ years of operation
                </h1>
              </div>
              <div className="w-1/3 text-center py-28">
                <Image
                  src="/pacificlogo.png"
                  alt=""
                  width={300}
                  height={300}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div> */}

        <div class="grid grid-cols-2 md:grid-cols-3 gap-10 mb-5">
          <div className="grayscale-[100%] hover:grayscale-0">
            <Link href="/services/information&technology" target="_blank">
              <img
                src="/bisava1.jpeg"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </Link>
          </div>
          <div className="grayscale-[100%] hover:grayscale-0">
            <Link href="/services/marketing" target="_blank">
              <img
                src="/Chainge_digital_logo.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </Link>
          </div>
          <div className="grayscale-[100%] hover:grayscale-0">
            <Link href="https://ultraleddisplay.com/" target="_blank">
              <img
                src="/ultralogo.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </Link>
          </div>
          <div className="grayscale-[100%] hover:grayscale-0">
            <Link href="https://avaninepal.com/" target="_blank">
              <img
                src="/c6.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </Link>
          </div>
          <div className="grayscale-[100%] hover:grayscale-0">
            <Link href="https://madhukaa.com/" target="_blank">
              <img
                src="/madhukalogo.png"
                alt=""
                className="w-[130px] text-center m-auto py-10"
              />
            </Link>
          </div>

          <div className="grayscale-[100%] hover:grayscale-0">
            <Link href="https://pacificeng.com.np/" target="_blank">
              <img
                src="/pacificlogo.png"
                alt=""
                className="w-[130px] text-center m-auto py-10"
              />
            </Link>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default about;
