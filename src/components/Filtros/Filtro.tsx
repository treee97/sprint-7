import { FiltroItem } from "../../utils";
type filtroProps = {
  onClick?: () => void;
  Icon: JSX.Element;
};
const Filtro = ({ onClick, Icon }: filtroProps) => {
  return <FiltroItem onClick={onClick}>{Icon}</FiltroItem>;
};

export default Filtro;
