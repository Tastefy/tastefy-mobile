import { compose, lifecycle, withProps } from 'recompose'
import withShouldGoToMain from 'storm-foundation/src/hocs/with-should-go-to-main'
import withFirstVisit from 'storm-foundation/src/hocs/with-first-visit'
import withIsAuthenticated from 'storm-auth/src/hocs/graphcool/with-is-authenticated'
import Waypoint from 'storm-foundation/src/components/Waypoint'
import decideNextScreen from 'storm-foundation/src/logic/decide-next-screen'
import Config from '../config'
import { loadMainScreen, loadOnboardingScreen } from '../navigation'


const WaypointScreen = compose(
  withShouldGoToMain,
  withFirstVisit,
  withIsAuthenticated,
  withProps({
    allowGuest: Config.allowGuest,
    loadMainScreen,
    loadOnboardingScreen,
  }),
  lifecycle({
    componentWillReceiveProps: decideNextScreen,
  }),
)(Waypoint)

WaypointScreen.navigatorStyle = {
  navBarHidden: true,
}

export default WaypointScreen
