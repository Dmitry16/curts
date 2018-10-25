import React from 'react';
import AppBar from 'material-ui/AppBar';
import { AppBarStyle } from '../css/mainCSS';
import IconButton from 'material-ui/IconButton';
import Github from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import MenuDrawer from './materialUI/drawer';

export const Header = () => {
  return (
      <AppBar
        style={ AppBarStyle }
        title="Welcome to the Curts- an awsome Fintech App!!!"
        iconElementLeft={<IconButton><MenuDrawer/></IconButton>}
      />
    )
}
export const Footer = () => {
  return (
    <AppBar
      title="Developed by dd77" style={{textAlign:'center',fontSize:'8px'}}>
    </AppBar>
  )
}
