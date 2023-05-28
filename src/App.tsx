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
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalLanguages, setTotalLanguages] = useState<number>(1);
  const [totalExtras, setTotalExtras] = useState<number>(0);

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

    const extraPrice = totalWebsite(totalPages, totalLanguages);
    const globalTotal = extraPrice + totalPrice;
    setTotal(globalTotal);
  };

  const totalWebsite = (pages: number, languages: number) => {
    return pages * languages * 30;
  };

  // useEffect(() => {
  //   console.log("TotalPages =>", totalPages);
  //   console.log("TotalLanguages =>", totalLanguages);
  //   console.log(totalWebsite(totalPages, totalLanguages));

  //   const extraPrice = totalWebsite(totalPages, totalLanguages);
  //   setTotalExtras(extraPrice);
  //   setTotal(total + totalExtras);
  // }, []);

  const onPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pages = Number(e.target.value);
    setTotalPages(pages);
  };
  const onLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const languages = Number(e.target.value);
    setTotalLanguages(languages);
  };

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
                  <input
                    type="text"
                    value={totalPages}
                    onChange={onPageChange}
                    min="1"
                  />
                </div>
                <div>
                  <p>Número de idiomas</p>
                  <input
                    type="text"
                    value={totalLanguages}
                    onChange={onLanguageChange}
                    min="1"
                  />
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
