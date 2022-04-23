import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="px-20">
        <nav className="mt-8">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">AETB V2</h1>
            <div className="hidden gap-6 pr-32 md:flex">
              <Link href="https://discord.gg/aetb">
                <button className="text-gray-400 text-lg font-bold active:scale-90 duration-300 hover:text-gray-500">
                  Discord
                </button>
              </Link>
              <Link href="/changelog">
                <button className="text-gray-400 text-lg font-bold active:scale-90 duration-300 hover:text-gray-500">
                  Changelogs
                </button>
              </Link>
              <Link href="">
                <button className="bg-blue-600 w-24 hover:bg-blue-700 h-9 p-2 rounded transform active:scale-90 duration-300">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="lg:ml-32 mt-24">
          <div className="prose text-white">
            <h1 className="text-white">Background</h1>
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
              We accept payments via Paypal, Robux, Crypto and various other
              ways.
            </p>
          </div>
        </div>
        <div className="mt-14 flex">
          <div className="ml-auto mr-14">
            <div className="prose text-white">
              <h1 className="text-white">Easily Accessible</h1>
              <p>
                AETB is easily accessible to all users, you can use it on your
                own device or even set it up on VPS if you wanted to!
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
              server, it can also alert you on new deals and much more, you can
              even use the help command which will allow you to view a plethora
              of commands to use.
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
