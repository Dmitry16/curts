import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../css/mainCSS';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

// interface ExchangeCalculatorProps {
//   currencies: any,
//   selectedCurrencies: any
// }
// interface ExchangeCalculatorState {
//   value: any,
//   selectedCurrencyName: string,
//   usdQuantity: number,
//   currencyQuantity: number,
//   target: string
// }
export default class ExchangeCalculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
     value: 0,
     selectedCurrencyName: Object.keys(this.props.currencies)[0],
     usdQuantity: 1,
     currencyQuantity: 1,
     target: 'usdQuantity'
    }
  }

  handleSelectedCurrencyChange = (e, ind, value) => {
    // console.log('handleSelectedCurrencyChange',
      // Object.keys(this.props.currencies)[value]);
    this.setState({
      value: value,
      selectedCurrencyName: Object.keys(this.props.currencies)[value]
    })
  }

  matchCurrency = () => {
    if (Object.keys(this.props.selectedCurrencies).length > 0) {
      // console.log('matchCurrency selectedCurrencies', Object.entries(this.props.selectedCurrencies)[this.state.value][1]);
      return Object.entries(this.props.selectedCurrencies)[this.state.value][1]
    } else {
      return Object.entries(this.props.currencies)[this.state.value][1]
    }
  }

  calculateChange = (target) => {
    // console.log('calculateChange', this.matchCurrency());

    if (this.state.usdQuantity && this.state.currencyQuantity) {
      const change = this.matchCurrency();
      if (target && target === 'usdQuantity') {
        this.setState({
          currencyQuantity: this.state.usdQuantity * change
          // change: change
        });
      }
      // console.log('calculateChange:', Object.entries(this.props.currencies)[this.state.value][1]);
    }
  }

  handleChange = (e) => {
    // console.log('handleChange', e.target);
    this.setState({
      [e.target.id]: e.target.value,
      target: e.target.id,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate', this.state[prevState.target]);
    //checking if the quantity of currency changed
    if (prevState[prevState.target] !== this.state[prevState.target]) {
      this.calculateChange(this.state.target);
    }
    if (prevState.selectedCurrencyName !== this.state.selectedCurrencyName) {
      this.calculateChange(this.state.target);
    }
    if (prevProps.selectedCurrencies !== this.props.selectedCurrencies) {
      this.calculateChange(this.state.target);
    }
  }

  componentDidMount() {
    // console.log('componentDidMount', this.state.target);
    this.calculateChange(this.state.target);
  }

  render() {
    let currencies = {};
    // console.log('exchangeCalculator render', this.state);
    if (Object.keys(this.props.selectedCurrencies).length > 0) {
      currencies = this.props.selectedCurrencies;
    } else {
      currencies = this.props.currencies;
    }
    const calculatorStyle = {
      ...styles.mainPaperStyle,
      margin: 0,
      padding: 0,
      alignItems: 'baseline'
    }
    const tfStyle = {
      margin: 20,
      marginBottom: 10,
      width: 55
    }

    let currArr = Object.entries(currencies).map((key,ind) => {
      return (
        <MenuItem key={ind} value={ind} primaryText={key[0]} />
      )
    })

    return (
      <Paper style={calculatorStyle}>
        <div>
          <TextField
          id="usdQuantity"
          value={this.state.usdQuantity}
          style={tfStyle}
          onChange={this.handleChange}
          />
          <SelectField
            value = {0}
            floatingLabelText = "Currency"
            onChange = {this.handleSelectedCurrencyChange}
            menuItemStyle = {{color:'steelblue'}}
            style={{margin:0,width:'auto'}}
          >
          <MenuItem value={0} primaryText='USD' />
          </SelectField>
        </div>

        <div>
          <TextField
          id="currencyQuantity"
          value={this.state.currencyQuantity}
          style={tfStyle}
          onChange={this.handleChange}
          />
          <SelectField
            value = {this.state.value}
            floatingLabelText = "Currency"
            onChange = {this.handleSelectedCurrencyChange}
            menuItemStyle = {{color:'steelblue'}}
            style={{width:'auto'}}
          >
            { currArr }
          </SelectField>
        </div>
      </Paper>
    )
  }
}
