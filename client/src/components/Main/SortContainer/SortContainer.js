import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { sortValues } from '../../../config/constants';

const Container = styled.div`
  margin-inline-start: auto;
  padding-right: 130px;
  padding-top: 25px;
`;

export default function SortContainer({ filteredData, sortOn, setSortOn }) {
  const [searchDone, setSearchDone] = useState(false);

  useEffect(() => {
    if (filteredData.length) {
      setSearchDone(true);
    }
  }, [filteredData])

  function onChange(e) {
    if (e.target.value === 'None') return setSortOn('');
    setSortOn(e.target.value);
  }

  return (
    <Container>
      {searchDone &&
        <>
          <InputLabel id="sort">Sort by</InputLabel>
          <Select
            value={sortOn || 'None'}
            onChange={onChange}
            id="sort"
            >
              {sortValues.map((sort, i) => {
                return (
                  <MenuItem key={sort + i} value={sort}>{sort}</MenuItem>
                )
              })}
          </Select>
        </>
      }
    </Container>
  )
}
