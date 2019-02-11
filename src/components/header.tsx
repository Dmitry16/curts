import React from 'react';
import AppBar from 'material-ui/AppBar';
import { AppBarStyle } from '../css/mainCSS';
import IconButton from 'material-ui/IconButton';
import Github from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import MenuDrawer from './materialUI/drawer';

function handleClick() {

}
// import IconButtons from './materialUI/iconButtons';
// import IconButton from 'material-ui/IconButton';
// import { ActiveIconStyle1 as iSt } from '../css/mainCSS';
// import FaceIcon from 'mdi-react/FaceIcon';
// import HomeIcon from 'mdi-react/HomeIcon';
// import GithubFaceIcon from 'mdi-react/GithubFaceIcon';
//
// <IconButton iconClassName="muidocs-icon-custom-github" />
// <FaceIcon style={iSt}/>
// <HomeIcon style={iSt}/>
// <GithubFaceIcon style={iSt}/>

// {<span style={styles.title}>Title</span>}

export const Header = () => {
  return (
      <AppBar
        style={ AppBarStyle }
        title="Welcome to the Curts- an Awsome Fintech App!"
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
