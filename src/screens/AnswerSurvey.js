import React from 'react'
import ScreenWrapper from 'storm-common/src/components/ScreenWrapper'
import AnswerSurvey from '../modules/survey/containers/AnswerSurvey'
import { Style } from '../resources/style'
import ModalWrapper from '../modules/common/components/ModalWrapper'
import { dismissModal } from '../navigation'

class AnswerSurveyScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true,
    navBarTextColor: Style.navBarTextColor,
    navBarBackgroundColor: Style.navBarBackgroundColor,
  }

  render() {
    return (
      <ModalWrapper onPressClose={dismissModal}>
        <AnswerSurvey surveyId={this.props.surveyId} voucherId={this.props.voucherId} />
      </ModalWrapper>
    )
  }
}

export default AnswerSurveyScreen
