
import images from "../../image/turkish-hotel.jpg";
import background from "../../image/background.jpg";
import growth from "../../image/growth.png";
import handshack from "../../image/handshack.png";
import investments from "../../image/investments.png";
import proprtys from "../../image/proprtys.png";
import "./investment.css";

export const Investment = () => {
	return (
		<>
			<section class='slider_section '>
				<div id='customCarousel1' class='carousel slide' data-ride='carousel'>
					<div class='carousel-inner'>
						<div class='carousel-item active'>
							<div class='container '>
								<div class='row'>
									<div class='col-md-6 '>
										<div class='detail-box'>
											<div class='row mb-2'>
												<div class='card discover'>
													<div class='card-body'>
														<h2 class='card-title text-white'>DISCOVER</h2>
														<p class='card-text'>Investment Opportunities</p>
														<a href='#' class='btn btn-warning mt-4'>
															CLICK HERE
														</a>
													</div>
												</div>
											</div>
											<div class='card img-slider'>
												<div class='card-body'>
													<div class='row'>
														<div class='col-sm'>
															<figure class='figure'>
																<img
																	src={growth}
																	class='figure-img img-fluid rounded'
																/>
																<figcaption class='figure-caption'>
																	GROWTH
																</figcaption>
															</figure>
														</div>
														<div class='col-sm'>
															{" "}
															<figure class='figure'>
																<img
																	src={handshack}
																	class='figure-img img-fluid rounded'
																/>
																<figcaption class='figure-caption'>
																	INVESTMENT
																</figcaption>
															</figure>
														</div>
														<div class='col-sm'>
															{" "}
															<figure class='figure'>
																<img
																	src={investments}
																	class='figure-img img-fluid rounded'
																/>
																<figcaption class='figure-caption'>
																	PROPERTY
																</figcaption>
															</figure>
														</div>
														<div class='col-sm'>
															{" "}
															<figure class='figure'>
																<img
																	src={proprtys}
																	class='figure-img img-fluid rounded'
																/>
																<figcaption class='figure-caption'>
																	ASSISTANCE
																</figcaption>
															</figure>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class='col-md-6'>
										<div class='img-box'>
											<img src={images} alt='' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
