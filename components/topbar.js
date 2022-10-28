function Topbar() {
  return (
    <div class="relative h-16 w-full  bg-slate-500">
      <div class="absolute inset-x-0 top-0 h-16 flex items-center justify-around  text-gray-50">
        <div>image</div>
        <h2>Topbar</h2>
        <div class="flex items-center justify-around">
          <div class="mr-5 hover:underline decoration-sky-500 cursor-pointer">
            title
          </div>
          <div class="mr-5 hover:underline decoration-sky-500 cursor-pointer">
            use frame
          </div>
          <div class="mr-5 hover:underline decoration-sky-500 cursor-pointer">
            form
          </div>
          <div class="ml-5 cursor-pointer">profile</div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
