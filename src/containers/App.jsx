//Libs
import React, { Component, propTypes } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

//APIs,Actions
// import { getFromLocalStorage } from '../api/localStorage';
// import { lsRecInjection } from '../actions/localStorageActions';
// import { fetchData } from '../actions/fetchDataAction';
import { showInitialDialog } from '../actions/initialDialogActions';

//Assets
import '../css/App.css';
//Components
import ErrorBoundary from '../components/errorBoundary';
import { Container_main } from '../components/styled/styled-components/wrappers';
import AuthPage from './authPage';
import MainPage from './mainPage';
import About from '../components/about';
import { Header, Footer } from '../components/header';
import ExchangeCalculator from '../components/exchangeCalculator';
import RatesChart from '../components/ratesChart';

//Material-UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // let localStorageRec = getFromLocalStorage();
    //
    // if (localStorageRec.length !== 0) {
    //   console.log('localStorageRec',localStorageRec[localStorageRec.length-1]);
    //   this.props.dispatch(lsRecInjection(localStorageRec[localStorageRec.length-1]));
    //   this.props.dispatch(fetchData(...localStorageRec[localStorageRec.length-1]));
    // }
    this.props.dispatch(showInitialDialog());
  }

  render() {

    // { loggedIn } = this.props;

    console.log('this.props' ,this.props)


    // this.props.loggedIn
    const renderInit = () => (
      true
              ? (<MainPage {...this.props}>
                  <ExchangeCalculator {...this.props} />
                  <RatesChart {...this.props} />
                </MainPage>)
              : (<MainPage {...this.props} />)
    )

    return (
      <Router>
        <ErrorBoundary>
          <MuiThemeProvider>
            <Container_main>
              <Header />
                <Route exact={true} path='/' render={renderInit} />
                <Route path='/about' component={About} />
            </Container_main>
          </MuiThemeProvider>
        </ErrorBoundary>
      </Router>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actionCreators, dispatch);
// }

const mapStateToProps = store => ({
    searchResultsBlockVisible: store.searchResults.visible,
    initialDialog: store.appConfig.initialDialog,
    form: store.form,
    currencies: store.currency.currencies,
    loggedIn: store.currency.loggedIn
  });

export default connect(mapStateToProps)(App)
