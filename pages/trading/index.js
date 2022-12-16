import Link from "next/link";
import React from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ultraLedSeries = [
  {
    name: "P3 LED OUTDOOR BOARD",
    desctiption: "",
    link: "p3-led-outdoor-board",
    image: "/product/ultraledseries/p3-led-outdoor-board.jpeg",
  },
  {
    name: "P4 LED OUTDOOR BOARD",
    desctiption: "",
    link: "p4-led-outdoor-board",
    image: "/product/ultraledseries/p4-led-outdoor-board.jpeg",
  },
  {
    name: "P5 LED OUTDOOR BOARD",
    desctiption: "",
    link: "p5-led-outdoor-board",
    image: "/product/ultraledseries/p5-led-outdoor-board.jpeg",
  },
  {
    name: "P6 LED OUTDOOR BOARD",
    desctiption: "",
    link: "p6-led-outdoor-board",
    image: "/product/ultraledseries/p6-led-outdoor-board.jpeg",
  },
  {
    name: "P8 LED OUTDOOR BOARD",
    desctiption: "",
    link: "p8-led-outdoor-board",
    image: "/product/ultraledseries/p8-led-outdoor-board.jpg",
  },
  {
    name: "P10 OUTDOOR LED",
    desctiption: "",
    link: "p10-outdoor-led",
    image: "/product/ultraledseries/p10-outdoor-led.jpg",
  },
  {
    name: "P2 Indoor Display Board",
    desctiption: "",
    link: "p2-indoor-display-board",
    image: "/product/ultraledseries/p2-indoor-display-board.jpg",
  },
  {
    name: "P2.5 Indoor Display Board",
    desctiption: "",
    link: "p2.5-indoor-display-board",
    image: "/product/ultraledseries/p2.5-indoor-display-board.png",
  },
  {
    name: "P3 Indoor Display Board",
    desctiption: "",
    link: "p3-indoor-display-board",
    image: "/product/ultraledseries/p3-indoor-display-board.jpg",
  },
  {
    name: "P4 Indoor Display Board",
    desctiption: "",
    link: "p4-indoor-display-board",
    image: "/product/ultraledseries/p4-indoor-display-board.jpg",
  },
];

const ultraLedSmartSeries = [
  {
    name: "Interactive Display Board",
    desctiption: "",
    link: "interactive-display-board",
    image: "/product/ultraledsmartseries/interactive-display-board.png",
  },
  {
    name: "INTERACTIVE KIOSK",
    desctiption: "",
    link: "interactive-kiosk",
    image: "/product/ultraledsmartseries/interactive-kiosk.png",
  },
  {
    name: "Ultra LED Standee LCD",
    desctiption: "",
    link: "ultra-led-standee-lcd",
    image: "/product/ultraledsmartseries/ultra-led-standee-lcd.png",
  },
];

const videoProcessor = [
  {
    name: "TB2 Video Processor",
    desctiption: "",
    link: "tb2-video-processor",
    image: "/product/videoprocessor/tb2-video-processor.png",
  },
];

const drone = [
  {
    name: "Madhukaa Krisak ( Spraying Drone -10L)",
    desctiption: "",
    link: "madhukaa-krisak-spraying-drone-10l",
    image: "/product/drone/madhukaa-krisak-spraying-drone-10l.jpg",
  },
  {
    name: "Madhukaa Krisak ( Spraying Drone -16L)",
    desctiption: "",
    link: "madhukaa-krisak-spraying-drone-16l",
    image: "/product/drone/madhukaa-krisak-spraying-drone-16l.jpg",
  },
  {
    name: "Madhukaa Krisak (Seed Spreading Drone -10L)",
    desctiption: "",
    link: "madhukaa-krisak-seed spreading-drone-10l",
    image: "/product/drone/madhukaa-krisak-seed spreading-drone-10l.jpg",
  },
  {
    name: "Delivery Drone",
    desctiption: "",
    link: "delivery-drone",
    image: "/product/drone/delivery-drone.jpg",
  },
  {
    name: "LED Drone",
    desctiption: "",
    link: "led-drone",
    image: "/product/drone/led-drone.jpg",
  },
  {
    name: "Search, Rescue and First Responder Drone",
    desctiption: "",
    link: "search-rescue-and-first-responder-drone",
    image: "/product/drone/search-rescue-and-first-responder-drone.jpg",
  },
];

const index = () => {
  console.log(
    "product ljldkjfalksd",
    ultraLedSeries[0].desctiption.split(" ").slice(0, 20).join()
  );
  return (
    <div>
      <Header />
      <Container>
        <div className="mt-3">
          <div>
            <h1 className="text-center text-5xl mb-5">Our Products</h1>
            <h1 className="text-center text-2xl underline decoration-sky-400 mb-3">
              Display Board
            </h1>
            <h1 className="text-center text-4xl mb-5">ULTRA LED SERIES</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
              {ultraLedSeries.map((value) => (
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                  <Link href={`/trading/products/${value.link}`}>
                    <img class="rounded-t-lg" src={value.image} alt="" />
                  </Link>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {value.name}
                      </h5>
                    </a>

                    <p class="mb-3 font-normal text-gray-700">
                      {value.desctiption.split(" ").slice(0, 20).join(" ")}
                    </p>
                    <Link
                      href={`/trading/${value.link}`}
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-center text-2xl underline decoration-sky-400 mt-5 mb-3">
              Interactive Display
            </h1>
            <h1 className="text-center text-4xl mb-5">
              ULTRA LED SMART SERIES
            </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
              {ultraLedSmartSeries.map((value) => (
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                  <Link href={`/trading/products/${value.link}`}>
                    <img class="rounded-t-lg" src={value.image} alt="" />
                  </Link>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {value.name}
                      </h5>
                    </a>

                    <p class="mb-3 font-normal text-gray-700">
                      {value.desctiption.split(" ").slice(0, 20).join(" ")}
                    </p>
                    <Link
                      href={`/trading/${value.link}`}
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-center text-2xl underline decoration-sky-400 mt-5 mb-3">
              Display Board
            </h1>
            <h1 className="text-center text-4xl mb-5">VIDEO PROCESSOR</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
              {videoProcessor.map((value) => (
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                  <Link href={`/trading/products/${value.link}`}>
                    <img class="rounded-t-lg" src={value.image} alt="" />
                  </Link>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {value.name}
                      </h5>
                    </a>

                    <p class="mb-3 font-normal text-gray-700">
                      {value.desctiption.split(" ").slice(0, 20).join(" ")}
                    </p>
                    <Link
                      href={`/trading/${value.link}`}
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-center text-2xl underline decoration-sky-400 mt-5 mb-3">
              Drone
            </h1>
            <h1 className="text-center text-4xl mb-5">OUR DRONES</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
              {drone.map((value) => (
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                  <Link href={`/trading/${value.link}`}>
                    <img class="rounded-t-lg" src={value.image} alt="" />
                  </Link>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {value.name}
                      </h5>
                    </a>

                    <p class="mb-3 font-normal text-gray-700">
                      {value.desctiption.split(" ").slice(0, 20).join(" ")}
                    </p>
                    <Link
                      href={`/trading/${value.link}`}
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default index;
