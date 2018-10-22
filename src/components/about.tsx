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
        <h3 style={styles.hStyle}>About the TripSorter Web App.</h3>
        <p style={styles.pStyle}>
          This is an easily scalable (due to the flux application architecture) single-page,
          responsive, progresive web app.
          <p> User can choose
          a travel route by setting up a starting point, destination point and a travel mode
          (cheap or fast). All searches are saved to the local storage. So when the page is
          reloaded it shows the last search was made by the user. To delete the saved searches
          user has to click on the "Reset" button.
          </p>
          <p>
          The app gets data in JSON format by an API call to an external resorse
          (in this case it is emulated).
          Then filters the received data and composes a route accordingly to the options submited
          by user.
          </p>
          <ul>
          <h4 style={styles.hStyle}>The tech stack used in development:</h4>
            <li>React.JS (v.16)</li>
            <li>Redux</li>
            <li>React Router</li>
            <li>Webpack</li>
            <li>Axios</li>
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
