import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { dataType } from "../../utils/types/types";

const Searcher = ({ data }: { data: dataType[] }) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
