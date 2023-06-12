import React, { useEffect, useState } from "react";
import { TfiHelpAlt } from "react-icons/tfi";
import { BsSortAlphaDown, BsCalendarDate } from "react-icons/bs";
import { AiOutlineReload, AiOutlineSearch } from "react-icons/ai";
import { SortAlphabetically, SortByDate } from "../utils";
import { dataType } from "../utils/types/types";
import { Link } from "react-router-dom";
import "../App.css";
import {
	Checkbox,
	Overlay,
	ClientePresupuesto,
	Filtro,
	// Searcher,
} from "../components";
import { checkboxData } from "../constants";
import {
	Container,
	ButtonContainer,
	CheckboxContainer,
	Input,
	OptionContainer,
	WebsiteContainer,
	PresupostContainer,
	BoxContainer,
	FiltrosContainer,
} from "../utils";

function Presupuesto() {
	const [total, setTotal] = useState<number>(0);
	const [isCheckedState, setIsCheckedState] = useState<boolean[]>(
		new Array(checkboxData.length).fill(false)
	);
	const [totalPages, setTotalPages] = useState<number>(1);
	const [totalLanguages, setTotalLanguages] = useState<number>(1);

	//modal helper state
	const [toggleModal, setToggleModal] = useState<boolean>(false);
	const [modalText, setModalText] = useState<string>("");

	const [nombreCliente, setNombreCliente] = useState<string>("");
	const [nombrePresupuesto, setNombrePresupuesto] = useState<string>("");

	//array de data
	const [presupuesto, setPresupuesto] = useState<dataType[]>([] as dataType[]);
	const [presuCopy, setPresuCopy] = useState(presupuesto);
	const [sorted, setSorted] = useState<boolean>(true);
	const [search, setSearch] = useState<string>("");
	const date = new Date();

	const handleOnSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
		e.preventDefault();
		const setData: dataType = {
			pages: totalPages,
			languages: totalLanguages,
			total: total,
			date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
			clienteNombre: nombreCliente,
			presupuestoNombre: nombrePresupuesto,
			servicios: [],
		};

		setData.servicios = isCheckedState
			.map((isChecked, index) => (isChecked ? checkboxData[index].id : null))
			.filter((id) => id !== null) as string[];

		setPresupuesto((prevPresupuesto) => [...prevPresupuesto, setData]);
		setPresuCopy((prevPresuCopy) => [...prevPresuCopy, setData]);
	};

	const handlerOnChange = (itemPosition: number) => {
		const updateCheckedState = isCheckedState.map((item, index) =>
			index === itemPosition ? !item : item
		);
		setIsCheckedState(updateCheckedState);
	};

	const onPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const pages = Number(e.target.value);
		setTotalPages(pages);
	};

	const onLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const languages = Number(e.target.value);
		setTotalLanguages(languages);
	};

	const totalWebsite = (pages: number, languages: number) => {
		return pages * languages * 30;
	};

	const handleSort = () => {
		const sortAlphabetically = SortAlphabetically(presupuesto, sorted);
		setPresuCopy(sortAlphabetically);
		setSorted(!sorted);
	};

	const handleDate = () => {
		const sortByDate = SortByDate(presupuesto, sorted);
		setPresuCopy(sortByDate);
		setSorted(!sorted);
	};
	const handleReset = () => {
		setPresuCopy(presupuesto);
	};
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const filterData = presupuesto.filter((item) => {
			return item.clienteNombre
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
		});
		console.log(filterData);

		setSearch(e.target.value);
		setPresuCopy(filterData);
	};

	//TotalPrice logic
	useEffect(() => {
		let totalPrice = 0;
		isCheckedState.forEach((checked, index) => {
			if (checked) {
				totalPrice += checkboxData[index].price;
			}
		});

		let extraPrice = 0;
		if (
			isCheckedState[checkboxData.findIndex((item) => item.id === "Website")]
		) {
			extraPrice = totalWebsite(totalPages, totalLanguages);
		}
		const globalTotal = totalPrice + extraPrice;
		setTotal(globalTotal);
	}, [isCheckedState, totalPages, totalLanguages]);

	//getItem LOCALSTORAGE
	useEffect(() => {
		const getState = window.localStorage.getItem("isCheckedState");
		const getPages = window.localStorage.getItem("pagesState");
		const getLanguages = window.localStorage.getItem("languagesState");
		const getPresupuesto = window.localStorage.getItem("presupuestoArray");
		const getPresuCopy = window.localStorage.getItem("presupuestoCopyArray");

		if (getState !== null) setIsCheckedState(JSON.parse(getState));
		if (getPages !== null) setTotalPages(JSON.parse(getPages));
		if (getLanguages !== null) setTotalLanguages(JSON.parse(getLanguages));
		if (getPresupuesto !== null) setPresupuesto(JSON.parse(getPresupuesto));
		if (getPresuCopy !== null) setPresuCopy(JSON.parse(getPresuCopy));
		// setPresuCopy(presupuesto);
	}, []);

	// ============== LOCALsTORAGE ===============================
	useEffect(() => {
		window.localStorage.setItem(
			"isCheckedState",
			JSON.stringify(isCheckedState)
		);
		window.localStorage.setItem("pagesState", JSON.stringify(totalPages));
		window.localStorage.setItem(
			"languagesState",
			JSON.stringify(totalLanguages)
		);
		window.localStorage.setItem(
			"presupuestoCopyArray",
			JSON.stringify(presuCopy)
		);
		window.localStorage.setItem(
			"presupuestoArray",
			JSON.stringify(presupuesto)
		);
		console.log("presupuesto", presupuesto);
		console.log("presupuestoCopy", presuCopy);
	}, [isCheckedState, totalPages, totalLanguages, presupuesto, presuCopy]);

	return (
		<Container>
			<BoxContainer>
				<CheckboxContainer>
					<h1>Qué quieres hacer?</h1>
					{checkboxData.map((item, index) => (
						<React.Fragment key={index}>
							<Checkbox
								text={item.text}
								price={item.price}
								isChecked={isCheckedState[index]}
								onChange={() => handlerOnChange(index)}
								id={item.id}
							/>

							{item.id === "Website" && isCheckedState[index] && (
								<WebsiteContainer className="scale-in-ver-center">
									<OptionContainer>
										<p style={{ marginRight: "8px" }}>Número de páginas</p>
										<ButtonContainer
											type="button"
											onClick={() => {
												if (totalPages > 1) setTotalPages(totalPages - 1);
											}}
										>
											-
										</ButtonContainer>
										<Input
											type="text"
											value={totalPages}
											onChange={onPageChange}
											min="1"
										/>
										<ButtonContainer
											type="button"
											onClick={() => {
												if (totalPages >= 0) setTotalPages(totalPages + 1);
											}}
										>
											+
										</ButtonContainer>
										<TfiHelpAlt
											style={{ fontSize: "1.5rem", cursor: "pointer" }}
											onClick={() => {
												setToggleModal(!toggleModal);
												setModalText(
													"El número de páginas que tendrá la página web"
												);
											}}
										/>
									</OptionContainer>
									<OptionContainer>
										<p style={{ marginRight: "8px" }}>Número de idiomas</p>
										<ButtonContainer
											type="button"
											onClick={() => {
												if (totalLanguages > 1) {
													setTotalLanguages(totalLanguages - 1);
												}
											}}
										>
											-
										</ButtonContainer>
										<Input
											type="text"
											value={totalLanguages}
											onChange={onLanguageChange}
											min="1"
										/>
										<ButtonContainer
											type="button"
											onClick={() => {
												if (totalLanguages >= 0) {
													setTotalLanguages(totalLanguages + 1);
												}
											}}
										>
											+
										</ButtonContainer>
										<TfiHelpAlt
											style={{ fontSize: "1.5rem", cursor: "pointer" }}
											onClick={() => {
												setToggleModal(!toggleModal);
												setModalText(
													"El número de idiomas que tendrá la página web"
												);
											}}
										/>
									</OptionContainer>
								</WebsiteContainer>
							)}

							{toggleModal && (
								<>
									<Overlay
										text={modalText}
										onClick={() => setToggleModal(false)}
									/>
								</>
							)}
						</React.Fragment>
					))}
					Nombre Cliente:
					<input
						type="text"
						value={nombreCliente}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setNombreCliente(e.target.value);
						}}
					/>
					nombre de presupuesto:
					<input
						type="text"
						value={nombrePresupuesto}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setNombrePresupuesto(e.target.value);
						}}
					/>
					<input
						type="submit"
						value="Añadir Presupuesto"
						onClick={handleOnSubmit}
					/>
					<h3>Total Price: ${total}</h3>
					{/*!!!importante https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/ */}
					<Link to="/">Home</Link>
				</CheckboxContainer>
			</BoxContainer>
			<PresupostContainer>
				<h2 style={{ textTransform: "uppercase" }}>Mis presupuestos</h2>
				<FiltrosContainer>
					{/* https://www.pluralsight.com/guides/passing-state-of-parent-to-child-component-as-props */}
					{/* <Searcher onSearch={handleSearch} /> */}
					<div>
						<AiOutlineSearch />
						<input
							type="text"
							value={search}
							name="search"
							onChange={handleSearch}
							id="search"
						/>
					</div>

					<Filtro Icon={<BsSortAlphaDown />} onClick={handleSort} />
					<Filtro Icon={<BsCalendarDate />} onClick={handleDate} />
					<Filtro Icon={<AiOutlineReload />} onClick={handleReset} />
				</FiltrosContainer>
				<>
					{presuCopy.map((setData, index) => (
						<ClientePresupuesto key={index} data={setData} />
					))}
				</>
			</PresupostContainer>
		</Container>
	);
}

export default Presupuesto;
