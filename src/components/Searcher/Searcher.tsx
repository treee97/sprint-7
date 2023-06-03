import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searcher = () => {
  return (
    <>
      <AiOutlineSearch />
      <input type="text" name="search" id="search" />
    </>
  );
};

export default Searcher;
