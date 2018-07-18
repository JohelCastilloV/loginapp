import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import * as actions from '../../actions';


const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => {
   return (
  <TextField
    label={label} id={label}
    margin="normal"
    {...input}
    {...custom}
  />);
}
class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
          <Field
            required
            name="email"
            type="text"
            component={renderTextField}
            label="Email"
            autoComplete="none"
          />
          </div>
          <div>
          <Field
            required
            name="password"
            type="password"
            label="Password"
            component={renderTextField}
            autoComplete="none"
          />
          </div>
        <div>{this.props.errorMessage}</div>
        <Button type="submit" variant="contained" color="primary">Sign Up!</Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);