import Link from "next/link";
import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div>
      <Header />
      {/* <Container>
        <h1 className="text-center text-2xl text-sky-400 mb-3">Contact Us</h1>
        <h1 className="text-4xl text-center">Let’s work together</h1>
        <div className="w-[80%] md:w-[500px] m-auto my-6">
          <form>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Name
              </label>
              <input
                type="text"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required=""
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your Email
              </label>
              <input
                type="email"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required=""
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                subject
              </label>
              <input
                type="email"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required=""
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="text-white bg-sky-400 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
        </div>
      </Container> */}
      <Container>
        <h1 className="text-center text-2xl text-sky-400 mb-3">Contact Us</h1>
        <h1 className="text-4xl text-center mb-3">Let’s work together</h1>
        <div class=" pt-10 pb-6 bg-gray-50">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 text-left mb-5 px-4">
              <div class="bg-white rounded shadow-2xl p-4">
                <iframe
                  class="w-full rounded mb-4"
                  height="320px"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0637245431526!2d85.32483371438478!3d27.71531868174985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190e4e3dfaeb%3A0xcbadb01fa8d00b71!2z4KSo4KSV4KWN4KS44KS-4KSyLCDgpJXgpL7gpKDgpK7gpL7gpKHgpYzgpIEgNDQ2MDA!5e0!3m2!1sne!2snp!4v1667294774359!5m2!1sne!2snp"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                <h5>Address</h5>
                <Link
                  href="https://goo.gl/maps/DyEBJMdy2MdbNGiM9"
                  target="_blank"
                  class="d-inline-block text-decoration-none text-dark mb-2"
                >
                  <i class="fa-solid fa-location-dot"></i> Naxal,Ktm
                </Link>

                <h5 class="mt-4">Call us</h5>
                <Link
                  href="tel: +9779876543210"
                  class="d-inline-block mb-2 text-decoration-none text-dark"
                >
                  <i class="fa-solid fa-phone"></i> +977-9860809393
                </Link>

                <h5 class="mt-4">Email</h5>
                <Link
                  href="mailto: abc@gmail.com"
                  class="d-inline-block text-decoration-none text-dark"
                >
                  <i class="fa-solid fa-envelope"></i> info.bisava@gmail.com
                </Link>
              </div>
            </div>
            <div class="w-full md:w-1/2 text-left px-4">
              <div class="bg-white rounded shadow-2xl p-4">
                <form method="POST">
                  <h5 class="text-xl">Send a message</h5>
                  <div class="mt-3">
                    <label for="name"> Name </label>
                    <input
                      class="shadow appearance-none border border-sky-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-1"
                      id="name"
                      type="text"
                      placeholder="Your name here"
                    />
                  </div>
                  <div class="mt-2">
                    <label for="email"> Email </label>
                    <input
                      class="shadow appearance-none border border-sky-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-1"
                      id="email"
                      type="email"
                      placeholder="Your email here"
                    />
                  </div>
                  <div class="mt-2">
                    <label for="email"> Subject </label>
                    <input
                      class="shadow appearance-none border border-sky-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-1"
                      id="subject"
                      type="subject"
                      placeholder="Your subject here"
                    />
                  </div>
                  <div class="mt-2">
                    <label for="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      class="shadow appearance-none border border-sky-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-1"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    name="send"
                    class="btn bg-sky-500 text-white rounded p-2 mt-2"
                  >
                    SEND
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
