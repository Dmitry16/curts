import React from 'react';
import Paper from 'material-ui/Paper';

import * as styles from '../css/mainCSS';
import { Checkbox } from './checkBox';
import { setToLocalStorage } from '../api/localStorage';

const brickStyle = {
  ...styles.mainPaperStyle,
  margin: 5,
  flexWrap: 'wrap'
}

const insertElement = (element) => (elementToInsert) => {
  return (
    <Paper style={{margin: '3px'}}>
      { elementToInsert }
      { element }
    </Paper>
  )
}
// THIS CODE NEEDS TO BE REFACTORED!

const ChartSetupHOC = (Component): any => {

  return class ChartSetup extends Component<{}, {}> {

    clickHandler = () => {
      if (this.state.btnLabel === 'X' &&
      (Object as any).entries(this.props.selectedCurrencies).length > 0) {
        setToLocalStorage(this.props.selectedCurrencies);
      }
      this.setState({
        btnLabel: this.state.btnLabel === 'X' ? 'setup' : 'X'
      })
    }

    checkIfMarked = cur => cur in this.props.selectedCurrencies;

    makeCurrArr = (n = (Object as any).entries(this.props.currencies).length, style) => {
      let currArr, currencies, selectedCurrencies;
      selectedCurrencies = Object.keys(this.props.selectedCurrencies);
      if (selectedCurrencies.length > 0 && this.state.btnLabel === 'setup') 
      {
        currencies = this.props.selectedCurrencies;
      } else {
        currencies = this.props.currencies;
      }
      return (
        currArr = (Object as any).entries(currencies).map((key,ind) => {
          if (n === 5 && ind < 5)
            return (
              <Paper key={ind} style={style}>{`${key[0]}: ${key[1]}` }</Paper>
            )
          else if (this.state.btnLabel === 'X' && ind < (Object as any).entries(currencies).length)
            return (
              insertElement(<Paper style={style}>{`${key[0]}: ${key[1]}`}</Paper>)
                (<Checkbox cur={key[0]} val={key[1]} dispatch={this.props.dispatch}
                  marked={this.checkIfMarked(key[0])}/>)
            )
          else if (n === (Object as any).entries(currencies).length && ind <(Object as any).entries(currencies).length)
            return (
              <Paper key={ind} style={style}>
                {`${key[0]}: ${key[1]}` }
              </Paper>
            )
        })
      )
    }

    renderCurrencies = () => {
      if (this.state.btnLabel==='X') {
        return (
            this.makeCurrArr((Object as any).entries(this.props.currencies).length, brickStyle)
        );
      } else if (Object.keys(this.props.selectedCurrencies).length > 0) {

        return this.makeCurrArr(Object.keys(this.props.selectedCurrencies).length, brickStyle);

      } else {
        return this.makeCurrArr(5, brickStyle);
      }
    }

    render() {
      return (
        <Component
          callback={this.clickHandler}
          btnLabel={this.state.btnLabel}
          {...this.props}
        >
          { this.renderCurrencies() }
        </Component>
      )
    }
  }
}
export default ChartSetupHOC
