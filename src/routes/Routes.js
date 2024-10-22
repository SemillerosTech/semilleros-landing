import { Route, Routes } from "react-router-dom";
import Homepage from "../views/homepage/Homepage";
import Contact from "../views/contact/Contact";
import AboutUs from "../views/nosotros/AboutUs";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/nosotros" element={<AboutUs />} />
		</Routes>
	);
};

export default RoutesApp;
