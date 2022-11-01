function Topbar() {
  return (
    <div className="sticky top-0 w-full  bg-blue-500 opacity-90 ">
      <div className="h-16 flex items-center text-white">
        <div className="flex-1 ml-5">image</div>
        <h2 className="flex-1 mr-5 text-4xl">TopbarTitle</h2>
        <div className="flex items-center justify-around">
          <div className="mr-5 hover:underline decoration-white cursor-pointer">
            タイトル
          </div>
          <div className="mr-5 hover:underline decoration-white cursor-pointer">
            使用言語
          </div>
          <div className="mr-5 hover:underline decoration-white cursor-pointer">
            フォーム
          </div>
          <div className="mr-5 hover:underline decoration-white cursor-pointer">
            プロフィール
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
