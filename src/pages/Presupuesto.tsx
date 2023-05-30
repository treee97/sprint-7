import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Checkbox } from "../components";
import { checkboxData } from "../constants";
import {
  CheckboxContainer,
  WebsiteContainer,
  ButtonContainer,
  Input,
  OptionContainer,
} from "../utils";
// REACT ROUTER v6
// https://www.youtube.com/watch?v=2aumoR0-jmQ

function Presupuesto() {
  const [total, setTotal] = useState<number>(0);
  const [isCheckedState, setIsCheckedState] = useState<boolean[]>(
    new Array(checkboxData.length).fill(false)
  );
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalLanguages, setTotalLanguages] = useState<number>(1);

  const handlerOnChange = (itemPosition: number) => {
    const updateCheckedState = isCheckedState.map(
      (item, index) => (index === itemPosition ? !item : item)
      //esto marca la casilla. si el indice es identico a la posicion entonces se devuelve el valor contrario del item, que es true;
      //tener en cuenta que no podemos poner "true" en el ternario. O sino siempre sera true, siendo imposible uncheckearlo
    );
    setIsCheckedState(updateCheckedState);
  };

  const onPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pages = Number(e.target.value);
    setTotalPages(pages);
  };

  const onLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const languages = Number(e.target.value);
    setTotalLanguages(languages);
  };

  const totalWebsite = (pages: number, languages: number) => {
    return pages * languages * 30;
  };

  useEffect(() => {
    // console.log("getState", getState);

    const getState = window.localStorage.getItem("isCheckedState");
    const getPages = window.localStorage.getItem("pagesState");
    const getLanguages = window.localStorage.getItem("languagesState");

    if (getState !== null) setIsCheckedState(JSON.parse(getState));
    if (getPages !== null) setTotalPages(JSON.parse(getPages));
    if (getLanguages !== null) setTotalLanguages(JSON.parse(getLanguages));
  }, []);

  useEffect(() => {
    let totalPrice = 0;
    isCheckedState.forEach((checked, index) => {
      if (checked) {
        totalPrice += checkboxData[index].price;
      }
    });

    let extraPrice = 0;
    if (
      isCheckedState[checkboxData.findIndex((item) => item.id === "website")]
    ) {
      extraPrice = totalWebsite(totalPages, totalLanguages);
    }
    const globalTotal = totalPrice + extraPrice;
    setTotal(globalTotal);
  }, [isCheckedState, totalPages, totalLanguages]);

  // ============== LOCALsTORAGE ===============================
  useEffect(() => {
    window.localStorage.setItem(
      "isCheckedState",
      JSON.stringify(isCheckedState)
    );
    window.localStorage.setItem("pagesState", JSON.stringify(totalPages));
    window.localStorage.setItem(
      "languagesState",
      JSON.stringify(totalLanguages)
    );
  }, [isCheckedState, totalPages, totalLanguages]);

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
                <OptionContainer>
                  <p style={{ marginRight: "8px" }}>Número de páginas</p>
                  <ButtonContainer
                    type="button"
                    onClick={() => {
                      if (totalPages > 1) {
                        setTotalPages(totalPages - 1);
                      }
                    }}
                  >
                    -
                  </ButtonContainer>
                  <Input
                    type="text"
                    value={totalPages}
                    onChange={onPageChange}
                    min="1"
                  />
                  <ButtonContainer
                    type="button"
                    onClick={() => {
                      if (totalPages >= 0) {
                        setTotalPages(totalPages + 1);
                      }
                    }}
                  >
                    +
                  </ButtonContainer>
                </OptionContainer>
                <OptionContainer>
                  <p style={{ marginRight: "8px" }}>Número de idiomas</p>
                  <ButtonContainer
                    type="button"
                    onClick={() => {
                      if (totalLanguages > 1) {
                        setTotalLanguages(totalLanguages - 1);
                      }
                    }}
                  >
                    -
                  </ButtonContainer>
                  <Input
                    type="text"
                    value={totalLanguages}
                    onChange={onLanguageChange}
                    min="1"
                  />
                  <ButtonContainer
                    type="button"
                    onClick={() => {
                      if (totalLanguages >= 0) {
                        setTotalLanguages(totalLanguages + 1);
                      }
                    }}
                  >
                    +
                  </ButtonContainer>
                </OptionContainer>
              </WebsiteContainer>
            )}
          </React.Fragment>
        ))}
      </CheckboxContainer>

      <h3>Total Price: ${total}</h3>

      {/*!!!importante https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/ */}
      <Link to="/">Home</Link>
    </>
  );
}

export default Presupuesto;