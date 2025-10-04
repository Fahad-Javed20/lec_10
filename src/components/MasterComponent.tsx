import Article from "./Article";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";


export default function MasterComponent() {
  return (
    <div>
        < Header/>
        <Navbar/>
        <Section/>
        <Article/>
        <Aside/>
        <Footer/>
    </div>
  )
}
