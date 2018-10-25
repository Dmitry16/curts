import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import * as styles from '../css/mainCSS';
import IconButton from 'material-ui/IconButton';

export default class About extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    return (
      <Paper style={{width: '50%',margin:'5em auto',padding:'2em'}} zDepth={1} >
        <h3 style={styles.hStyle}>About the Curts App.</h3>
        <p style={styles.pStyle}>
          This is an easily scalable (due to the flux application architecture) single-page app
          wich retrieves data from the api of https://openexchangerates.org/. 
          By means of the app an user can get information of a currency or number of currencies which can be configuered by date and displayed in UI as a chart or calculator.           
          The process of adding or removing currencies is mirrored on the chart that is rerendered immidiately.
          <ul>
          <h4 style={styles.hStyle}>The techstack:</h4>
            <li>TypeScript (v.3.0.3)</li>
            <li>React.JS (v.16.5.1)</li>
            <li>Redux (v.3.7.2)</li>
            <li>React Router (v.4.2.2)</li>
            <li>Redux Sagas (v.0.16.0)</li>
            <li>Redux Form (v.7.3.0)</li>
            <li>Reselect (v.3.0.1)</li>
            <li>CSS Modules</li>
            <li>Styled Components (v.3.1.6)</li>
            <li>Material-UI</li>
            <li>Webpack (v.4.19.1)</li>
          </ul>
        </p>
        <IconButton iconClassName="muidocs-icon-custom-github"
          iconStyle={{}}
          disabled={false}/>
      </Paper>
    )
  }
}
