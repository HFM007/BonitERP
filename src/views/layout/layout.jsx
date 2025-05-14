import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <Header className="w-full" />
      {/* <div className="flex flex-1 overflow-hidden">
        <Sidebar className="w-64 bg-base-300" />
      </div> */}
        <main className="flex-1 p-4 bg-base-100 overflow-auto">
          {children}
        </main>
      <Footer className="w-full" />
    </div>
  );
}