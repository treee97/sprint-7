import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Checkbox } from './components';
import styled from 'styled-components';
// REACT ROUTER v6
// https://www.youtube.com/watch?v=2aumoR0-jmQ

const CheckboxContainer = styled.div`
display: flex;
flex-direction: column;
`

function App() {
  const [price, setPrice] = useState<number>(0)
  return (
    <>
      <CheckboxContainer>
        <Checkbox text='una página web 500€'/>
        <Checkbox text='una consultoria SEO 300€'/>
        <Checkbox text='una campaña de google ads 200€'/>
      </CheckboxContainer>

      <div>{price}</div>
    </>
  )
}

export default App
