import Card from "../components/card";
import Navbar from "../components/navbar";
import { Fragment, useState } from "react";
import Testimony from "../components/testimony";
import { Dialog, Transition } from "@headlessui/react";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Navbar />
      <div className="md:px-20 px-6">
        <div className="lg:ml-32 mt-24">
          <div className="prose text-white">
            <h1 className="text-white">About Aetb</h1>
            <p>
              AETB is a newly developed Roblox trading bot, using AETB you can
              send multiple trades with quick succession, AETB will send
              strategised trades to users across the Roblox platform.
            </p>
          </div>
          <div className="flex md:flex-row flex-col">
            <button
              type="button"
              onClick={openModal}
              className="bg-blue-600 mt-3 h-9 w-24 hover:bg-blue-700 p-2 rounded transform active:scale-90 duration-300"
            >
              Buy Now
            </button>
            <p className="mt-5 md:ml-4 text-gray-300">
              We accept payments via Paypal, Robux and Crypto.
            </p>
          </div>
        </div>
        <div className="mt-14 flex">
          <div className="ml-auto md:mr-14">
            <div className="prose text-white">
              <h1 className="text-white">Easily Accessible</h1>
              <p>
                AETB is easily accessible to all users, you can use it on your
                own device or even set it up on a VPS if you wanted to.
              </p>
            </div>
            <img
              className="rounded hover:scale-110 duration-150 mt-4 object-cover max-w-lg w-full"
              src="/V2.png"
              alt=""
            />
          </div>
        </div>
        <div className="lg:ml-32 mt-14">
          <div className="prose text-white">
            <h1 className="text-white">Discord Integration</h1>
            <p>
              AETB is able to alert you when a trade has been completed, sent or
              received. This is done by using a Discord bot in your own personal
              server, it also notifies you on new roblox deals, you can even use
              the help command which will present you with a plethora of
              commands to use.
            </p>
          </div>
          <img
            className="rounded hover:scale-110 duration-150 mt-4 object-cover max-w-lg w-full"
            src="/Discord.png"
            alt=""
          />
        </div>
        <div className="flex pb-12 mt-24 border-t-2 border-t-zinc-800">
          <div className="mt-8">
            <h1 className="text-3xl font-bold">Our buyers say</h1>
            <div className="text-white md:flex flex-col gap-4 lg:flex-row">
              <Testimony
                pfp="https://cdn.discordapp.com/emojis/689856270269808664.gif?size=96&quality=lossless"
                user="NahSahh"
                testimony="Aequet trade bot is a popular trade bot rising in popularity and i have been using it for a while now and would recommend it to anyone getting into roblox trade botting as the discord is friendly as well as many helpers who love to provide their knowledge to help you get started."
              />
              <Testimony
                pfp="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75bff394-4f86-45a8-a923-e26223aa74cb/de901o7-d61b3bfb-f1b1-453b-8268-9200130bbc65.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1YmZmMzk0LTRmODYtNDVhOC1hOTIzLWUyNjIyM2FhNzRjYlwvZGU5MDFvNy1kNjFiM2JmYi1mMWIxLTQ1M2ItODI2OC05MjAwMTMwYmJjNjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aEck9OnRf_XJzrEzZNvrGS2XpAlo2ixuxoAX5fgpNnw"
                user="placeholder"
                testimony="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore error adipisci, quaerat provident minus quasi repellat eaque voluptate veniam? Doloribus accusantium ex ducimus delectus, ipsam sunt commodi consectetur veniam modi."
              />
              <Testimony
                pfp="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75bff394-4f86-45a8-a923-e26223aa74cb/de901o7-d61b3bfb-f1b1-453b-8268-9200130bbc65.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1YmZmMzk0LTRmODYtNDVhOC1hOTIzLWUyNjIyM2FhNzRjYlwvZGU5MDFvNy1kNjFiM2JmYi1mMWIxLTQ1M2ItODI2OC05MjAwMTMwYmJjNjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aEck9OnRf_XJzrEzZNvrGS2XpAlo2ixuxoAX5fgpNnw"
                user="Placeholder"
                testimony="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore error adipisci, quaerat provident minus quasi repellat eaque voluptate veniam? Doloribus accusantium ex ducimus delectus, ipsam sunt commodi consectetur veniam modi."
              />
            </div>
            <div className="flex justify-center gap-8 mt-24">
              <Card
                pfp="https://cdn.discordapp.com/emojis/689856270269808664.gif?size=96&quality=lossless"
                status="Contributor"
                role="Lorem ipsum dipsum dolor sit"
                user="Lorem"
              />
              <Card
                pfp="https://cdn.discordapp.com/avatars/587698762470916096/fb2cd750e86ce0783875509eff8fd02a.webp"
                status="Developer"
                role="Founder & developer of Aetb"
                user="Aequet"
              />
              <Card
                pfp="https://cdn.discordapp.com/emojis/689856270269808664.gif?size=96&quality=lossless"
                status="Contributor"
                role="Lorem ipsum dipsum dolor sit"
                user="Lorem"
              />
            </div>
          </div>
        </div>
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
                  <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-xl bg-zinc-900 p-6 text-left align-middle shadow-xl transition-all">
                    <div className="prose text-white">
                      <div className="flex justify-between">
                        <h1 className="text-white text-2xl">AETB, Purchase</h1>
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
                      <p className="text-lg text-white  -mt-3">
                        AETB, Version 2 has now been released. You can purchase
                        it via the following methods.
                      </p>

                      <div className="pl-4">
                        <li className="text-sm text-gray-200 font-semibold">
                          $60 via paypal/BTC/ETH
                        </li>
                        <li className="text-sm text-gray-200 font-semibold">
                          40k in roblox limited items.
                        </li>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm text-gray-200 font-bold">
                        Open a ticket in the discord before purchasing.
                      </p>
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <a
                            onClick={() =>
                              window.open(
                                "https://www.paypal.me/aequets",
                                "_blank"
                              )
                            }
                            className="bg-white text-white cursor-pointer mt-3 h-9 p-2 rounded-lg transform active:scale-90 duration-300"
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
                            className="bg-white text-white mt-3 h-9 p-2 cursor-pointer rounded-lg transform active:scale-90 duration-300"
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
                          className="bg-indigo-600 text-white mt-3 h-9 w-24 hover:bg-indigo-700 p-2 rounded-lg transform active:scale-90 duration-300"
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
