import { FiltroItem } from "../../utils";
type filtroProps = {
	onClick?: () => void;
	Icon: JSX.Element;
	// text: string;
	// do we want TEXT instead of just having an icon¿???
};
const Filtro = ({ onClick, Icon }: filtroProps) => {
	return (
		<FiltroItem onClick={onClick}>
			{Icon}
			{/* {text} */}
		</FiltroItem>
	);
};

export default Filtro;
