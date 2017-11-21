import React from 'react';
import ScreenWrapper from 'storm-common/src/components/ScreenWrapper'
import Onboarding from 'storm-onboarding/src/Onboarding'
import Config from '../config'
import { loadAuthScreen, loadMainScreen } from '../navigation'
import { Colors } from '../resources/colors'

const PAGES = [{
  text: 'Texto1',
  imageSource: { uri: 'https://placehold.it/400x400' },
}, {
  text: 'Texto2',
  imageSource: { uri: 'https://placehold.it/400x400' },
}, {
  text: 'Texto3',
  imageSource: { uri: 'https://placehold.it/400x400' },
}]
const LOGO = { uri: 'https://unsplash.it/300x400' }

class OnboardingScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true,
  }

  handleFinishOnboarding = () => {
    if (!Config.allowGuest) {
      loadAuthScreen()
      return
    }
    loadMainScreen()
  }

  render() {
    return (
      <ScreenWrapper>
        <Onboarding
          backgroundColor={Colors.PRIMARY}
          pages={PAGES}
          logoSource={LOGO}
          onFinish={this.handleFinishOnboarding}
          onSkip={this.handleFinishOnboarding}
        />
      </ScreenWrapper>
    )
  }
}


export default OnboardingScreen;
