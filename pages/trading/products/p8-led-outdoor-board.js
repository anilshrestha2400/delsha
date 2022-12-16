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
          <h1 className="text-5xl text-center my-8">P8 LED OUTDOOR BOARD</h1>
          <div className="py-5 text-lg">
            <img
              class="rounded-t-lg h-80 w-96 object-cover m-auto"
              src="/product/ultraledseries/p8-led-outdoor-board.jpg"
              alt=""
            />
            <h1 className="text-4xl my-6">Description</h1>
            <ul className="list-disc ml-10">
              <li className="text-xl my-1">
                Good consistency effect, it adopts reliable integrated packaging
                <br />
                technology for reducing reflective surface area
              </li>
              <li className="text-xl my-1">
                It can be reached 140 degrees for horizontal & vertical viewing
                angles;
              </li>
              <li className="text-xl my-1">
                High-protective, anti-adverse environment
              </li>
              <li className="text-xl my-1">Easy installation to use</li>
              <li className="text-xl my-1">
                Direct conversion to dc, can be powered directly by the battery
              </li>
              <li className="text-xl my-1">
                Light sensor for brightness control according to daylight
              </li>
              <li className="text-xl my-1">
                Display content can be remotely changed through the internet
              </li>
              <li className="text-xl my-1">
                4 GB internal memory space for storing videos and images
              </li>
              <li className="text-xl my-1">Fully waterproof</li>
            </ul>

            <h1 className="text-2xl my-3">TECHNICAL PARAMETERS</h1>
            <ul className="list-disc ml-10">
              <li className="text-xl my-1">Pixel Pitch: 6mm</li>
              <li className="text-xl my-1">Density: 15625dot/m2</li>
              <li className="text-xl my-1">Module Size: 256X128mm</li>
              <li className="text-xl my-1">Module Pixel: 32X16</li>
            </ul>

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
                  <td class="px-4 py-3 text-lg border">8mm</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">LED Type</td>
                  <td class="px-4 py-3 text-lg border">SMD3535</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">
                    Pixel Density Dots/m2
                  </td>
                  <td class="px-4 py-3 text-lg border">15625</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Module Resolution</td>
                  <td class="px-4 py-3 text-lg border">32*16</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Protection Level</td>
                  <td class="px-4 py-3 text-lg border">IP65</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Color Temerature</td>
                  <td class="px-4 py-3 text-lg border"> 3200K-9300K</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Refresh Rate</td>
                  <td class="px-4 py-3 text-lg border">
                    LED screen refresh frame freauency recommended
                    <br /> is no less than 1200HZ(recommended)
                  </td>
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
