import { useState, useEffect } from 'react'
import './App.css'
import Button from './Button';

function App() {
  const [itemChange, setItemChange] = useState<string>('mystate');

  useEffect( () => {
    console.log("el state actual es", itemChange);
    }
  )

  return (
    <div className="App">
      <Button onClick={() => setItemChange("Comments")} text="Comments"/>
      <Button onClick={() => setItemChange("Posts")} text="Posts"/>
      <Button onClick={() => setItemChange("Stories")} text="Stories"/>

      <div>{itemChange}</div>
    </div>
  )
}

export default App
