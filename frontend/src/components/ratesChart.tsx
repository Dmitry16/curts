import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../css/mainCSS';
import ChartSetupHOC from './chartSetup';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';


const setupStyle = {
  ...styles.mainPaperStyle,
  alignItems: 'baseline',
  height: '150px',
  width: '100%',
  margin: 0,
  overflow: 'scroll',
  position: 'relative'
}
const scrollIcon = {
  position: 'absolute',
  top: 0, right: 0,
  color:'red'
}

interface RatesChartProps {
  btnLabel,
  callback
}

class RatesSetup extends Component<RatesChartProps, {btnLabel}> {
  constructor(props) {
    super(props)

    this.state = {
      chartSetup: false,
      btnLabel: 'setup'
    }
  }

  render() {
     return(
      <Paper style={setupStyle}>
          { this.props.btnLabel === 'X' ? (
            <IconButton
              tooltip="scroll down to see more currencies" style={scrollIcon}>
              <ArrowDownward />
            </IconButton>
            ) : null
          }
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
