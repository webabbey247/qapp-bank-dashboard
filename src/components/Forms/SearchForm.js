import React from "react";
import {
  SearchFormWrapper,
  SearchFormInput,
  SearchFormInputBtn,
} from "./FormCss";

import {FiSearch} from "react-icons/fi";

const SearchForm = () => {
  return (
    <>
      <SearchFormWrapper>
        <SearchFormInput name='search' placeholder='Search' />
        <SearchFormInputBtn>
          <FiSearch />
        </SearchFormInputBtn>
      </SearchFormWrapper>
    </>
  );
};

export default SearchForm;
