import React, { Component } from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import CircularProgress from '@material-ui/core/CircularProgress';


export const Spinner = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div>
      {
        (promiseInProgress === true) ?
        <CircularProgress />
        :
        null
      }
    </div>
  )
};
