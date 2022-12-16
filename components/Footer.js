import Link from "next/link";
import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-amber-900 text-white py-5">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-16 gap-5 md:gap-10">
        <div className="mb-5 w-full">
          <h1 className="text-2xl font-semibold mb-3">About Us</h1>
          <h1 className="text-lg text-justify">
            We are a sourcing company that focuses on offering high-quality
            products and services to customers all around the world. We take
            pleasure in our work and constantly go above and beyond to make sure
            that our clients are satisfied.
          </h1>
        </div>
        <div className="mb-5 w-full">
          <h1 className="text-2xl font-semibold mb-3">Get In Touch</h1>
          <h1 className="text-lg mb-1">
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>{" "}
            +977 9860809393
          </h1>
          <h1 className="text-lg">
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>{" "}
            info.bisava@gmail.com
          </h1>
        </div>
        <div className="mb-5 w-full">
          <h1 className="text-2xl font-semibold mb-3">Useful Links</h1>
          <ul className=" text-lg ">
            <li className="mb-1 hover:underline">
              <Link href="/services/information&technology">
                Information & Technology
              </Link>
            </li>
            <li className="mb-1 hover:underline">
              <Link href="/services/marketing">Marketing</Link>
            </li>
            <li className="mb-1 hover:underline">
              <Link href="https://madhukaa.com/" target="_blank">
                Drone Manufacture
              </Link>
            </li>
            <li className="mb-1 hover:underline">
              <Link href="https://avaninepal.com/" target="_blank">
                Cosmetics
              </Link>
            </li>
            <li className="mb-1 hover:underline">
              <Link href="https://pacificeng.com.np/" target="_blank">
                Construction
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-5 w-full">
          <h1 className="text-2xl font-semibold mb-3">Policy Pages</h1>
          <ul className=" text-lg ">
            <li className="mb-1 hover:underline">
              <Link href="/services/information&technology">
                Terms and Conditions
              </Link>
            </li>
            <li className="mb-1 hover:underline">
              <Link href="/services/marketing">Privacy Policy</Link>
            </li>
            <li className="mb-1 hover:underline">
              <Link href="https://madhukaa.com/" target="_blank">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
