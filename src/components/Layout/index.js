import "./index.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Slider from "../Slider";

const Layout = ({ children, slides = null }) => {
  return (
    <>
      <Navbar />
      {slides && <Slider images={slides} />}

      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
