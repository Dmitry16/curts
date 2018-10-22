import React from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../css/mainCSS';
import { Checkbox } from './checkBox';
import { setToLocalStorage } from '../api/localStorage';

const brickStyle = {
  ...styles.mainPaperStyle,
  margin: 5,
}

const insertElement = (element) => (elementToInsert) => {
  return (
    <Paper style={{margin: '3px'}}>
      { elementToInsert }
      { element }
    </Paper>
  )
}

const ChartSetupHOC = (Component): any => {

  return class ChartSetup extends Component<{}, {}> {
    constructor(props) {
      super(props)
      // this.state = {
      //   chartSetup: false
      // }
    }

    clickHandler = () => {
      if (this.state.btnLabel === 'chart' &&
      (Object as any).entries(this.props.selectedCurrencies).length > 0) {
        setToLocalStorage(this.props.selectedCurrencies);
      }
      this.setState({
        // chartSetup: true,
        btnLabel: this.state.btnLabel === 'chart' ? 'setup' : 'chart'
      })
    }

    checkIfMarked = cur => cur in this.props.selectedCurrencies;

    makeCurrArr = (n = (Object as any).entries(this.props.currencies).length, style) => {
      // console.log('makeCurrArr n:', n);
      let currArr, currencies, selectedCurrencies;
      selectedCurrencies = Object.keys(this.props.selectedCurrencies);
      // let elementToInsert = <Checkbox />
      if (selectedCurrencies.length > 0 && this.state.btnLabel === 'setup') {

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
          else if (this.state.btnLabel === 'chart' && ind < (Object as any).entries(currencies).length)
            return (
              insertElement(<Paper style={style}>{`${key[0]}: ${key[1]}`}</Paper>)
                (<Checkbox cur={key[0]} val={key[1]} dispatch={this.props.dispatch}
                  marked={this.checkIfMarked(key[0])}/>)
            )
          else if (n === (Object as any).entries(currencies).length && ind <(Object as any).entries(currencies).length)
            return (
              <Paper key={ind} style={style}>{`${key[0]}: ${key[1]}` }</Paper>
            )
        })
      )
    }

    renderCurrencies = () => {
      if (this.state.btnLabel==='chart') {
      // console.log('propzz in renderCurrencies', Object.entries(this.props.currencies));
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


      // console.log('renderrrrrrr', this.props.currencies);

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
