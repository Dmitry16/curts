import React, { Component } from 'react';
import { addCurrency, removeCurrency } from '../actions/currenciesActions';

interface CheckboxProps {
  marked: boolean,
  cur: any,
  val: any,
  dispatch: any
}

export class Checkbox extends Component<CheckboxProps, {checked: boolean}> {
  constructor(props) {
    super(props);
     this.state = {
       checked: this.props.marked
     }
  }
  handleChange = () => {
    const { cur, val, dispatch } = this.props;
    this.setState({
      checked: !this.state.checked
    });
    const { checkBox } = this.refs;
    if ((checkBox as any).checked)
      dispatch(addCurrency(cur, val));
    if (!(checkBox as any).checked) {
      dispatch(removeCurrency(cur, val));
      // console.log(this.props.cur);
    }
  }

  render() {

    // console.log('checkbox propzz', this.props);
    return (
        <input
          type="checkbox"
          ref='checkBox'
          checked={this.state.checked}
          onChange={this.handleChange}
        />
    );
  }
}
