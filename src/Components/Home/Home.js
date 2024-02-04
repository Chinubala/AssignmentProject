
import Header from "../Header/Header";
import { AboutUs } from "../AboutUs/AboutUs";
import { Footer } from "../Footer/Footer";
import { Investment } from "../Investment/Investment";
import { PropertiesImageSlider } from "../PropertiesImageSlider/PropertiesImageSlider";
import {ContactUs} from "../ContactUs/ContactUs.js";
import "../../App.css";

export const Home = () => {
	return (
		<>
			<div className='App'>
				<Investment />
				<AboutUs />
				<PropertiesImageSlider />
				<ContactUs />
			</div>
		</>
	);
};
