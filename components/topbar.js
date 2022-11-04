import Link from "next/link";
import { useRouter } from "next/router";

function Topbar() {
  const router = useRouter();
  return (
    <div className="sticky top-0 w-full  bg-blue-500 opacity-90 ">
      <div className="h-16 flex items-center text-white">
        <div className="flex-1 ml-5">image</div>
        <h2 className="flex-1 mr-5 text-4xl">TopbarTitle</h2>
        {/* pathによって表示を変える */}
        {router.pathname === "/" ? (
          <div className="flex items-center justify-around">
            <a href="#title">
              <div className="mr-5 hover:underline decoration-white cursor-pointer">
                タイトル
              </div>
            </a>
            <a href="#lang">
              <div className="mr-5 hover:underline decoration-white cursor-pointer">
                使用言語
              </div>
            </a>
            <a href="#form">
              <div className="mr-5 hover:underline decoration-white cursor-pointer">
                フォーム
              </div>
            </a>
            <Link href="/profile">
              <div className="mr-5 hover:underline decoration-white cursor-pointer">
                プロフィール
              </div>
            </Link>
          </div>
        ) : (
          <div>
            <Link href="/">
              <div className="flex-1 mr-5 hover:underline decoration-white cursor-pointer">
                ホーム
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Topbar;
