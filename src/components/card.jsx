const card = ({ user = "", status = "", role = "", pfp = "" }) => {
  return (
    <>
      <div>
        <div className="mx-auto text-center text-3xl mt-8 bg-zinc-800 rounded p-2 max-w-xs">
          {status}
        </div>
        <div className="mt-3 bg-zinc-800 rounded-lg max-w-xs hover:bg-zinc-700 duration-200 shadow-xl mx-auto">
          <img
            src={pfp}
            alt=""
            className="rounded-t-lg h-56 w-full border-b-2"
          />
          <div className="p-4">
            <p className="font-semibold text-xl">{user}</p>
            <div className="text-gray-300 mt-2">{role}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
