//Libs
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from '../actions/actionCreators';
//Redux-Selectors
import CurrenciesHistory from '../selectors/currenciesHistorySelector';
//APIs,Actions
import { getFromLocalStorage } from '../api/localStorage';
import { lsRecInjection } from '../actions/localStorageActions';
// import { fetchData } from '../actions/fetchDataAction';
import { showInitialDialog } from '../actions/initialDialogActions';
//Components
import ErrorBoundary from '../components/errorBoundary';
import { ContainerMain } from '../components/styled/styled-components/wrappers';
import AuthPage from './authPage';
import MainPage from './mainPage';
import About from '../components/about';
import { Header, Footer } from '../components/header';
import ExchangeCalculator from '../components/exchangeCalculator';
import RatesSetup from '../components/ratesChart';
import InitialChart from '../components/charts/initialChart';
//Material-UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import selectedCurrencies from '../selectors/selectedCurrencies';

interface AppProps {
  store: any,
  dispatch: any,
  loggedIn: boolean,
  currencies: any,
  selectedCurrencies: any,
  history: any
}

class App extends Component<AppProps, {}> {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let localStorageRec = getFromLocalStorage();

    if (localStorageRec.length !== 0) {
      // console.log('componentWillMount localStorageRec:', localStorageRec[localStorageRec.length-1]);
      this.props.dispatch(lsRecInjection(localStorageRec[localStorageRec.length-1]));
    }
    // this.props.dispatch(showInitialDialog());
  }

  render() {

  const  { loggedIn } = this.props;

  // console.log('APP:::::', loggedIn);

    console.log('App render loggedIn, this.props', loggedIn, this.props);

    const renderInit = () => {
      return (
        <MainPage {...this.props}>
          { loggedIn
            ?
              <Fragment>
                <ExchangeCalculator {...this.props} />
                <RatesSetup {...this.props} />
                <InitialChart {...this.props} />
              </Fragment>
            :
              <AuthPage />
          }
        </MainPage>
      );
    };

    return (
      <Router>
        <ErrorBoundary>
          <MuiThemeProvider>
            <ContainerMain>
              <Header />
                <Route exact={true} path='/curts' render={renderInit} />
                <Route path='/about' component={About} />
            </ContainerMain>
          </MuiThemeProvider>
        </ErrorBoundary>
      </Router>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actionCreators, dispatch);
// }

const mapStateToProps = (store, props) => ({
    // searchResultsBlockVisible: store.searchResults.visible,
    // initialDialog: store.appConfig.initialDialog,
    store: store,
    form: store.form,
    currencies: store.currency.currencies,
    history: CurrenciesHistory(store),
    loggedIn: store.currency.loggedIn,
    selectedCurrencies: store.currency.selectedCurrencies
  });

export default connect(mapStateToProps)(App)
