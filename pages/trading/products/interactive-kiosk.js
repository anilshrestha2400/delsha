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
          <h1 className="text-5xl text-center my-8">INTERACTIVE KIOSK</h1>
          <div className=" py-5 text-lg">
            <img
              class="rounded-t-lg h-80 w-96 object-cover m-auto"
              src="/product/ultraledsmartseries/interactive-kiosk.png"
              alt=""
            />
            <h1 className="text-4xl my-6">Description</h1>
            <h1 className="text-3xl my-3">Introduction</h1>
            <h1 className="text-2xl my-3 text-justify">
              Interactive kiosks are self-service solutions that provide
              audiences with engaging digital content and information through a
              user-friendly interface. This type of self-service solution has
              many uses and benefits, and can be used for a variety of purposes
              including retail sales, bill payment via cash or credit,
              wayfinding, tourism, information sharing and more. Interactive
              kiosks are also able to connect to the internet, and can function
              as digital signage when not in use. Kiosk and signage content is
              completely customizable and can be easily updated from a remote
              location.
            </h1>
            <h1 className="text-3xl my-3">Features</h1>
            <ul className="list-decimal ml-10">
              <li className="text-xl my-1">User Friendly</li>
              <li className="text-xl my-1">Time Savvy</li>
              <li className="text-xl my-1">Easy and Comfortable menus</li>
              <li className="text-xl my-1">Interactive</li>
              <li className="text-xl my-1">Efficiency</li>
              <li className="text-xl my-1">Aesthetic Appeal</li>
            </ul>

            <h1 className="text-3xl my-3">Applications</h1>
            <ul className="list-disc ml-10">
              <li className="text-xl my-1">Filling out an application</li>
              <li className="text-xl my-1">Requesting an appointment</li>
              <li className="text-xl my-1">Apply for a credit card</li>
              <li className="text-xl my-1">Submit Feedback</li>
              <li className="text-xl my-1">Wayfinding</li>
              <li className="text-xl my-1">Pay a Bill</li>
              <li className="text-xl my-1">Enter a contest</li>
              <li className="text-xl my-1">Play a game</li>
              <li className="text-xl my-1">Flight Check In</li>
              <li className="text-xl my-1">Ticket Printing</li>
              <li className="text-xl my-1">Product Purchasing</li>
              <li className="text-xl my-1">Placing an Order</li>
            </ul>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetails;
