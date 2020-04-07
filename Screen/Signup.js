import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <Button
          title='Go to Login'
          onPress={() => navigation.navigate('Login')}
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

export default Signup