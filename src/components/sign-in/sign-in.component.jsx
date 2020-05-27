import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = ({ dispatch }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(emailSignInStart({ email, password }));
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          id='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          id='password'
          handleChange={handleChange}
          value={password}
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
};

export default connect(null)(SignIn);
