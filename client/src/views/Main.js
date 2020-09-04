import React from "react";
import styled from 'styled-components';

import SearchContainer from '../components/Main/SearchContainer/SearchContainer'
import ContentContainer from '../components/Main/ContentContainer/ContentContainer'



// stor bokstav på variabler i styled components
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  border: 2px solid black; 
`

const Main = () => {
  return (
      <Container>
        <SearchContainer />
        <ContentContainer />
      </Container>
  )
};

export default Main;
