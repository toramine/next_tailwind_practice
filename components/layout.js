import Bottom from "./bottom";
import Topbar from "./topbar";

function Layout({ children }) {
  return (
    <div className="h-full">
      <Topbar />
      <main>{children}</main>
      <Bottom />
    </div>
  );
}

export default Layout;
