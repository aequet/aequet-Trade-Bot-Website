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
        <div className="lg:ml-32 pb-12 mt-6">
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
      </div>
    </>
  );
}
