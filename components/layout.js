import Topbar from "./topbar";

function Layout({ children }) {
  return (
    <>
      <Topbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
