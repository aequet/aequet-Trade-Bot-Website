export default function error() {
  return (
    <>
      <div className="flex h-screen items-center justify-center	p-4 text-white">
        <div className="rounded-lg bg-polar-200 p-6 text-center">
          <h1 className="text-left text-3xl font-bold">404 - Not found</h1>
          <p className=" text-left text-gray-300">
            It seems like the page you are looking for does not exist.
          </p>
          <div className="text-left">
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-blue-600 mt-3 w-24 hover:bg-blue-700 h-9 p-2 rounded transform active:scale-90 duration-300"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
