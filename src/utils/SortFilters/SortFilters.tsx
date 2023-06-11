import { dataType } from "../types/types";
export const SortAlphabetically = (data: dataType[], sorted: boolean) => {
  const arr = [...data];
  if (sorted) {
    const sortedArr = arr.sort((itemA, itemB) =>
      itemA.clienteNombre.localeCompare(itemB.clienteNombre)
    );
    return sortedArr;
  } else {
    const sortedArr = arr.sort((itemA, itemB) =>
      itemB.clienteNombre.localeCompare(itemA.clienteNombre)
    );

    return sortedArr;
  }
};

export const SortByDate = (data: dataType[], sorted: boolean) => {
  const arr = [...data];
  if (sorted) {
    const sortByDate = arr.sort((a, b) =>
      a.date.split("/").join().localeCompare(b.date.split("/").join())
    );

    return sortByDate;
  } else {
    const sortByDate = arr.sort((a, b) =>
      b.date.split("/").join().localeCompare(a.date.split("/").join())
    );

    return sortByDate;
  }
};

export const ReverseSort = (data: dataType[]) => {
  //   //wtf
  //   return arr;
};
