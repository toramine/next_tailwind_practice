function Topbar() {
  return (
    <div className="relative h-16 w-full  bg-blue-500">
      <div className="absolute inset-x-0 top-0 h-16 flex items-center text-gray-50">
        <div className="flex-1 ml-5">image</div>
        <h2 className="flex-1 mr-5 text-4xl">TopbarTitle</h2>
        <div className=" flex items-center justify-around">
          <div className="mr-5 hover:underline decoration-white cursor-pointer">
            title
          </div>
          <div className="mr-5 hover:underline decoration-white cursor-pointer">
            use frame
          </div>
          <div className="mr-5 hover:underline decoration-white cursor-pointer">
            form
          </div>
          <div className="mr-5 hover:underline decoration-white cursor-pointer">
            profile
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
