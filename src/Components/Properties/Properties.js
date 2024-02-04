
import React, { useState } from "react";
import { PropertiesDummyData } from "../../PropertiesDummyData/PropertiesDummyData";
import { Row, Col, Button } from "antd";
import { Card } from "antd";
import "./Properties.css";
import { CaretLeftOutlined } from "@ant-design/icons";
import { PropertiesFilter } from "./PropertiesFilter";

export const Properties = () => {
	const [propertiesDummyDataArray, setPropertiesDummyDataArray] = useState([
		...PropertiesDummyData,
	]);
	const [open, setOpen] = useState(false);

	const callImageSlider = (items) => {
		setPropertiesDummyDataArray([...items]);
	};
	console.log("hiii9090", propertiesDummyDataArray);
	return (
		<>
			<section className='properties-bg'>
				<Row className='properties-label text-warning'>
					<Col span={12}>
						<CaretLeftOutlined />
						Properties
					</Col>
					<Col span={12}>
						<Button
							type='primary'
							onClick={() => {
								setOpen(true);
								setPropertiesDummyDataArray([...PropertiesDummyData]);
							}}>
							Filter
						</Button>
					</Col>
				</Row>
				<div className='images-grid'>
					<Row>
						{propertiesDummyDataArray.map((item) => {
							return (
								<Col style={{ padding: "10px" }} span={8}>
									<Card
										hoverable
										style={{ width: "240PX", height: "300px" }}
										cover={<img src={item.image} />}>
										<div>
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
					</Row>
				</div>

				{open && (
					<PropertiesFilter
						open={open}
						setModal={() => setOpen(false)}
						setImageSliderArray={(item) => callImageSlider(item)}
					/>
				)}
			</section>
		</>
	);
};
