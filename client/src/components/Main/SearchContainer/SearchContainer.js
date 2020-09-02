import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid red;
  width: 90vw;
  height: auto;
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid green;
    width: 95%;
    height: 20px;
  }

  .search__top {
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    width: 85%;
    height: 20px;
  }

  .search__bottom {
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    width: 85%;
    height: 20px;
  }
`;

const SearchContainer = () => {
  useEffect(() => {
    axios.get('https://localhost:8080/api/residents')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
    }, []);

  return (
    <Container>
      <form action="">
        <div className="search__top"></div>
        <div className="search__bottom"></div>
      </form>
    </Container>
  );
};

export default SearchContainer;
