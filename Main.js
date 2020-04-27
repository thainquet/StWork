import React from 'react'
import AppContainer from './navigation'
import { Provider as PaperProvider } from 'react-native-paper';

const Main = () => {
  return <PaperProvider><AppContainer /></PaperProvider>
}

export default Main