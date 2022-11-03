import Topbar from "./topbar";

function Layout({ children }) {
  return (
    <div className="h-full">
      <Topbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
