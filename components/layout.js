import Topbar from "./topbar";

function Layout({ children }) {
  return (
    <html class="bg-slate-200">
      <body>
        <Topbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default Layout;
