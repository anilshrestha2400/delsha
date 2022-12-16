import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Showcase from "../components/Showcase";
import { Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Map from "../components/Map";
import { useLoadScript } from "@react-google-maps/api";

function HomePage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "", // Add your API key
  });
  return (
    <>
      <Header />
      <Showcase />

      <Container>
        <div class="grid md:grid-cols-2 gap-10 my-10">
          <div>
            <h1 className="text-xl text-sky-400 font-bold mb-5">
              WHY CHOOSE DELSA?
            </h1>
            <h1 className="md:text-5xl text-3xl font-serif text-gray-800 mb-5">
              Our expertise is in enhancing the value of a conventional trading
              methodology
            </h1>
          </div>
          <div>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <img src="/expert.jpeg" alt="expert" className="h-10 w-10" />
                <h1 className="text-xl font-semibold my-2">Specialist</h1>
                <h1 className="text-lg">
                  Specialists in both domestic and international trade
                </h1>
              </div>
              <div>
                <img src="/efficient.jpeg" alt="expert" className="h-10 w-10" />
                <h1 className="text-xl font-semibold my-2">Efficient</h1>
                <h1 className="text-lg">
                  Discover efficiencies at each stage of the trading process.
                </h1>
              </div>
              <div>
                <img src="/logistic.jpeg" alt="expert" className="h-10 w-10" />
                <h1 className="text-xl font-semibold my-2">Logistics</h1>
                <h1 className="text-lg">Experienced in optimizing logistics</h1>
              </div>
              <div>
                <img src="/seamless.jpeg" alt="expert" className="h-10 w-10" />
                <h1 className="text-xl font-semibold my-2">
                  Seamless Execution
                </h1>
                <h1 className="text-lg">Perform trades with minimum stress</h1>
              </div>
              <div>
                <img src="/value.jpeg" alt="expert" className="h-10 w-10" />
                <h1 className="text-xl font-semibold my-2">Value Creation</h1>
                <h1 className="text-lg">
                  Distribute value made across the supply chain.
                </h1>
              </div>
              <div>
                <img
                  src="/consistency.jpeg"
                  alt="expert"
                  className="h-10 w-10"
                />
                <h1 className="text-xl font-semibold my-2">Consistency</h1>
                <h1 className="text-lg">
                  Regardless of the partner or commodity, being consistent in
                  approach and technique
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-xl text-sky-400 font-bold mb-5">OUR APPROACH</h1>
          <h1 className="text-3xl md:text-4xl font-serif text-gray-800">
            Our import and export techniques have been thoroughly refined,
            generating actionable intelligence and supply-chain efficiencies.
          </h1>
        </div>

        <div className="my-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView="auto"
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 50 },
              768: { slidesPerView: 2, spaceBetween: 50 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
          >
            <SwiperSlide>
              <div className="text-center">
                <img src="/supplier.jpg" alt="" className="w-full h-[300px]" />
                <h1 className="text-xl  py-3 font-semibold">
                  Innovator Vendor
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <img
                  src="/productpackaging.jpeg"
                  alt=""
                  className="w-full h-[300px]"
                />
                <h1 className="text-xl py-3 font-semibold">
                  Packaging the Products
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <img src="/truck.png" alt="" className="w-full h-[300px]" />
                <h1 className="text-xl py-3 font-semibold">
                  Native transportation
                  <br /> at the source port
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <img
                  src="/customclearance.jpg"
                  alt=""
                  className="w-full h-[300px]"
                />
                <h1 className="text-xl py-3 font-semibold">
                  Border checks processing
                  <br /> at the source point
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <img
                  src="/oceanlogistics.jpg"
                  alt=""
                  className="w-full h-[300px]"
                />
                <h1 className="text-xl py-3 font-semibold">
                  Coastal shipping to the
                  <br /> final destination port
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <img
                  src="/customclearancecargo.jpg"
                  alt=""
                  className="w-full h-[300px]"
                />
                <h1 className="text-xl py-3 font-semibold">
                  Shipment clearance at the
                  <br /> destination port
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <img
                  src="/truckdelivery.jpg"
                  alt=""
                  className="w-full h-[300px]"
                />
                <h1 className="text-xl py-3 font-semibold">
                  Regional coastal shipment
                  <br /> at the importer's door
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <img src="/import.jpg" alt="" className="w-full h-[300px]" />
                <h1 className="text-xl py-3 font-semibold">
                  Source distributor
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <img
                  src="/doorinsurance.jpg"
                  alt=""
                  className="w-full h-[300px]"
                />
                <h1 className="text-xl py-3 font-semibold">
                  Comprehensive door to door insurance
                </h1>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>

        <div className="my-10">
          <h1 className="text-4xl text-center font-semibold mb-5">
            Where We Operate
          </h1>
          {/* <div>
            <img
              src="/map.png"
              alt="map"
              className="h-full w-full object-cover"
            />
          </div> */}
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1125192375816!2d85.3218412142092!3d27.71381198278922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190f7d99b6a9%3A0xad1c91827c74d6a4!2sNagpokhari%20Tyre%20%26%20Auto%20Repairs!5e0!3m2!1sen!2snp!4v1667500903969!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{ border: "0", width: "100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <div>{isLoaded ? <Map /> : null}</div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
