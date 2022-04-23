import Link from "next/link";

export default function Terms() {
  return (
    <>
      <nav className="mt-8 px-20">
        <div className="flex justify-between">
          <Link href="/">
            <h1 className="text-3xl cursor-pointer font-bold">AETB V2</h1>
          </Link>
          <div className=" gap-6  flex">
            <Link href="/">
              <button className="text-gray-400 text-lg font-bold active:scale-90 duration-300 hover:text-gray-500">
                Home
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="mt-14 flex flex-col place-items-center p-6">
        <div className="w-full max-w-5xl rounded-lg  text-white">
          <h2 className="text-3xl font-bold">Changelog - V2.0.0</h2>
        </div>
        <div className="max-w-5xl mt-6">
          <span className="font-medium text-snow-200 ">
            Fixes and Changes to AETB.
          </span>
          <div className="ml-8 mt-3 mb-5">
            <li>Rap/Value Ratios</li>
            <li>Unratelimited Completed Checker</li>
            <li>Completeds Scraping</li>
            <li>Fail Traders Database</li>
            <li>Delete Roblox Trade messages (optional);</li>
            <li>Cached queue</li>
            <li>
              Send a trade to someone who declined it, not the same trade as
              before (Config option: Send New Trade enabled)
            </li>
            <li>RBX FLIP Auto giveaway joiner</li>
            <li>
              UAID Do not trade ( &#123; "uaid":"itemid", "uaid":"itemid" &#125;
              )
            </li>
            <li>
              {" "}
              New discord commands (run ./cmds or ./help for a list of commands)
            </li>
            <li>Discord Scraping</li>
            <li>
              milliseconds between finding trades (If you have a slow wifi, set
              it between 100-500, if you have a fast wifi, set it to 25-100)
            </li>
            <li>
              $stats command you can run in aetb server to get all stats from
              aequet trade bot v2 or higher versions
            </li>
            <li>Fixed Owned projected ratio</li>
            <li>Fixed projected detection</li>
            <li>Fixed Stay online feature</li>
            <li>
              Send Different Trades config option, if this is enabled, it will
              always send a different trade to the same user
            </li>
            <li>Fixed ip lock bypass</li>
            <li>New custom values format</li>
            <li>
              {" "}
              "item id":"+value you want to add" "item id":"-value you want to
              substract" "item id":"fixed value" (Notes: add a + to the
              beginning of the value to add, add a - to remove, or just type the
              fixed value without any + or -)
            </li>
            <li>Better console</li>
            <li>
              Custom Console Colors, (Notes: the format of the colors are RGB
              values, in an array [r, g, b]).
            </li>
          </div>
          <div className="text-red-300">
            INFO: - You have to upgrade your NodeJS Version to the latest
            version if you want AETB V2 to work, the reason why you need to do
            this is because I upgraded the Discord.js module which requires
            nodejs 16.4 or higher
          </div>
        </div>
      </div>
    </>
  );
}
