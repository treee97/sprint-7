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
  const [isCheckedState, setIsCheckedState] = useState<boolean[]>(
    new Array(checkboxData.length).fill(false)
  );
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalLanguages, setTotalLanguages] = useState<number>(0);

  const handlerOnChange = (itemPosition: number) => {
    const updateCheckedState = isCheckedState.map(
      (item, index) => (index === itemPosition ? !item : item)
      //esto marca la casilla. si el indice es identico a la posicion entonces se devuelve el valor contrario del item, que es true;
      //tener en cuenta que no podemos poner "true" en el ternario. O sino siempre sera true, siendo imposible uncheckearlo
    );
    setIsCheckedState(updateCheckedState);
  };

  const totalWebsite = (pages: number, languages: number) => {
    return pages * languages * 30;
  };

  useEffect(() => {
    let totalPrice = 0;
    //inicializamos fuera del if
    isCheckedState.forEach((checked, index) => {
      if (checked) {
        totalPrice += checkboxData[index].price;
      }
    });

    const extraPrice = totalWebsite(totalPages, totalLanguages);
    const globalTotal = totalPrice + extraPrice;
    setTotal(globalTotal);
  }, [isCheckedState, totalPages, totalLanguages]);

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
                  <button
                    type="button"
                    onClick={() => {
                      if (totalPages > 1) {
                        setTotalPages(totalPages - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={totalPages}
                    onChange={onPageChange}
                    min="1"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (totalPages >= 0) {
                        setTotalPages(totalPages + 1);
                      }
                    }}
                  >
                    +
                  </button>
                </div>
                <div>
                  <p>Número de idiomas</p>
                  <button
                    type="button"
                    onClick={() => {
                      if (totalLanguages > 1) {
                        setTotalLanguages(totalLanguages - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={totalLanguages}
                    onChange={onLanguageChange}
                    min="1"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (totalLanguages >= 0) {
                        setTotalLanguages(totalLanguages + 1);
                      }
                    }}
                  >
                    +
                  </button>
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
