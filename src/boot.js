import { Image, StatusBar } from 'react-native'
import createApolloClient from 'storm-system-components/src/apollo'
import createReduxStore from 'storm-system-components/src/redux-store'
import { loadWaypoint } from './navigation'
import rootReducer from './root-reducer'
import registerScreens from './register-screens';
import { Style } from './resources/style'


const DEVELOPMENT_URL = 'http://192.168.1.31:60000/relay/v1/cj9iz5cwo03ap0188e86qfmqy'
const PRODUCTION_URL = 'https://api.graph.cool/relay/v1/cj9izddz55mvr0124usquqjl6'

const apolloClient = createApolloClient({
  config: {
    apollo: {
      developmentUrl: PRODUCTION_URL,
      productionUrl: PRODUCTION_URL,
    },
  },
})


StatusBar.setBarStyle(Style.statusBarColor)
Image.prefetch('https://unsplash.it/600x1200')
const reduxStore = createReduxStore({}, rootReducer)


registerScreens({ reduxStore, apolloClient })
loadWaypoint();
