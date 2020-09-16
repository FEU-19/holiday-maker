import React from 'react';

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Box from '@material-ui/core/Box';

class ChildrenAgeSelects extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selects: <></>,
      MenuItems: <></>,
      childrenAgeArr: [],
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.renderMenuItems();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.amountOfChildren === this.props.amountOfChildren) return;

    if(prevProps.amountOfChildren > this.props.amountOfChildren) {
      let arr = this.state.childrenAgeArr;
      arr.splice(this.props.amountOfChildren, 8);
      this.setState({ childrenAgeArr: arr });
    }

    this.renderSelects();
  }

  onChange(e, i) {
    let arr = this.state.childrenAgeArr;

    arr.splice(i, 1, e.target.value);

    this.setState({ childrenAgeArr: arr });

    this.props.setAgeOfChildren(this.state.childrenAgeArr);

    this.renderSelects();
  }

  renderMenuItems() {
    let x = [];

    for( let i = 0; i <= 17; i++) {
      x.push(
        <MenuItem
          key={ 'ageMenu-' + i + Date.now() }
          value={ i }
        >{ i }</MenuItem>
      );
    }

    this.setState({ MenuItems: x });
  }

  renderSelects() {
    let x = [];
    let arr = this.state.childrenAgeArr;

    for(let i = 0; i < this.props.amountOfChildren; i++) {
      if(isNaN(arr[i]) && arr[i] !== "") arr[i] = "";

      x.push(
        <Box
        style={{
          width: 100,
          height: 35,
          border: "3px solid #162C72",
          borderRadius: 7,
          backgroundColor: "white",
          borderColor: "#162C72",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 5,
          marginRight: 5,
        }}
        >
          <p>Age</p>
          <Select
            key={ "ageSelect-" + i + Date.now() }
            displayEmpty
            value={ this.state.childrenAgeArr[i] }
            onChange= { (e) => this.onChange(e, i) }
            aria-label={ "Select age of child" }
            id={ "selectAgeOfChild" + i }
            required
          >
            <MenuItem key={ "AgeMenuLabel-" + i + Date.now() } disabled>Age</MenuItem>
            { this.state.MenuItems }
          </Select>
        </Box>
      );
    }

    this.setState({ selects: x, childrenAgeArr: arr });
  }

  render() {
    if(this.props.amountOfChildren < 1) return null;

    return (
      <>
        { this.state.selects }
      </>
    );
  }
}

export default ChildrenAgeSelects;
