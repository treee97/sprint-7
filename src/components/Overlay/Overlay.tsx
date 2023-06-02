import { OverlayContainer, OverlayItem } from "../../utils";
type overlayProp = {
  onClick: () => void;
  text: string;
};

const Overlay = ({ onClick, text }: overlayProp) => {
  const handlerOverlayClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <OverlayContainer onClick={onClick}>
      <OverlayItem onClick={handlerOverlayClose}>{text}</OverlayItem>
    </OverlayContainer>
  );
};

export default Overlay;
