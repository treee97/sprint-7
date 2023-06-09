import { dataType } from "../types/types";
export const SortAlphabetically = (data: dataType[], sorted: boolean) => {
  const arr = [...data];
  if (sorted) {
    const sortedArr = arr.sort((itemA, itemB) =>
      itemA.clienteNombre.localeCompare(itemB.clienteNombre)
    );
    console.log(sorted);
    console.log("a compara itemBBB", sortedArr);
    return sortedArr;
  } else {
    const sortedArr = arr.sort((itemA, itemB) =>
      itemB.clienteNombre.localeCompare(itemA.clienteNombre)
    );

    console.log("b, compara itema", sortedArr);
    return sortedArr;
  }
};

export const SortByDate = (data: dataType[], sorted: boolean) => {
  const arr = [...data];
  if (sorted) {
    const sortByDate = arr.sort((a, b) =>
      a.date.split("/").join().localeCompare(b.date.split("/").join())
    );
    // console.log("acompareBB", sortByDate);

    return sortByDate;
  } else {
    const sortByDate = arr.sort((a, b) =>
      b.date.split("/").join().localeCompare(a.date.split("/").join())
    );
    // console.log("bcompareAA", sortByDate);

    return sortByDate;
  }
};

export const ReverseSort = (data: dataType[]) => {
  const arr = [...data];
  console.log("arr", arr);
  //wtf

  return arr;
};
