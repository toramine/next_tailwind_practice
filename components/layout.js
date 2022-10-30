import Topbar from "./topbar";

function Layout({ children }) {
  return (
    <div className="bg-slate-200">
      <Topbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
