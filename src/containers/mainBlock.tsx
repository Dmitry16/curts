import React, { Component, Fragment } from 'react';
import Paper from 'material-ui/Paper';

import ExchangeCalculator from '../components/exchangeCalculator';
import InitialChart from '../components/charts/initialChart';

interface MainBlockProps {
    currencies: any,
    selectedCurrencies: any,
    history: any
  }

export default class MainBlock extends Component<MainBlockProps, {}> {

    render() {
        return(
            <Paper>
                <ExchangeCalculator {...this.props} />
                <InitialChart {...this.props} />
            </Paper>
        )
    }
}