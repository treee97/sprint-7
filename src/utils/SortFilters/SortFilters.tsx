import { dataType } from "../types/types";

export const SortAlphabetically = (data: dataType[]) => {
  const arr = [...data];
  const sortedArr = arr.sort((itemA, itemB) =>
    itemA.clienteNombre.localeCompare(itemB.clienteNombre)
  );
  console.log(sortedArr);

  return sortedArr;
};

export const SortByDate = () => {
  return console.log("sortingDate");
};

export const ReverseSort = (data: dataType[]) => {
  const arr = [...data];
  console.log("arr", arr);
  //wtf

  return arr;
};
