import React, { useState, useEffect } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { sortValues } from '../../../config/constants';

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
    <>
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
    </>
  )
}
