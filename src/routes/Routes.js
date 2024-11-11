import { Route, Routes } from "react-router-dom";
import Homepage from "../views/homepage/Homepage";
import Contact from "../views/contact/Contact";
import AboutUs from "../views/nosotros/AboutUs";
import HomepageEng from "../views/homepageEng/HomepageEng";
import AboutUsEng from "../views/nosotros/AboutUsEng";
import ContactEng from "../views/contact/ContactEng";

const RoutesApp = () => {
  return (
    <Routes>
      {/*Spanish */}
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/nosotros" element={<AboutUs />} />
      {/*English */}
      <Route path="/en" element={<HomepageEng />} />
      <Route path="/contact-en" element={<ContactEng />} />
      <Route path="/about-en" element={<AboutUsEng />} />
    </Routes>
  );
};

export default RoutesApp;
