import React from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const marketing = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className="">
          <img
            src="/Chainge_digital_logo.png"
            alt=""
            className="w-[200px] text-center m-auto"
          />
          <h1 className="text-4xl text-center mt-5">About Chainge Digital</h1>
        </div>
        <div className="px-3 md:px-20 py-5 lg:flex">
          <div className="lg:w-1/2">
            <h1 className="text-xl lg:pr-8 mb-5 text-justify">
              Chainge Digital is an independent advertising company located in
              Nagpokhari. We started this company to help grow companies that
              are Vintage, as well as fresh in the market with our high
              visibility location. Along with showroom, Physical advertisement ,
              digital social media marketing we have introduce d digital board
              of 150 sq.ft in our permises. The digital board can provide high
              quality visual and auditive experiences. It continually attracts
              passer by's attention from its bright colours, leaving a
              continious ad impression and increase awareness. With help of
              creativity in ad designing and use of screen it makes people to
              stop and watch the ads. You can create animations videos, images
              to do the branding and marketing.
            </h1>
          </div>
          <div className="lg:w-1/2">
            <img src="/chainge_about.png" alt="" className="m-auto" />
          </div>
        </div>

        <div className="my-10">
          <h1 className="text-4xl text-center my-5">Our Services</h1>
          <div class="grid md:grid-cols-2 gap-10">
            <div class="w-full bg-white rounded-lg border border-gray-200 shadow-md0">
              <a href="#" target="_blank">
                <img
                  class="rounded-t-lg w-full h-80 "
                  src="/physical.png"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Physical Advertisement
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 text-xl text-justify">
                  We use physical advertisements to promote our client's
                  product. The premises have four outlets in Nagpokhari where we
                  can visibly market our client's merchandise.
                </p>
              </div>
            </div>

            <div class="w-full bg-white rounded-lg border border-gray-200 shadow-md0">
              <a href="#" target="_blank">
                <img
                  class="rounded-t-lg w-full h-80"
                  src="/ledboard.png"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Digital Marketing (LED Board)
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 text-xl text-justify">
                  We show our client's commercial video on our LED board 12
                  hours a day, seven days a week.
                </p>
              </div>
            </div>

            <div class="w-full bg-white rounded-lg border border-gray-200 shadow-md0">
              <a href="#" target="_blank">
                <img
                  class="rounded-t-lg w-full h-80"
                  src="/socialmedia.png"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Social Media Handiling
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 text-xl text-justify">
                  We manage our clients' social media accounts and implement
                  effective marketing campaigns.
                </p>
              </div>
            </div>

            <div class="w-full bg-white rounded-lg border border-gray-200 shadow-md0">
              <a href="#" target="_blank">
                <img class="rounded-t-lg w-full h-80 " src="/post.png" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Post and Video Creation
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 text-xl text-justify">
                  We create various types of posts, as well as videos such as TV
                  commercials, promotional videos, and more, as requested by our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h1 className="text-4xl text-center my-5">Why to choose us?</h1>
          <div className="px-0 md:px-20 py-5 md:flex">
            <div className="md:w-1/2">
              <h1 className="text-xl md:pr-8 text-justify mx-4 ml-10 mb-5 md:ml-0 md:mx-0">
                <ul className="list-disc">
                  <li className="text-xl py-1">Cost efficiency</li>
                  <li className="text-xl py-1">
                    At a fork in a road pinpoint location
                  </li>
                  <li className="text-xl py-1">
                    First digital board close to Religious Site
                  </li>
                  <li className="text-xl py-1">
                    Flow of all levels of class structure
                  </li>
                  <li className="text-xl py-1">
                    Near to Kathmandu Marriot Hotel, particularly draws both
                    domestic international visitors
                  </li>
                  <li className="text-xl py-1">
                    Over 3 years of Marketing experiences in the international
                    level ( Australia)
                  </li>
                  <li className="text-xl py-1">
                    Collaborating with Brands that have trusted us like JAWA,
                    Agni G roup Dabur Nepal Worldlink Simrik Venture Bawarchi
                  </li>
                  <li className="text-xl py-1">
                    Nepal, Barhasinghe Arghakhanchi Agriculture Development Bank
                  </li>
                  <li className="text-xl py-1">
                    More than 1 50 000 viewership in a day
                  </li>
                </ul>
              </h1>
            </div>
            <div className="md:w-1/2">
              <img src="/ads.png" alt="" />
              <h1 className="text-2xl py-3">Note:</h1>
              <h1 className="text-xl  ml-3">
                Board Details: Actual size: 282*480cm <br />
                Resolution (dot): 800*480
                <br />
                Pixel:6mm <br />
                Video format: Avi . Wmv , rmvb , MP4 3gp asf mpg flv f4v mkv mov
                dat vob trp ts WebM etc. <br />
                <br />
                VAT is not included in the above amount..
              </h1>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h1 className="text-4xl text-center my-8">Our Clients</h1>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/c1.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/c2.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/c3.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/c11.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/c5.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/c6.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/c10.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/c8.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/c9.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/c7.png"
                alt=""
                className="w-[130px] text-center m-auto"
              />
            </div>
            <div className="grayscale-[100%] hover:grayscale-0">
              <img
                src="/c4.png"
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

export default marketing;
