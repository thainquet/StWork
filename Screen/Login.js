import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
          title='Go to Signup'
          onPress={() => navigation.navigate('Signup')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Login