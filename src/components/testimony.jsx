const Testimony = ({ user = "", testimony = "", pfp = "" }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col w-full lg:max-w-2xl mt-6 gap-4 duration-300 sm:hover:bg-zinc-800/50 sm:bg-zinc-800 rounded-lg p-4">
        <div className="flex sm:flex-row flex-col sm:m-0 mx-auto">
          <img
            src={pfp}
            alt=""
            className="rounded-full w-24 h-24 mt-4 sm:m-0 mx-auto"
          />
          <div className="sm:mt-10 mt-6 md:invisible text-bold text-2xl sm:ml-auto">
            {user}
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <span className="text-2xl">❝</span>
            {testimony}
            <span className="text-2xl">❞</span>
          </div>
          <div className="mt-3 md:flex hidden text-bold text-2xl">- {user}</div>
        </div>
      </div>
    </>
  );
};

export default Testimony;
