import React from "react";
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className="mt-5 grid place-items-center">
          <h1 className="text-5xl text-center my-8">
            Interactive Display Board
          </h1>
          <div className=" py-5 text-lg">
            <img
              class="rounded-t-lg h-80 w-96 object-cover m-auto"
              src="/product/ultraledsmartseries/interactive-display-board.png"
              alt=""
            />
            <h1 className="text-4xl my-6">Description</h1>
            <h1 className="text-3xl my-3">Introduction</h1>
            <h1 className="text-2xl my-3 text-justify">
              An interactive display enables users to make vibrant visual
              presentations and control on-screen data through digital
              touchscreen interactions. Interactive Ultra LED Display (IULD) is
              a large-format touchscreen display ideal for meeting rooms and
              conference halls.
            </h1>
            <h1 className="text-3xl my-3">Features</h1>
            <ul className="list-decimal ml-10">
              <li className="text-xl my-1">Endless Canvas/ Pages</li>
              <li className="text-xl my-1">Multi-language recognition</li>
              <li className="text-xl my-1">
                Multiple-finger gesture recognition and control
              </li>
              <li className="text-xl my-1">Text and Shape recognition</li>
              <li className="text-xl my-1">Screencasting</li>
              <li className="text-xl my-1">Screen recording</li>
            </ul>

            <h1 className="text-3xl my-3">Advantages</h1>
            <ul className="list-decimal ml-10">
              <li className="text-xl my-1">
                It can be used for Active learning, Presentation, Video
                Conferencing etc.
              </li>
              <li className="text-xl my-1">Engaging and Informative</li>
              <li className="text-xl my-1">Built-in software</li>
              <li className="text-xl my-1">Time and cost saving</li>
              <li className="text-xl my-1">
                Increased interactions and collaborations
              </li>
              <li className="text-xl my-1">
                Decreases the gap between teacher and learner
              </li>
              <li className="text-xl my-1">
                Decreases the gap between teacher and learner
              </li>
              <li className="text-xl my-1">HDMI, VGA, Ethernet Interface</li>
              <li className="text-xl my-1">Pixel Composition 1R1B1G</li>
            </ul>

            <h1 className="text-3xl my-3">Benefit</h1>
            <ul className="list-disc ml-10">
              <li className="text-xl my-1">
                Enhanced support for all learning styles
              </li>
              <li className="text-xl my-1">
                Inclusive and flexible learning environment
              </li>
              <li className="text-xl my-1">
                Greater efficiency for time-strapped users.
              </li>
              <li className="text-xl my-1">Aesthetically pleasing</li>
            </ul>

            <h1 className="text-3xl my-3">Applications</h1>
            <ul className="list-disc ml-10">
              <li className="text-xl my-1">Office Display Solution</li>
              <li className="text-xl my-1">
                High Resolution conferences and meetings
              </li>
              <li className="text-xl my-1">
                Smart,Digital and Interactive Classroom
              </li>
              <li className="text-xl my-1">
                Product’s feature demonstration device
              </li>
              <li className="text-xl my-1">
                Labs and Experiments can be conducted with the display
              </li>
              <li className="text-xl my-1">
                Endless canvas and quality touch input make this display
                appropriate for artists, painters etc.
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetails;
