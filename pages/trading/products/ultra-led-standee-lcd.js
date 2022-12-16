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
          <h1 className="text-5xl text-center my-8">Ultra LED Standee LCD</h1>
          <div className="py-5 text-lg">
            <img
              class="rounded-t-lg h-80 w-96 object-cover m-auto"
              src="/product/ultraledsmartseries/ultra-led-standee-lcd.png"
              alt=""
            />
            <h1 className="text-4xl my-6">Description</h1>
            <h1 className="text-3xl my-3">Introduction</h1>
            <h1 className="text-2xl my-3">
              Ultra LED Standee LCD is a centrally controlled, content
              distribution platform by which to playback digital content to one
              or many displays or screens. They are used for the relaying of any
              number of types of information; live weather, news, TV, menus,
              flights, calendars, adverts for example. They can be found in
              public spaces, transportation systems, museums, stadiums, retail
              stores, hotels, restaurants, corporate buildings, etc, to provide
              wayfinding, exhibitions, marketing, and outdoor advertising.
            </h1>
            <h1 className="text-3xl my-3">Features</h1>
            <ul className="list-disc ml-10">
              <li className="text-xl my-1">Commercial-grade display</li>
              <li className="text-xl my-1">Easy to use software</li>
              <li className="text-xl my-1">Dynamic content integration</li>
              <li className="text-xl my-1">Content Scalability</li>
              <li className="text-xl my-1">Remote monitoring</li>
              <li className="text-xl my-1">
                Multi-screen & synchronization capabilities
              </li>
            </ul>

            <h1 className="text-3xl my-3">Advantages</h1>
            <ul className="list-disc ml-10">
              <li className="text-xl my-1">Easy to use and update</li>
              <li className="text-xl my-1">Reinforcing brand recognition</li>
              <li className="text-xl my-1">Cut the cost of new creative</li>
              <li className="text-xl my-1">Minimal maintenance</li>
              <li className="text-xl my-1">
                Broadcast time-sensitive messages
              </li>
              <li className="text-xl my-1">
                Enhanced engagement with greater satisfaction
              </li>
            </ul>

            <h1 className="text-3xl my-3">Benefits</h1>
            <ul className="list-disc ml-10">
              <li className="text-xl my-1">
                Content can be changed at a moment’s notice.
              </li>
              <li className="text-xl my-1">More attention from passersby</li>
              <li className="text-xl my-1">
                Greater recall and retention rates
              </li>
              <li className="text-xl my-1">Multi-user access</li>
              <li className="text-xl my-1">Interoperability</li>
              <li className="text-xl my-1">
                Support for a variety of media formats{" "}
              </li>
            </ul>

            <h1 className="text-3xl my-3">Applications</h1>
            <ul className="list-disc ml-10">
              <li className="text-xl my-1">Advertising a product.</li>
              <li className="text-xl my-1">Promote an event</li>
              <li className="text-xl my-1">Raise awareness for a cause</li>
              <li className="text-xl my-1">
                Display content along with the date, time, and weather
              </li>
              <li className="text-xl my-1">Display Special hours</li>
              <li className="text-xl my-1">Communicate brand values</li>
              <li className="text-xl my-1">
                Explain the value of product, item, or service
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
