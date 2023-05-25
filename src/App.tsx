import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { Checkbox } from "./components";
import { checkboxData } from "./constants";
import { CheckboxContainer, WebsiteContainer } from "./utils";
// REACT ROUTER v6
// https://www.youtube.com/watch?v=2aumoR0-jmQ

function App() {
  const [total, setTotal] = useState<number>(0);
  // state para precio final de los checkeds
  const [isCheckedState, setIsCheckedState] = useState<boolean[]>(
    new Array(checkboxData.length).fill(false)
  );
  //isCheckedState array de booleans[false,false,false...]

  const handlerOnChange = (itemPosition: number) => {
    const updateCheckedState = isCheckedState.map(
      (item, index) => (index === itemPosition ? !item : item)
      //esto marca la casilla. si el indice es identico a la posicion entonces se devuelve el valor contrario del item, que es true;
      //tener en cuenta que no podemos poner "true" en el ternario. O sino siempre sera true, siendo imposible uncheckearlo
    );

    setIsCheckedState(updateCheckedState);

    const totalPrice = updateCheckedState.reduce(
      (sumaTotal, currentState, index) => {
        if (currentState === true) {
          return sumaTotal + checkboxData[index].price;
        }
        return sumaTotal;
      },
      0
    );

    setTotal(totalPrice);
  };

  useEffect(() => {
    console.log("state isCheckedState", isCheckedState);
    // console.log("this is the Total", total);
  }, [isCheckedState]);
  return (
    <>
      <CheckboxContainer>
        <h1>Qué quieres hacer?</h1>
        {checkboxData.map((item, index) => (
          <React.Fragment key={index}>
            <Checkbox
              text={item.text}
              price={item.price}
              isChecked={isCheckedState[index]}
              onChange={() => handlerOnChange(index)}
              id={item.id}
            />

            {item.id === "website" && isCheckedState[index] && (
              <WebsiteContainer className="scale-in-ver-center">
                <div>
                  <p>Número de páginas</p>
                  <input type="number" />
                </div>
                <div>
                  <p>Número de idiomas</p>
                  <input type="number" />
                </div>
              </WebsiteContainer>
            )}
          </React.Fragment>
        ))}
      </CheckboxContainer>

      <h3>Total Price: ${total}</h3>

      {/*!!!importante https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/ */}
    </>
  );
}

export default App;
