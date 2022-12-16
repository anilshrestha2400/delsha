import React, { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Container from "./Container";
import { Menu, Transition } from "@headlessui/react";

const Header = () => {
  const router = useRouter();
  const path = router.pathname;
  console.log("path", path);
  const [offset, setOffset] = useState(0);
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <div
        className={
          offset > 400
            ? "md:fixed top-0 w-full block navbar z-20"
            : "w-full block navbar bg-white"
        }
      >
        <nav
          class={
            offset > 400 ? "bg-white px-2 sm:px-4 py-1 shadow-xl" : "px-2 py-2"
          }
        >
          <Container>
            <div class="flex flex-wrap justify-between items-center mx-auto">
              <Link legacyBehavior href="/">
                <a class="self-center text-3xl font-sans font-semibold whitespace-nowrap text-sky-400">
                  Delsha Group
                </a>
              </Link>
              <button
                data-collapse-toggle="navbar-multi-level"
                type="button"
                class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900"
                aria-controls="navbar-multi-level"
                aria-expanded="false"
                onClick={() => setOpenNav(!openNav)}
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                class={
                  openNav
                    ? " w-full md:block md:w-auto"
                    : "hidden w-full md:block md:w-auto"
                }
                id="navbar-multi-level"
              >
                <ul class="flex flex-col p-1 mt-4 md:flex-row md:space-x-5 lg:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                  <li>
                    <Link legacyBehavior href="/">
                      <a
                        class={
                          path === "/"
                            ? "block py-[2px] mb-1 text-black text-base border-b-2 border-sky-400"
                            : "block py-[2px] mb-1 text-black text-base"
                        }
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/trading">
                      <a
                        class={
                          path === "/trading"
                            ? "block py-[2px] mb-1 text-black text-base border-b-2 border-sky-400"
                            : "block py-[2px] mb-1 text-black text-base"
                        }
                      >
                        Trading
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Menu as="div" className="relative inline-block text-left">
                      <>
                        <Menu.Button
                          className={`flex items-center py-[2px] mb-1 text-black text-base ${
                            (path === "/services/information&technology" ||
                              path === "/services/marketing") &&
                            "border-b-2 border-sky-400"
                          }`}
                        >
                          Services
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 ml-1"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </Menu.Button>
                      </>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 -mx-24 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[100]">
                          <div className="px-1 py-1">
                            <Menu.Item>
                              <Link
                                href="/services/information&technology"
                                className={`${
                                  path === "/services/information&technology"
                                    ? "bg-gray-100"
                                    : "text-gray-900 hover:bg-gray-100 mb-1"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Information & Technology
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="/services/marketing"
                                className={`${
                                  path === "/services/marketing"
                                    ? "bg-gray-100"
                                    : "text-gray-900 hover:bg-gray-100"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Marketing
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="https://madhukaa.com/"
                                target="_blank"
                                className={`${
                                  path === "https://madhukaa.com/"
                                    ? "bg-gray-100"
                                    : "text-gray-900 hover:bg-gray-100"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Drone Manufacture
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="https://avaninepal.com/"
                                target="_blank"
                                className={`${
                                  path === "https://avaninepal.com/"
                                    ? "bg-gray-100"
                                    : "text-gray-900 hover:bg-gray-100"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Cosmetics
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="https://pacificeng.com.np/"
                                target="_blank"
                                className={`${
                                  path === "https://pacificeng.com.np/"
                                    ? "bg-gray-100"
                                    : "text-gray-900 hover:bg-gray-100"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Construction
                              </Link>
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </li>

                  <li>
                    <Link legacyBehavior href="/about">
                      <a
                        class={
                          path === "/about"
                            ? "block py-[2px] mb-1 text-black text-base border-b-2 border-sky-400"
                            : "block py-[2px] mb-1 text-black text-base"
                        }
                      >
                        About
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contact">
                      <a
                        class={
                          path === "/contact"
                            ? "block py-[2px] mb-1 text-black text-base border-b-2 border-sky-400"
                            : "block py-[2px] mb-1 text-black text-base"
                        }
                      >
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </nav>
      </div>
    </div>
  );
};

export default Header;
