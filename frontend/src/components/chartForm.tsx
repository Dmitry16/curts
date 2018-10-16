import React, { Component, Fragment } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
// import { Checkbox } from './checkBox'
// import { Input, Button, Message } from 'semantic-ui-react'

const renderCheckbox = props => {
  return (
      <input
        {...props.input}
        type="checkbox"
        checked={props.input.value}
      />
  );
}

const submit = (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: 'CURRENCY_CHECKED',
      resolve,
      reject
    })
  }).catch((error) => {
    throw new SubmissionError(error);
  })
}


const ChartForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Field
          name="checkbox"
          component={renderCheckbox}
          onChange={ console.log('CurrencyWithCheckBox', props.CurrencyWithCheckBox) }
        />
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'ChartForm'
})(ChartForm)
