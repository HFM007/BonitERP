import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <div>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}