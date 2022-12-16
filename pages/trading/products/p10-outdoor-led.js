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
          <h1 className="text-5xl text-center my-8">P10 OUTDOOR LED</h1>
          <div className="py-5 text-lg">
            <img
              class="rounded-t-lg h-80 w-96 object-cover m-auto"
              src="/product/ultraledseries/p10-outdoor-led.jpg"
              alt=""
            />
            <h1 className="text-4xl my-6">Description</h1>
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
                  <td class="px-4 py-3 text-lg border">10mm</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Lamp</td>
                  <td class="px-4 py-3 text-lg border">SMD3535</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">
                    Pixel Density Dots/m2
                  </td>
                  <td class="px-4 py-3 text-lg border">10000</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Module Resolution</td>
                  <td class="px-4 py-3 text-lg border">32*16</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Module Size</td>
                  <td class="px-4 py-3 text-lg border">320mm * 160mm</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">IP Rate</td>
                  <td class="px-4 py-3 text-lg border">IP65</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Signal Processing</td>
                  <td class="px-4 py-3 text-lg border">16 bits</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Working Temperature</td>
                  <td class="px-4 py-3 text-lg border">
                    -25 Deg Celsius to -60 Deg Celsius
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
