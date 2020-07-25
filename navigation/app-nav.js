import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';
import Search from '../Screen/appScreen/Search'
import Favorite from '../Screen/appScreen/Favorite'
import Detail from '../Screen/appScreen/Detail'
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import URL from '../config'
const changepass_url = URL + '/changePass'


const getMyStringValue = async () => {
  try {
    return await AsyncStorage.getItem('@username')
  } catch (e) {
    // read error
  }
}

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator()
const HomepageDetailStack = createStackNavigator()
const FavoriteDetailStack = createStackNavigator()

const changePw = () => {
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [pw, setPw] = useState('')
  const [newPw, setNewPw] = useState('')
  AsyncStorage.getItem('@username').then(res => setUsername(res))
  const handleClick = async () => {
    try {
      let data = JSON.stringify({
        username,
        password: pw,
        newpassword: newPw
      })
      let res = await axios.post(changepass_url, data)
      if (res.data.code !== 200) {
        Alert.alert("Error!", res.data.message)
      } else {
        navigation.goBack()
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          editable={false} selectTextOnFocus={false}
          keyboardType="email-address"
          underlineColorAndroid='transparent'
          defaultValue={username}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          placeholder="Mật khẩu cũ"
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          onChangeText={(pw) => setPw(pw)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          placeholder="Mật khẩu mới"
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          onChangeText={(pw) => setNewPw(pw)}
        />
      </View>

      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={handleClick}>
        <Text style={styles.loginText}>Xác nhận</Text>
      </TouchableHighlight>
    </View>
  )
}
const HomeStackScreen = () => {
  return (
    <HomepageDetailStack.Navigator initialRouteName="Home">
      <HomepageDetailStack.Screen name="Home" component={Search} options={{ headerShown: false }} />
      <HomepageDetailStack.Screen name="Detail" component={Detail} options={{
        title: 'Chi tiết',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleAlign: 'center'
      }} />
      <HomepageDetailStack.Screen name="ChangePass" component={changePw} options={{
        title: 'Đổi mật khẩu',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleAlign: 'center'
      }} />
    </HomepageDetailStack.Navigator>
  );
}

const FavoriteStackScreen = () => {
  return (
    <FavoriteDetailStack.Navigator initialRouteName="Favorite">
      <FavoriteDetailStack.Screen name="Favorite" component={Favorite} options={{
        title: 'Mục ưa thích',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleAlign: 'center'
      }} />
      <FavoriteDetailStack.Screen name="Detail" component={Detail} options={{
        title: 'Chi tiết',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleAlign: 'center'
      }} />
    </FavoriteDetailStack.Navigator>
  )
}


const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 25,
          paddingTop: 8,
          width: '100%',
          height: '100%',
          borderRightWidth: 1
        }
      }} initialRouteName="searchTab">
      <Tab.Screen name="Tìm kiếm" component={HomeStackScreen} />
      <Tab.Screen name="Mục ưa thích" component={FavoriteStackScreen} />
    </Tab.Navigator>
  )
}

const DrawerContent = () => {
  const [username, setUsername] = useState('')
  const navigation = useNavigation()
  getMyStringValue().then((res) => setUsername(res))
  return (
    <View style={{ justifyContent: 'center' }}>
      <View style={{ margin: 10, borderBottomWidth: 1 }}>
        <Text style={{
          margin: 10,
          fontWeight: 'bold',
          fontSize: 28
        }}>Xin chào, {username}!</Text>
      </View>
      <View style={{ flexDirection: 'row', margin: 10, alignSelf: 'center' }}>
        <View style={{ margin: 5 }}>
          <Button color="#a4c936" title="Đổi mật khẩu"
            onPress={() => navigation.navigate('ChangePass')} /></View>
        <View style={{ margin: 5 }}>
          <Button title="Đăng xuất"
            onPress={() => navigation.navigate('AuthNavigation')} />
        </View>
      </View>
    </View>
  );
}

const AppNavigation = () => {
  return (
    <>
      <Drawer.Navigator drawerContent={() => <DrawerContent />}>
        <Drawer.Screen name="HomeTab" component={HomeTab} />
        {/* <Drawer.Screen name="ChangePass" component={changePw} /> */}
      </Drawer.Navigator>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

export default AppNavigation