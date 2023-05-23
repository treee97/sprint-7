import './App.css';
// import React from 'react';
import { useState,  } from 'react';
import { Checkbox } from './components';
import styled from 'styled-components';
// REACT ROUTER v6
// https://www.youtube.com/watch?v=2aumoR0-jmQ

const CheckboxContainer = styled.div`
display: flex;
flex-direction: column;
`

function App() {
  const [totalPrice, setTotalPrice] = useState<number>(0)
  return (
    <>
      <CheckboxContainer>
        <h1>Qué quieres hacer?</h1>
        <Checkbox text='una página web 500€' price={500}/>
        {/* onclick= isChecked ? el estado del check. utilizamos un handler para sumar el precio mas el totalPrice*/}
        <Checkbox text='una consultoria SEO 300€' price={300}/>
        <Checkbox text='una campaña de google ads 200€' price={200}/>
      </CheckboxContainer>

      <h3>Total Price: ${totalPrice}</h3>
      {/*!!!importante https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/ */}
    </>
  )
}

export default App
