
import { Card, Col, Row } from "antd";
import { PropertiesDummyData } from "../../PropertiesDummyData/PropertiesDummyData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PropertiesImageSlider.css";
import { CaretLeftOutlined } from "@ant-design/icons";


export const PropertiesImageSlider = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<>
				            <section className="properties-bg">
								<h1 className="text-warning text-uppercase mb-4"><CaretLeftOutlined />Properties</h1>

			<div className='slider-image'>
				<Carousel responsive={responsive}>
					{PropertiesDummyData.map((item) => {
						return (
							<Col>
								<Card
									hoverable
									style={{ width: "240PX", height: "300px" }}
									cover={<img src={item.image} />}>
									<div className='slider-content'>
										<Row>
											<Col span={12}>
												<p>{item.min_investment}</p>
												<p>Min Investment</p>
											</Col>
											<Col span={12}>
												<p>{item.min_area}</p>
												<p>Min Area</p>
											</Col>
										</Row>
										<Row style={{ paddingTop: "0.5rem" }}>
											<Col span={12}>
												<p>{item.rental_yield}</p>
												<p>Rental Yield</p>
											</Col>
											<Col span={12}>
												<p>{item.location}</p>
												<p>location</p>
											</Col>
										</Row>
										<div>
											<p style={{ textAlign: "right", paddingTop: "10px" }}>
												Contact
											</p>
										</div>
									</div>
								</Card>
							</Col>
						);
					})}
				</Carousel>
			</div>
			</section>
		</>
	);
};
