import React from 'react';

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

class ChildrenAgeSelects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selects: <></>,
      MenuItems: <></>,
      childrenAgeArr: [],
      indexForKey: 0
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.renderMenuItems();
  }

  componentDidUpdate(prevProps, prevState) {
    // for (let [i, age] of this.state.childrenAgeArr.entries()) {
    //   // console.log('loop');
    //   // console.log(prevState.childrenAgeArr[i], this.state.childrenAgeArr[i]);
    //   if(prevState.childrenAgeArr[i] !== this.state.childrenAgeArr[i]) {
    //     // console.log('det händer något');
    //     this.renderSelects();
    //   }
    // }

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

    console.log(this.state.childrenAgeArr);
    this.renderSelects();
  }

  renderMenuItems() {
    let x = [];

    for( let i = 1; i <= 17; i++) {
      x.push(
        <MenuItem key={ 'ageMenu-' + i + Date.now() } value={ i }>{ i }</MenuItem>
      );
    }

    this.setState({ MenuItems: x });
  }

  renderSelects() {
    let x = [];
    let arr = this.state.childrenAgeArr;

    for(let i = 0; i < this.props.amountOfChildren; i++) {
      if(isNaN(arr[i]) && arr[i] !== "") arr[i] = "";

      this.setState({ indexForKey: i });

      x.push(
        <>
          <Select
            key={ "ageSelect-" + i + Date.now() }
            displayEmpty
            value={ this.state.childrenAgeArr[i] }
            onChange= { (e) => this.onChange(e, i) }
            aria-label={ "Select age of child" }
            id={ "selectAgeOfChild" + i }
          >
            <MenuItem key={ "AgeMenuLabel-" + i + Date.now() } disabled>Age</MenuItem>
            { this.state.MenuItems }
          </Select>
        </>
      );
    }

    this.setState({ selects: x, childrenAgeArr: arr });
  }

  render() {
    if(this.props.amountOfChildren < 1) return null;

    return (
      <>
        <InputLabel id="selectAgeOfChildren">Age Of Children</InputLabel>
        { this.state.selects }
      </>
    );
  }
}

export default ChildrenAgeSelects;
