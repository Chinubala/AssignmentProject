
import "./App.css";
import Header from "./Components/Header/Header";
import { AboutUs } from "./Components/AboutUs/AboutUs";

import { Footer } from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Properties } from "./Components/Properties/Properties";
import { Home } from "./Components/Home/Home";
import { Investment } from "./Components/Investment/Investment";
import { ContactUs } from "./Components/ContactUs/ContactUs";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/about' element={<AboutUs />} />
				<Route exact path='/properties' element={<Properties />} />
				<Route exact path='/contactUs' element={<ContactUs />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
