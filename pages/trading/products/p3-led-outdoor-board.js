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
          <h1 className="text-5xl text-center my-8">P3 LED OUTDOOR BOARD</h1>
          <div className=" py-5 text-lg">
            <img
              class="rounded-t-lg h-80 w-96 object-cover m-auto"
              src="/product/ultraledseries/p3-led-outdoor-board.jpeg"
              alt=""
            />
            <h1 className="text-4xl my-6">Description</h1>
            <h1 className="text-2xl my-3">TECHNICAL PARAMETERS</h1>
            <ul className="list-disc ml-10">
              <li className="text-xl my-1">Pixel Pitch: 3mm</li>
              <li className="text-xl my-1">Density: 111111dot/m2</li>
              <li className="text-xl my-1">Module Size: 192mm*192mm*75mm</li>
              <li className="text-xl my-1">Module Pixel: 64*64</li>
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
                  <td class="px-4 py-3 text-lg border">3mm</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Lamp</td>
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
                  <td class="px-4 py-3 text-lg border">64*64</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">IP Rate</td>
                  <td class="px-4 py-3 text-lg border">
                    140 degree- 160 degree
                  </td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Signal Processing</td>
                  <td class="px-4 py-3 text-lg border">16 bits</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Working Temperature</td>
                  <td class="px-4 py-3 text-lg border">
                    Working Temperature : -20°C-50°C/20%-90%, <br />
                    Storage Temperature : -20°C-60°C
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
