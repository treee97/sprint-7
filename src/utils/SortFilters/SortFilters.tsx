import { dataType } from "../types/types";

export const SortAlphabetically = (data: dataType[]) => {
	let sorted = true;
	const arr = [...data];
	if (sorted) {
		const sortedArr = arr.sort((itemA, itemB) =>
			itemA.clienteNombre.localeCompare(itemB.clienteNombre)
		);
		sorted = false;
		console.log(sorted);
		console.log("a compara itemBBB", sortedArr);

		return sortedArr;
	}
	if (sorted === false) {
		sorted = true;
		const sortedArr = arr.sort((itemA, itemB) =>
			itemB.clienteNombre.localeCompare(itemA.clienteNombre)
		);

		console.log("b, compara itema", sortedArr);
		return sortedArr;
	}
};

export const SortByDate = (data: dataType[]) => {
	const arr = [...data];
	const sortByDate = arr.sort((a, b) =>
		a.date
			.split("/")
			.reverse()
			.join()
			.localeCompare(b.date.split("/").reverse().join())
	);
	console.log(sortByDate);

	return sortByDate;
};

export const ReverseSort = (data: dataType[]) => {
	const arr = [...data];
	console.log("arr", arr);
	//wtf

	return arr;
};
