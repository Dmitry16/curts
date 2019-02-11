import React from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import Navigation from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Home from 'material-ui/svg-icons/action/home';
import { Link } from 'react-router-dom';
import Code from 'material-ui/svg-icons/action/code';


export default class MenuDrawer extends React.Component<{}, {open}> {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <Navigation
          style={{color:'white'}}
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <AppBar
          iconElementLeft={
            <IconButton>
              <NavigationClose
                style={{color:'white'}}
                onClick={this.handleToggle}
              />
            </IconButton>}
        />

        <Link style={{textDecoration:'none'}} to="/about">
          <MenuItem primaryText="About" onClick={ this.handleClose } leftIcon={<RemoveRedEye />} />
        </Link>
        <Link style={{textDecoration:'none'}} to="/">
          <MenuItem primaryText="Main Page"  onClick={ this.handleClose } leftIcon={<Home />} />
        </Link>
        <a  style={{textDecoration:'none'}} href='https://github.com/Dmitry16/tripsorter/tree/master'>
          <MenuItem primaryText="Source Code" leftIcon={
              <Code />}
          />
        </a>
        </Drawer>
      </div>
    );
  }
}
