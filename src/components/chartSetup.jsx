import React, { Component, propTypes } from 'react'
import Paper from 'material-ui/Paper'
import * as styles from '../css/mainCSS'
import ReduxCheckBox from './reduxCheckBox'

const obj = {
  AED
:
3.673097,
AFN
:
69.375,
ALL
:
105.2,
AMD
:
480,
ANG
:
1.783141,
AOA
:
214.584,
ARS
:
20.1755,
AUD
:
1.299545,
AWG
:
1.784998,
AZN
:
1.7025,
BAM
:
1.582704
}

const brickStyle = {
  ...styles.mainPaperStyle,
  margin: 5,
}

const insertElement = (element) => (elementToInsert) => {
  return (
    <div style={{border:'3px solid blue'}}>
      { elementToInsert }
      { element }
    </div>
  )
}

const makeCurrArr = (n = Object.entries(obj).length, style) => {
  let currArr
  let elementToInsert = <ReduxCheckBox />
  return (
    currArr = Object.entries(obj).map((key,ind)=>{
      if (n === 5 && ind < 5)
        return (
          <Paper style={style}>{`${key[0]}: ${key[1]}`}</Paper>
        )
      else if (n !== 5 )
        return (
          insertElement(<Paper style={style}>{`${key[0]}: ${key[1]}`}</Paper>)(elementToInsert)
        )
    })
  )
}

const ChartSetupHOC = (Component) => {

  return class ChartSetup extends Component {
    constructor(props) {
      super(props)
      // this.state = {
      //   chartSetup: false
      // }
    }

    clickHandler = () => {
      this.setState({
        // chartSetup: true,
        btnLabel: this.state.btnLabel==='chart' ? 'setup' : 'chart'
      })
    }

    renderCurrencies = () => {
      if (this.state.btnLabel==='chart')
        return makeCurrArr()
      else
        return makeCurrArr(5, brickStyle)
    }

    render() {

      console.log('ChartSetupHOC:', this.state);

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
