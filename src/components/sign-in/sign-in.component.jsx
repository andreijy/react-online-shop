import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { dispatch } = this.props;

    dispatch(emailSignInStart({ email, password }));
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { dispatch } = this.props;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            id='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            id='password'
            handleChange={this.handleChange}
            value={this.state.password}
            label='Password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton
              type='button'
              onClick={() => dispatch(googleSignInStart())}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null)(SignIn);
