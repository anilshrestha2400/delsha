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
          <h1 className="text-5xl text-center my-8">P3 INDOOR DISPLAY BOARD</h1>
          <div className=" py-5 text-lg">
            <img
              class="rounded-t-lg h-80 w-96 object-cover m-auto"
              src="/product/ultraledseries/p3-indoor-display-board.jpg"
              alt=""
            />
            <h1 className="text-4xl my-6">Description</h1>
            <p className="text-xl mb-4">
              Product name (Product name): Indoor P3 full-color module <br />
              <br />
              Product model (Product model): M-P3F322121M-M6464SA1 (2) <br />
              <br />
              Spacing (Pixel Pitch): 3 mm <br />
              <br />
              LED Spec (LED Spec): SMD2121RGB <br />
              <br />
              Version number (Version number): V1.0
            </p>

            <h1 className="text-2xl my-3">TECHNICAL SPECIFICATION</h1>
            <table class="table-auto">
              <thead>
                <tr class="text-xl font-semibold tracking-wide text-left text-gray-900 bg-gray-100 border-b border-gray-600">
                  <th class="px-4 py-3">Specifications</th>
                  <th class="px-4 py-3">Details</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Pixel Pitch</td>
                  <td class="px-4 py-3 text-lg border">3mm</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">
                    Product number Product model
                  </td>
                  <td class="px-4 py-3 text-lg border">SMD2121</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">
                    Pixel Density Dots/m2
                  </td>
                  <td class="px-4 py-3 text-lg border">111111</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Module Resolution</td>
                  <td class="px-4 py-3 text-lg border">
                    64 points wide X 64 points high
                  </td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Service life</td>
                  <td class="px-4 py-3 text-lg border">50,000 hours</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">
                    Brightness adjustment range
                  </td>
                  <td class="px-4 py-3 text-lg border">0 to 255 adjustable</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">
                    Operating temperature
                  </td>
                  <td class="px-4 py-3 text-lg border">-20 ℃ to 60 ℃</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Storage temperature</td>
                  <td class="px-4 py-3 text-lg border">-40 ℃ to 80 ℃</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetails;
