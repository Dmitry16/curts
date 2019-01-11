import React, { Component, Fragment } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
// import { Input, Button, Message } from 'semantic-ui-react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const submit = ({ appKey = 'd934bced1d4d402891512ca4937298a9' }, dispatch, props) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: 'AUTH',
      appKey,
      resolve,
      reject
    })
  })
  // .then(console.log('submit:::', props))
  .catch((error) => {
    throw new SubmissionError(error);
  })
}
// appKey = 'd934bced1d4d402891512ca4937298a9';

const AuthForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Field
          name="appKey"
          component={renderTextField}
          label="AppKey"
        />
      </div>
      <div>
        <RaisedButton type="submit">
          Submit
        </RaisedButton>
      </div>
    </form>
  )
}

const validate = values => {
  const errors = {}
  const requiredField = 'appKey'

  if(!values['appKey'])
    errors['appKey'] = 'Required'

  return errors
}

export default reduxForm({
  form: 'AuthorisationForm',
  validate
})(AuthForm)
