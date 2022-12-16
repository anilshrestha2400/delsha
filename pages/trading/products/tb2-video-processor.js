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
          <h1 className="text-5xl text-center my-8">TB2 Video Processor</h1>
          <div className="py-5 text-lg">
            <img
              class="rounded-t-lg h-80 w-96 object-cover m-auto"
              src="/product/videoprocessor/tb2-video-processor.png"
              alt=""
            />
            <h1 className="text-4xl my-6">Description</h1>

            <h1 className="text-3xl my-3">Characteristics</h1>
            <ul className="list-disc ml-10">
              <li className="text-xl my-1">
                Support 650,000-pixel loading capacity, with a maximum width of
                1920 pixels and a maximum height of 1080 pixels.
              </li>
              <li className="text-xl my-1">Support Wi-Fi AP connection.</li>
              <li className="text-xl my-1">Support Gigabit wired network.</li>
              <li className="text-xl my-1">Support stereo audio output.</li>
              <li className="text-xl my-1">Support HDMI input mode.</li>
              <li className="text-xl my-1">
                Support HDMI input full-screen self-adaptive display
              </li>
              <li className="text-xl my-1">
                support manual and time switching between synchronous and
                asynchronous mode
              </li>
              <li className="text-xl my-1">
                1-Way USB interface supports USB drive importing Display
              </li>
              <li className="text-xl my-1">
                {" "}
                onboard brightness sensor interface supports automatic and
                timing smart brightness adjustment
              </li>
            </ul>

            <h1 className="text-2xl my-3">Physical Specifications</h1>
            <table class="table-auto">
              <thead>
                <tr class="text-xl font-semibold tracking-wide text-left text-gray-900 bg-gray-100 border-b border-gray-600">
                  <th class="px-4 py-3">Specifications</th>
                  <th class="px-4 py-3">Details</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Dimensions(WxDxH)</td>
                  <td class="px-4 py-3 text-lg border">
                    178mmx102.5mm X 28.5mm
                  </td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Weight</td>
                  <td class="px-4 py-3 text-lg border">384.1 g</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Input Power Supply</td>
                  <td class="px-4 py-3 text-lg border">5V DC</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">
                    Rated power Consumtio
                  </td>
                  <td class="px-4 py-3 text-lg border">15w</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">
                    Internal Storage Space
                  </td>
                  <td class="px-4 py-3 text-lg border">8 GB</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">Operating Memory</td>
                  <td class="px-4 py-3 text-lg border">1 GB</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 text-lg border">
                    Operating Temperature
                  </td>
                  <td class="px-4 py-3 text-lg border">40°-75°c</td>
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
