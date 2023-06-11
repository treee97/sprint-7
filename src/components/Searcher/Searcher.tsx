import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { dataType } from "../../utils/types/types";

type searchProps = {
  onSearch: (value: string) => void;
};
const Searcher = ({ onSearch }: searchProps) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    onSearch(inputValue);
  };

  return (
    <>
      <AiOutlineSearch />
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleSearch}
        id="search"
      />
    </>
  );
};

export default Searcher;
