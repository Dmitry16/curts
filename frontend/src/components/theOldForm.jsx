//Libs
import React, { Component, Fragment } from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { newSearch } from '../actions/searchActions'
import { fetchData } from '../actions/fetchDataAction'
import { setToLocalStorage } from '../api/localStorage'
import ProgressLoading from './materialUI/progressLoading'

export default class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      primaryCheapest: true,
      primaryFastest: false,
      progressLoadingStatus:'hide',
    }
    this.handleChangeFrom = this.handleChangeFrom.bind(this)
    this.handleChangeTo = this.handleChangeTo.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount () {
    console.log('%c progressLoadingStatus111','color: green',this.state)
    this.setState({progressLoadingStatus:
                  (this.state.progressLoadingStatus === 'loading') ? 'ready' : 'hide'
                })
  }

  componentWillReceiveProps (nextProps) {
    console.log('%c componentWillReceiveProps::','color:greenfont-size:15px',nextProps)
    this.setState({
      progressLoadingStatus: (this.state.progressLoadingStatus === 'loading'
                              || !nextProps.searchResultsBlockVisible) ? 'hide' : 'loading',
    })
  }

  handleChangeFrom (e, ind, value) {
    this.setState({
      strFrom: e.target.innerText,
    })
  }
  handleChangeTo (e, ind, value) {
    this.setState({
      strTo: e.target.innerText,
    })
  }
  handleClick (e) {
    const value = e.target.innerText==='CHEAPEST' ? 'cheapest' : 'fastest'
    this.setState(prevState => ({
      travelMode: prevState.travelMode = value,
      primaryCheapest: (value==='cheapest')
                        ? prevState.primaryCheapest=true
                        : prevState.primaryCheapest=false,
      primaryFastest: (value==='fastest')
                        ? prevState.primaryCheapest=true
                        : prevState.primaryCheapest=false,
    }))
  }

  handleSubmit () {
    let [...searchParams] = [this.state.valueFrom, this.state.valueTo,
      this.state.strFrom, this.state.strTo, this.state.travelMode]

    // this.props.dispatch(newSearch(...searchParams))
    // this.props.dispatch(fetchData(...searchParams))
    // setToLocalStorage(searchParams)
    this.setState({progressLoadingStatus: 'loading'})
  }

  render() {

    console.log('this.props in form',this.props)
    console.log('this.state in form',this.state)

    const buttonStyle = {
      margin: 0,
      width: '50%',
    }
    const h2Style = {
      fontWeight: 400,
    }
    const formStyle = {
      width:'80%'
    }

    return (
      <Fragment>
        <h2 style={h2Style}>Please select something</h2>
        <SelectField
          style={formStyle}
          floatingLabelText="From"
          value={this.state.valueFrom}
          onChange={this.handleChangeFrom}
        >
          <MenuItem value={1} primaryText="London" />
          <MenuItem value={2} primaryText="Paris" />
          <MenuItem value={3} primaryText="Amsterdam" />
          <MenuItem value={4} primaryText="Moscow" />
          <MenuItem value={5} primaryText="Brussels" />
          <MenuItem value={6} primaryText="Geneva" />
          <MenuItem value={7} primaryText="Prague" />
          <MenuItem value={8} primaryText="Budapest" />
          <MenuItem value={9} primaryText="Madrid" />

        </SelectField>
        <br />
        <SelectField
          floatingLabelText="To"
          value={this.state.valueTo}
          onChange={this.handleChangeTo}
          style={{width:'80%'}}
        >
        <MenuItem value={1} primaryText="London" />
        <MenuItem value={2} primaryText="Paris" />
        <MenuItem value={3} primaryText="Amsterdam" />
        <MenuItem value={4} primaryText="Moscow" />
        <MenuItem value={5} primaryText="Brussels" />
        <MenuItem value={6} primaryText="Geneva" />
        <MenuItem value={7} primaryText="Prague" />
        <MenuItem value={8} primaryText="Budapest" />
        <MenuItem value={9} primaryText="Madrid" />

        </SelectField>
        <br />
        <RaisedButton label="Cheapest" primary={this.state.primaryCheapest}
          style={buttonStyle} onClick={this.handleClick} />
        <RaisedButton label="Fastest" primary={this.state.primaryFastest}
          style={buttonStyle} onClick={this.handleClick} />
        <RaisedButton label="Search" secondary={true} fullWidth={true}
        style={{marginTop:10}} onClick={this.handleSubmit} />
        <ProgressLoading status={this.state.progressLoadingStatus} />
      </Fragment>
    )
  }
}
