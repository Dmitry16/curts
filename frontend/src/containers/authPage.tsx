//Libs
import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import * as styles from '../css/mainCSS'

// import { Header, Container } from 'semantic-ui-react'
//Components
// import Authorization from '../components/authorization'
import AuthForm from '../components/authForm'
import InitialDialog from '../components/materialUI/initialDialog'

//Material-UI Components
import HorizontalLinearStepper from '../components/stepper'

export default class AuthPage extends Component {
 constructor(props) {
 super(props)
 }

 submit = values => {
   // print the form values to the console
   console.log(values)
 }

 render() {
   // console.log('main page props:',this.props)
   return (
    <Paper style={styles.mainPaperStyle} zDepth={1} >
      <Paper style={styles.protoStyle} zDepth={2} >
        <h3>Please type in your key</h3>
        <AuthForm onSubmit={this.submit} />
      </Paper>
    </Paper>
    )
  }
}
