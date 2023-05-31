import { OverlayContainer, OverlayItem } from "../../utils";
// TfiHelpAlt;
type overlayProp = {
  onClick: () => void;
};

const Overlay = ({ onClick }: overlayProp) => {
  return (
    <OverlayContainer onClick={onClick}>
      <OverlayItem>
        Hello im IN the OverlayContainer. Im the overlay ITEM
      </OverlayItem>
    </OverlayContainer>
  );
};

export default Overlay;
