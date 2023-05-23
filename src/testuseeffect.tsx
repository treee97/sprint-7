import { useState, useEffect } from 'react'
import Button from './Button';
// REACT ROUTER v6
// https://www.youtube.com/watch?v=2aumoR0-jmQ
function Effect() {
  const [itemChange, setItemChange] = useState<string>('posts');
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${itemChange}`)
      .then(response => response.json())
      .then(json => setItems(json))
		// console.log("el state actual es", itemChange);
    //si añadimos un eventListener, para hacer un cleanup hacemos un return () => {removeEventListener('event', handlerFunction)}
	}, [itemChange])
  //this only changes when our state changes. if it was empty it would recall the render log again and again even when clicking the same button

  return (
    <div>
      <Button onClick={() => setItemChange("todos")} text="Todos"/>
      <Button onClick={() => setItemChange("posts")} text="Posts"/>
      <Button onClick={() => setItemChange("albums")} text="Albums"/>

      <div>{itemChange}</div>
      {
      items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
        })
      }
    </div>
  )
}

export default Effect
