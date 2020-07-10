/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Main from './Main'

console.ignoredYellowBox = ['Require cycle: node_modules/react-native-paper'];

AppRegistry.registerComponent(appName, () => Main);
