import styled from 'styled-components';

type checkboxProp = {
    text: string;
    price: number;
    isChecked:boolean;
    onChange: () => void;
}

const CheckboxItem = styled.div`
display: flex;
padding: 3px 10px;
border-radius: 8px;
margin: .5rem 0;
box-shadow: 0 0 15px rgba(0, 0, 0, .20)
`
const Checkbox = ({text, isChecked, onChange, price}: checkboxProp) => {
  return (
    <CheckboxItem>
        <input 
          type="checkbox"
          checked={isChecked}
          onChange={onChange} 
        />
        <p>{text}, {price}€</p>
        {/* renderizado condicional aqui? Si esta isCheckedState === true ?  */}
    </CheckboxItem>
  )
}

export default Checkbox