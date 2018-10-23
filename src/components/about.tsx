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
      <Paper style={styles.mainPaperStyle} zDepth={1} >
        <h3 style={styles.hStyle}>About the Curts App.</h3>
        <p style={styles.pStyle}>
          This is an easily scalable (due to the flux application architecture) single-page,
          responsive, progresive web app.
          <ul>
          <h4 style={styles.hStyle}>The tech stack used in development:</h4>
            <li>React.JS (v.16)</li>
            <li>Redux</li>
            <li>React Router</li>
            <li>Webpack</li>
            <li>Redux Sagas</li>
            <li>CSS Modules</li>
            <li>Styled Components</li>
            <li>Material-UI</li>
          </ul>
        </p>
        <IconButton iconClassName="muidocs-icon-custom-github"
          iconStyle={{}}
          disabled={false}/>
      </Paper>
    )
  }
}
