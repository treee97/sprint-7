import { OverlayContainer, OverlayItem } from "../../utils";
// TfiHelpAlt;
type overlayProp = {
	onClick: () => void;
	text: string;
};

const Overlay = ({ onClick, text }: overlayProp) => {
	return (
		<OverlayContainer onClick={onClick}>
			<OverlayItem>{text}</OverlayItem>
		</OverlayContainer>
	);
};

export default Overlay;
