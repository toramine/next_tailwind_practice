function Topbar() {
  return (
    <div class="relative h-16 w-full  bg-blue-500">
      <div class="absolute inset-x-0 top-0 h-16 flex items-center text-gray-50">
        <div class="flex-1 ml-5">image</div>
        <h2 class="flex-1 mr-5 text-4xl">TopbarTitle</h2>
        <div class=" flex items-center justify-around">
          <div class="mr-5 hover:underline decoration-sky-500 cursor-pointer">
            title
          </div>
          <div class="mr-5 hover:underline decoration-sky-500 cursor-pointer">
            use frame
          </div>
          <div class="mr-5 hover:underline decoration-sky-500 cursor-pointer">
            form
          </div>
          <div class="mr-5 cursor-pointer">profile</div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
