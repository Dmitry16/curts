import React, { Component, Children } from 'react'
import Paper from 'material-ui/Paper'
import * as styles from '../css/mainCSS'
// import SelectField from 'material-ui/SelectField'
// import MenuItem from 'material-ui/MenuItem'
// import TextField from 'material-ui/TextField'

const style = {
  ...styles.mainPaperStyle,
  flexDirection: 'column',
  width: '50%',
  height: '650px',
}

export default class MainPage extends Component {
  constructor(props) {
    super(props)
  }
 render() {

   let children = Children.map(this.props.children, (child =>
     React.cloneElement((child as any), this.props)
   ))

   return (
    <Paper style={style} zDepth={3} >
      { children }
    </Paper>
    )
  }
}
