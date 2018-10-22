
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { hideInitialDialog } from 'actions/initialDialogActions';

export default class InitialDialog extends React.Component {
  state = {
    open: true,
  };

  // componentDidMount(){
  //   this.setState({open: this.props.initialDialog});
  // }

  // componentWillUnmount(){
  //   this.props.dispatch(hideInitialDialog());
  // }

  handleStartTripSorter = () => {
    this.setState({open: false,
                  startTripSorter: true,
    });
  };

  handleStartReadAbout = () => {
    this.setState({open: false,
                  startReadAbout: true,
    });
  };

  render() {
    const actions = [
      <Link to='/'>
        <FlatButton
          label="Lounch TripSorter App"
          primary={true}
          onClick={this.handleStartTripSorter}
        >
        </FlatButton>
      </Link>,
      <Link to='/about'>
        <FlatButton
          label="Read About"
          primary={true}
          disabled={true}
          onClick={this.handleStartReadAbout}
        />
      </Link>,
    ];

      return (
        <div>
          <Dialog
            title="Welcome to TripSorter!"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
            What would you like to start with?
          </Dialog>
        </div>
      );
  }
}
