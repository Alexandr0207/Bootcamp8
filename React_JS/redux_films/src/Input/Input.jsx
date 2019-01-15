import React from 'react';
import { Field, reduxForm } from 'redux-form'

let Input = () => {
  return (
    <div>
      <form>
      <div>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <Field name="firstName" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

Input = reduxForm({
  // a unique name for the form
  form: 'contact'
})(Input)

export default Input;