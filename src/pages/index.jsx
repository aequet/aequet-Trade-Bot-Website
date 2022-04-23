import Link from "next/link";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-20">
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
            <Link href="">
              <button className="bg-blue-600 mt-3 h-9 w-24 hover:bg-blue-700 p-2 rounded transform active:scale-90 duration-300">
                Buy Now
              </button>
            </Link>
            <p className="mt-5 md:ml-4 text-gray-300">
              We accept payments via Paypal, Robux and Crypto.
            </p>
          </div>
        </div>
        <div className="mt-14 flex">
          <div className="ml-auto mr-14">
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
              <div className="flex md:flex-row flex-col w-full lg:max-w-2xl mt-6 gap-4 bg-zinc-800 rounded p-4">
                <div className="flex sm:flex-row flex-col sm:m-0 mx-auto">
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75bff394-4f86-45a8-a923-e26223aa74cb/de901o7-d61b3bfb-f1b1-453b-8268-9200130bbc65.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1YmZmMzk0LTRmODYtNDVhOC1hOTIzLWUyNjIyM2FhNzRjYlwvZGU5MDFvNy1kNjFiM2JmYi1mMWIxLTQ1M2ItODI2OC05MjAwMTMwYmJjNjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aEck9OnRf_XJzrEzZNvrGS2XpAlo2ixuxoAX5fgpNnw"
                    alt=""
                    className="rounded-full w-24 h-24 mt-4 sm:m-0 mx-auto"
                  />
                  <div className="sm:mt-10 mt-6 md:invisible text-bold text-2xl sm:ml-auto">
                    NahSahh
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-2xl">❝</span> Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Inventore error adipisci,
                    quaerat provident minus quasi repellat eaque voluptate
                    veniam? Doloribus accusantium ex ducimus delectus, ipsam
                    sunt commodi consectetur veniam modi.{" "}
                    <span className="text-2xl">❞</span>
                  </div>
                  <div className="mt-3 md:flex hidden text-bold text-2xl">
                    - NahSahh
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col w-full lg:max-w-2xl mt-6 gap-4 bg-zinc-800 rounded p-4">
                <div className="flex sm:flex-row flex-col sm:m-0 mx-auto">
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75bff394-4f86-45a8-a923-e26223aa74cb/de901o7-d61b3bfb-f1b1-453b-8268-9200130bbc65.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1YmZmMzk0LTRmODYtNDVhOC1hOTIzLWUyNjIyM2FhNzRjYlwvZGU5MDFvNy1kNjFiM2JmYi1mMWIxLTQ1M2ItODI2OC05MjAwMTMwYmJjNjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aEck9OnRf_XJzrEzZNvrGS2XpAlo2ixuxoAX5fgpNnw"
                    alt=""
                    className="rounded-full w-24 h-24 mt-4 sm:m-0 mx-auto"
                  />
                  <div className="sm:mt-10 mt-6 md:invisible text-bold text-2xl sm:ml-auto">
                    NahSahh
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-2xl">❝</span> Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Inventore error adipisci,
                    quaerat provident minus quasi repellat eaque voluptate
                    veniam? Doloribus accusantium ex ducimus delectus, ipsam
                    sunt commodi consectetur veniam modi.{" "}
                    <span className="text-2xl">❞</span>
                  </div>
                  <div className="mt-3 md:flex hidden text-bold text-2xl">
                    - NahSahh
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col w-full lg:max-w-2xl mt-6 gap-4 bg-zinc-800 rounded p-4">
                <div className="flex sm:flex-row flex-col sm:m-0 mx-auto">
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75bff394-4f86-45a8-a923-e26223aa74cb/de901o7-d61b3bfb-f1b1-453b-8268-9200130bbc65.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1YmZmMzk0LTRmODYtNDVhOC1hOTIzLWUyNjIyM2FhNzRjYlwvZGU5MDFvNy1kNjFiM2JmYi1mMWIxLTQ1M2ItODI2OC05MjAwMTMwYmJjNjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aEck9OnRf_XJzrEzZNvrGS2XpAlo2ixuxoAX5fgpNnw"
                    alt=""
                    className="rounded-full w-24 h-24 mt-4 sm:m-0 mx-auto"
                  />
                  <div className="sm:mt-10 mt-6 md:invisible text-bold text-2xl sm:ml-auto">
                    NahSahh
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="text-2xl">❝</span> Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Inventore error adipisci,
                    quaerat provident minus quasi repellat eaque voluptate
                    veniam? Doloribus accusantium ex ducimus delectus, ipsam
                    sunt commodi consectetur veniam modi.{" "}
                    <span className="text-2xl">❞</span>
                  </div>
                  <div className="mt-3 md:flex hidden text-bold text-2xl">
                    - NahSahh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
