import { ClienteContainer, ClienteItem } from "../../utils";
type dataType = {
	servicios: string[];
	pages: number;
	languages: number;
	total: number;
	date: string;
	clienteNombre: string;
	presupuestoNombre: string;
};
type clienteProps = {
	data: dataType;
};
//Filtros no pueden ir aqui o se renderizaran cada vez
const ClientePresupuesto = ({ data }: clienteProps) => {
	const {
		clienteNombre,
		presupuestoNombre,
		date,
		total,
		pages,
		languages,
		servicios,
	} = data;

	const websiteServicio = servicios.includes("Website");
	return (
		<>
			<ClienteContainer>
				<ClienteItem>
					<div>Nombre:</div>
					<div>{clienteNombre}</div>
				</ClienteItem>
				<ClienteItem>
					<div>Nombre de Presupuesto:</div>
					<div>{presupuestoNombre}</div>
				</ClienteItem>
				<ClienteItem>
					<div>Fecha de admision:</div>
					<div>{date}</div>
				</ClienteItem>
				<hr />
				<ClienteItem>
					<div>Servicios solicitados:</div>
					<div>
						{servicios.join(", ")}
						{websiteServicio && ` (${pages} página/s, ${languages} idioma/s)`}
					</div>
				</ClienteItem>
				<ClienteItem>
					<div>Total a recibir:</div>
					<div>€{total}</div>
				</ClienteItem>
			</ClienteContainer>
		</>
	);
};

export default ClientePresupuesto;
