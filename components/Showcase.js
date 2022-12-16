import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "./Container";
import Link from "next/link";
const Showcase = () => {
  var showcase = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="relative">
      <Slider {...showcase}>
        <div>
          <div className="w-full h-[400px] md:h-[548px] overflow-hidden bg-gray-200 relative">
            <img
              src="/showcase.jpeg"
              alt=""
              className="w-full h-[548px] object-cover"
            />
            <div className="absolute top-[25%] md:top-[35%] w-full">
              <Container>
                <div className="w-[90%] md:w-[700px]">
                  <div>
                    <h1 className="text-lg md:text-2xl font-extrabold text-white mb-4 ">
                      Delsha Holding
                    </h1>
                    <h1 className="text-3xl md:text-5xl text-white mb-8">
                      Specialists in global
                      <br /> commodity trading
                    </h1>
                  </div>
                  <div>
                    <Link
                      href="/trading"
                      className="rounded-[90px] text-lg text-white bg-sky-400 px-6 py-3"
                    >
                      ━━━ Discover More
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-[400px] md:h-[548px] overflow-hidden bg-gray-200 relative">
            <img
              src="/ledboard.png"
              alt=""
              className="w-full h-[548px] object-cover"
            />
            <div className="absolute top-[25%] md:top-[35%] w-full">
              <Container>
                <div className="w-[90%] md:w-[700px]">
                  <div>
                    <h1 className="text-lg md:text-2xl font-extrabold text-white mb-4 ">
                      Chainge Digital
                    </h1>
                    <h1 className="text-3xl md:text-5xl text-white mb-8">
                      Independent Advertising Company
                    </h1>
                  </div>
                  <div>
                    <Link
                      href="/services/marketing"
                      className="rounded-[90px] text-lg text-white bg-sky-400 px-6 py-3"
                    >
                      ━━━ Discover More
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-[400px] md:h-[548px] overflow-hidden bg-gray-200 relative">
            <img
              src="/drone.jpg"
              alt=""
              className="w-full h-[548px] object-cover"
            />
            <div className="absolute top-[25%] md:top-[35%] w-full">
              <Container>
                <div className="w-[90%] md:w-[700px]">
                  <div>
                    <h1 className="text-lg md:text-2xl font-extrabold text-white mb-4 ">
                      Madhuka Drone Services
                    </h1>
                    <h1 className="text-3xl md:text-5xl text-white mb-8">
                      Flying Opportunities
                      <br /> Towards You
                    </h1>
                  </div>
                  <div>
                    <Link
                      href="https://madhukaa.com/"
                      target="_blank"
                      className="rounded-[90px] text-lg text-white bg-sky-400 px-6 py-3"
                    >
                      ━━━ Discover More
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-[400px] md:h-[548px] overflow-hidden bg-gray-200 relative">
            <img
              src="/construction.jpg"
              alt=""
              className="w-full h-[548px] object-cover"
            />
            <div className="absolute top-[15%] md:top-[35%] w-full">
              <Container>
                <div className="w-[90%] md:w-[700px]">
                  <div>
                    <h1 className="text-lg md:text-2xl font-extrabold text-white mb-4 ">
                      Pacific Engineering Co. Pvt. Ltd
                    </h1>
                    <h1 className="text-3xl md:text-5xl text-white mb-8">
                      “A” Class construction company specializing in the
                      construction of major infrastructure projects
                    </h1>
                  </div>
                  <div>
                    <Link
                      href="https://pacificeng.com.np/"
                      target="_blank"
                      className="rounded-[90px] text-lg text-white bg-sky-400 px-6 py-3"
                    >
                      ━━━ Discover More
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-[400px] md:h-[548px] overflow-hidden bg-gray-200 relative">
            <img
              src="/avani.jpeg"
              alt=""
              className="w-full h-[548px] object-cover"
            />
            <div className="absolute top-[20%] md:top-[35%] w-full">
              <Container>
                <div className="w-[90%] md:w-[700px]">
                  <div>
                    <h1 className="text-lg md:text-2xl font-extrabold text-white mb-4 ">
                      Avani Nepal
                    </h1>
                    <h1 className="text-3xl md:text-5xl text-white mb-8">
                      Protect your beautiful skin, hair, and body naturally by
                      using Avani’s products
                    </h1>
                  </div>
                  <div>
                    <Link
                      href="https://avaninepal.com/"
                      target="_blank"
                      className="rounded-[90px] text-lg text-white bg-sky-400 px-6 py-3"
                    >
                      ━━━ Discover More
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Showcase;
