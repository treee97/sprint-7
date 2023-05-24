import styled from 'styled-components';

type checkboxProp = {
    text: string;
    price: number;
    isChecked:boolean;
    onChange: () => void;
}

const CheckboxItem = styled.div`
padding: 10px;
border-radius: 8px;
margin: .5rem 0;
box-shadow: 0 0 15px rgba(0, 0, 0, .20)
`
const Checkbox = ({text}: checkboxProp) => {
  return (
    <CheckboxItem>
        <input 
          type="checkbox" 
        />
        {text}
    </CheckboxItem>
  )
}

export default Checkbox