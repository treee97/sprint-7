import { CheckboxItem } from "../../utils";

type checkboxProp = {
  text: string;
  price: number;
  isChecked: boolean;
  onChange: () => void;
  id: string;
};

const Checkbox = ({ text, isChecked, onChange, price }: checkboxProp) => {
  return (
    <CheckboxItem>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <p>
        {text}, {price}€
      </p>
    </CheckboxItem>
  );
};

export default Checkbox;
