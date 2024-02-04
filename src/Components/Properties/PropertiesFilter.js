
import { Form, Modal, Radio, Select, Tabs } from "antd";
import { PropertiesProcsClass } from "./Properties.procs";
import { PropertiesDummyData } from "../../PropertiesDummyData/PropertiesDummyData";
export const PropertiesFilter = ({ open, setModal, setImageSliderArray }) => {
	let _propertiesProcs;
	if (!_propertiesProcs) {
		_propertiesProcs = new PropertiesProcsClass();
	}
	const propertiesArray = _propertiesProcs.propertiesArr;
	const [form] = Form.useForm();
	const handleCreate = () => {
		let formValues = form.getFieldValue();
		formValues.location =
			formValues.location === undefined ? "0" : formValues.location;
		let propertiesArray = [];
		if (formValues.min_investment !== "") {
			if (formValues.min_investment === "low_to_high") {
				var ascending = PropertiesDummyData.sort(
					(a, b) =>
						Number(a.min_investment.replace("Lakhs", "").split(" ").join("")) -
						Number(b.min_investment.replace("Lakhs", "").split(" ").join(""))
				);
				propertiesArray = [...ascending];
			}
			if (formValues.min_investment === "high_to_low") {
				var descending = PropertiesDummyData.sort(
					(a, b) =>
						Number(b.min_investment.replace("Lakhs", "").split(" ").join("")) -
						Number(a.min_investment.replace("Lakhs", "").split(" ").join(""))
				);
				propertiesArray = [...descending];
			}
		}

		if (formValues.area !== "") {
			if (formValues.area === "low_to_high") {
				propertiesArray =
					propertiesArray.length > 0 ? propertiesArray : PropertiesDummyData;
				var ascending = propertiesArray.sort(
					(a, b) =>
						Number(a.min_area.match(/\d+/)[0]) -
						Number(b.min_area.match(/\d+/)[0])
				);
				propertiesArray = [...ascending];
			}
			if (formValues.area === "high_to_low") {
				propertiesArray =
					propertiesArray.length > 0 ? propertiesArray : PropertiesDummyData;
				var descending = propertiesArray.sort(
					(a, b) =>
						Number(b.min_area.match(/\d+/)[0]) -
						Number(a.min_area.match(/\d+/)[0])
				);
				propertiesArray = [...descending];
			}
		}

		if (formValues.location !== "") {
			propertiesArray =
				propertiesArray.length > 0 ? propertiesArray : PropertiesDummyData;
			let filteredProperty = propertiesArray.filter((ele) => {
				if (formValues.location === "0") {
					return ele.city === _propertiesProcs.propertiesArr[0];
				} else {
					return (
						ele.city ===
						_propertiesProcs.propertiesArr[Number(formValues.location) - 1]
					);
				}
			});
			propertiesArray = [...filteredProperty];
		}
		setImageSliderArray(propertiesArray);
		setModal(false);
	};

	return (
		<>
			<Modal
				style={{ height: "50%" }}
				title='Filter the properties'
				centered
				open={open}
				onOk={() => handleCreate()}
				onCancel={() => setModal(false)}
				width={400}>
				<hr style={{ fontSize: "14px" }}></hr>
				<Form form={form} layout='vertical'>
					<Form.Item name='min_investment' label='Min Investment'>
						<Select>
							<Select.Option value='low_to_high'>Low To High</Select.Option>
							<Select.Option value='high_to_low'>High To Low</Select.Option>
						</Select>
					</Form.Item>
					<Form.Item name='area' label='Area'>
						<Select>
							<Select.Option value='low_to_high'>Low To High</Select.Option>
							<Select.Option value='high_to_low'>High To Low</Select.Option>
						</Select>
					</Form.Item>

					<Form.Item name='location' label='Location'>
						<Tabs
							type='card'
							items={propertiesArray.map((item, i) => {
								const id = String(i + 1);
								return {
									label: `${item}`,
									key: id,
								};
							})}
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};
