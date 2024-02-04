
import "./Header.css";

import { Properties } from "../Properties/Properties";
import { Link } from "react-router-dom";
import background from "../../image/background.jpg";

function Header() {
	return (
		<>
			<section className='info_section'>
				<div className='hero_area'>
					<header className='header_section'>
						<div className='container-fluid'>
							<nav className='navbar navbar-expand-lg custom_nav-container '>
								<a className='navbar-brand' href=''>
									<span>LOGO</span>
								</a>

								<button
									className='navbar-toggler'
									type='button'
									data-toggle='collapse'
									data-target='#navbarSupportedContent'
									aria-controls='navbarSupportedContent'
									aria-expanded='false'
									aria-label='Toggle navigation'>
									<span className=''> </span>
								</button>

								<div
									className='collapse navbar-collapse'
									id='navbarSupportedContent'>
									<ul className='navbar-nav  '>
										<li className='nav-item active'>
											<a className='nav-link' href='/'>
												Home <span className='sr-only'>(current)</span>
											</a>
										</li>
										<li className='nav-item'>
											<a className='nav-link' href='/about'>
												{" "}
												About
											</a>
										</li>
										<li className='nav-item'>
											<a className='nav-link' href='/properties'>
												Properties
											</a>
										</li>

										<li className='nav-item'>
											<a className='nav-link' href='/contactUs'>
												Contact
											</a>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</header>
				</div>
			</section>
		</>
	);
}
export default Header;
