import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screen/Homepage'

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Home'
  }
)

export default AppNavigation