import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import * as styles from '../css/mainCSS'
import ChartSetupHOC from './chartSetup'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'

const chartStyle = {
  ...styles.mainPaperStyle,
  alignItems: 'baseline'
}

interface RatesChartProps {
  btnLabel,
  callback
}

class RatesSetup extends Component<RatesChartProps, {}> {
  constructor(props) {
    super(props)
    this.state = {
      chartSetup: false,
      btnLabel: 'setup'
    }
  }

  render() {

    // console.log('RatesChart statezz, propzz:', this.state, this.props);
     return(
      <Paper style={chartStyle}>
        <RaisedButton
          icon={<FontIcon
            className="muidocs-icon-custom-github"
          />}
          label={this.props.btnLabel}
          onClick={this.props.callback}
        />

        { this.props.children }

      </Paper>
     )
  }
}

export default ChartSetupHOC(RatesSetup)
