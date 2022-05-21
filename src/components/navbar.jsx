import Link from "next/link";
import { Fragment, useState } from "react";
import { Transition, Disclosure, Dialog } from "@headlessui/react";

function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="bg-zinc-800 h-16 p-4">
        <nav className="md:px-20 flex">
          <Link href="/">
            <h1 className="text-2xl font-bold cursor-pointer">AETB</h1>
          </Link>
          <div className="hidden md:flex gap-6 pr-16 ml-auto">
            <Link href="https://discord.gg/aetb">
              <button className="text-gray-400 text-sm font-bold active:scale-90 duration-300 hover:text-gray-500">
                Discord
              </button>
            </Link>
            <Link href="/changelog">
              <button className="text-gray-400 text-sm font-bold active:scale-90 duration-300 hover:text-gray-500">
                Changelogs
              </button>
            </Link>
            <button
              type="button"
              onClick={openModal}
              className="bg-blue-600 h-9 w-24 hover:bg-blue-700 p-1 text-sm font-semibold rounded transform active:scale-90 duration-300"
            >
              Buy Now
            </button>
          </div>
          <div className="text-white md:hidden absolute w-full flex right-0">
            {/* Mobile navigator */}
            <Disclosure className="z-40 flex" as="div">
              <div className="absolute right-0 mr-4">
                <Disclosure.Button className="z-40 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    className="h-5 w-5"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillrule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </Disclosure.Button>
              </div>
              <Transition
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-30"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Disclosure.Panel className="absolute mt-10 w-full bg-zinc-800 border-b-2 border-b-zinc-800 p-3">
                  <div className="flex flex-col gap-3 ml-3">
                    {" "}
                    <Link href="https://discord.gg/aetb">
                      <button className="text-gray-400 flex text-sm font-bold active:scale-90 duration-300 hover:text-gray-500">
                        Discord
                      </button>
                    </Link>
                    <Link href="/changelog">
                      <button className="text-gray-400 text-sm flex font-bold active:scale-90 duration-300 hover:text-gray-500">
                        Changelogs
                      </button>
                    </Link>
                    <button
                      type="button"
                      onClick={openModal}
                      className="bg-blue-600 h-8 font-semibold w-28 hover:bg-blue-700 text-sm rounded transform active:scale-90 duration-300"
                    >
                      Buy Now
                    </button>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          </div>
        </nav>
      </div>
      {/* Purchase Now modal */}
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-zinc-900 p-6 text-left align-middle shadow-2xl shadow-zinc-900/70 transition-all">
                    <div className="text-white">
                      <div className="flex justify-between">
                        <h1 className="text-white font-semibold text-2xl">AETB, Purchase</h1>
                        <button
                          className="text-white text-2xl bg-black bg-opacity-25 rounded-lg h-9 p-2 transform active:scale-90 duration-300 hover:bg-opacity-0"
                          onClick={closeModal}
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-lg text-gray-300">
                        AETB, Version 2 has now been released. You can purchase
                        it via the following methods.
                      </p>

                      <div className="pl-4 text-gray-300">
                        <li className="text-sm font-semibold">
                          $60 via paypal/BTC/ETH
                        </li>
                        <li className="text-sm font-semibold">
                          40k in roblox limited items.
                        </li>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm text-gray-300 font-bold">
                        Open a ticket in the discord before purchasing.
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex space-x-2">
                          <a
                            onClick={() =>
                              window.open(
                                "https://www.paypal.me/aequets",
                                "_blank"
                              )
                            }
                            className="bg-zinc-800 hover:bg-white text-white cursor-pointer h-9 p-2 rounded-lg transform active:scale-90 duration-300"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#2563EB"
                              className="h-6 w-6"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z" />
                            </svg>
                          </a>
                          <a
                            className="bg-zinc-800 hover:bg-white text-white h-9 p-2 cursor-pointer rounded-lg transform active:scale-90 duration-300"
                            onClick={() =>
                              window.open("https://aequet.fr", "_blank")
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#f2a900"
                              className="h-6  w-6"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z" />
                            </svg>
                          </a>
                        </div>
                        <button
                          onClick={() =>
                            window.open("https://discord.gg/aetb", "_blank")
                          }
                          type="button"
                          className="bg-indigo-600 text-white h-8 font-semibold text-sm w-24 hover:bg-indigo-700 rounded transform active:scale-90 duration-300"
                        >
                          Discord
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

export default Navbar;
