import { FiltroItem } from "../../utils";
type filtroProps = {
  onClick?: () => void;
};
const Filtro = ({ onClick }: filtroProps) => {
  return <FiltroItem onClick={onClick}>Filtro</FiltroItem>;
};

export default Filtro;
