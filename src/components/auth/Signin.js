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
class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            name="email"
            required
            type="email"
            component={renderTextField}
            label="Email"
            id="email"
            autoComplete="none"
          />
        </div>  
        <div>
          <Field
            required
            name="password"
            type="password"
            component={renderTextField}
            label="Password"
            autoComplete="none"
          />
        </div>  
        <div>{this.props.errorMessage}</div>
        <Button type="submit" variant="contained" color="primary">Sign In!</Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);

