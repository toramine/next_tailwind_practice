import Topbar from "./topbar";

function Layout({ children }) {
  return (
    <div className="h-[2000px]">
      <Topbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
