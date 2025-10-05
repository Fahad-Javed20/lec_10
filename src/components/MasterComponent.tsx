import Article from "./Article";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";

export default function MasterComponent() {
  return (
    <div >

      <div >
        <Header />
        <Navbar />
      </div>


      <div>
        <Section />
        <Article />
        <Aside />
      </div>


      <div>
        <Footer />
      </div>

    </div>
  );
}
