import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="mt-8 px-20">
        <div className="flex justify-between">
          <Link href="/">
            <h1 className="text-3xl font-bold cursor-pointer">AETB V2</h1>
          </Link>
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
    </>
  );
}

export default Navbar;
