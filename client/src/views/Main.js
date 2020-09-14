import React, { useState } from "react";
import styled from "styled-components";

import SearchContainer from "../components/Main/SearchContainer/SearchContainer";
import ContentContainer from "../components/Main/ContentContainer/ContentContainer";
import SortContainer from "../components/Main/SortContainer/SortContainer";
import HeaderComp from "../components/common/Header/Header";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
`;

const Main = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searching, setSearching] = useState(false);
  const [sortOn, setSortOn] = useState('');
  const [queryParams, setQueryParams] = useState({});

  function setFilteredDataCB(data) {
    setFilteredData(data);
  }

  return (
    <>
      <HeaderComp />
      <Container>
        <SearchContainer setFilteredDataCB={setFilteredDataCB} setSearching={setSearching} setQueryParams={setQueryParams} />
        <SortContainer filteredData={filteredData} setSortOn={setSortOn} sortOn={sortOn}  />
        <ContentContainer filteredData={filteredData} sortOn={sortOn} searching={searching} queryParams={queryParams} />
      </Container>
    </>
  );
};

export default Main;
