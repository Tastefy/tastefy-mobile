import React from 'react';
import { compose } from 'recompose'
import Auth from 'storm-auth/src/components/Auth'
import SignInForm from 'storm-auth/src/components/SignInForm'
import SignUpForm from 'storm-auth/src/components/SignUpForm'
import graphcoolSignInWithEmail from 'storm-auth/src/hocs/graphcool/sign-in-email'
import graphcoolSignInWithFacebook from 'storm-auth/src/hocs/graphcool/sign-in-facebook'
import graphcoolSignUp from 'storm-auth/src/hocs/graphcool/sign-up'
import ScreenWrapper from 'storm-common/src/components/ScreenWrapper'
import { loadMainScreen } from '../navigation'

const SignInFormContainer = compose(
  graphcoolSignInWithEmail(),
  graphcoolSignInWithFacebook(['public_profile', 'email']),
)(SignInForm)
const SignUpFormContainer = compose(
  graphcoolSignUp(),
)(SignUpForm)


class AuthScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true,
  }
  handleClose = () => {
    this.props.navigator.dismissModal({
      animationType: 'slide-down',
    });
  }
  render() {
    return (
      <ScreenWrapper>
        <Auth
          backgroundImageSource={{ uri: 'https://unsplash.it/300x600' }}
          logoSource={{ uri: 'https://unsplash.it/400x400' }}
          signInContainer={<SignInFormContainer
            onSuccessEmail={this.handleClose}
            onSuccessFacebook={this.handleClose}
          />
          }
          signUpContainer={<SignUpFormContainer
            onSuccess={() => alert('Success Sign Up')}
          />
          }
          onClose={this.handleClose}
        />
      </ScreenWrapper>
    );
  }
}

export default AuthScreen;
