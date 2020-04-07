import { createStackNavigator } from 'react-navigation-stack'
import Login from '../Screen/Login'
import Signup from '../Screen/Signup'

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup }
  },
  {
    initialRouteName: 'Login'
  }
)

export default AuthNavigation