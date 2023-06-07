import { dataType } from "../types/types";

export const SortAlphabetically = (data: any[]) => {
	console.log(data);
	// Ejemplo
	const sorted = data.sort((itemA, itemB) =>
		itemA.clienteNombre.localCompare(itemB.clienteNombre)
	);
	// const myData = this.state.contacts
	//  .sort((a, b) => a.name.localeCompare(b.name))
	//  .map((item, i) => <List key={i} data={item} />);
	return sorted;
};
export const SortByDate = () => {
	return console.log("sortingDate");
};
export const ReverseSort = () => {
	return console.log("reverseSort");
};
