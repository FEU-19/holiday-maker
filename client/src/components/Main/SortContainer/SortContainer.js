import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { sortValues } from '../../../config/constants';
import styled from "styled-components";

const Container = styled.div`
  margin-inline-start: auto;
  padding-right: 125px;
  padding-top: 25px;
`;

const useStyles = makeStyles((theme) => ({
  border: {
    width: 180,
    height: 40,
    borderRadius: 7,
    background: 'white',
    borderColor: '#162C72',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '25',
  },
}));

export default function SortContainer({ filteredData, sortOn, setSortOn }) {
  const [searchDone, setSearchDone] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (filteredData.length) {
      setSearchDone(true);
    }
  }, [filteredData])

  function onChange(e) {
    if (e.target.value === 'Sort by') return setSortOn('');
    setSortOn(e.target.value);
  }

  return (
    <Container>
      {searchDone &&
        <Box className={classes.border} border={3}>
          <Select className={classes.select}
            value={sortOn || 'Sort by'}
            onChange={onChange}
            id="sort"
            >
              {sortValues.map((sort, i) => {
                return (
                  <MenuItem key={sort + i} value={sort}>{sort}</MenuItem>
                )
              })}
          </Select>
        </Box>
      }
    </Container>
  )
}
