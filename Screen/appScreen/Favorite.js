import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Avatar,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { posts as baiDang } from '../../favorDummy.js'

const getMyStringValue = async () => {
  try {
    return await AsyncStorage.getItem('favorite')
  } catch (e) {
    // read error
  }
}

const Favorite = ({ navigation }) => {
  const [favor, setFavor] = useState(baiDang)
  // useEffect(() => {
  //   getMyStringValue().then(res => {
  //     setFavor(res)
  //     console.log(res)
  //   })
  // })
  return (
    <>
      <View>
        <ScrollView>
          <View>
            {favor.length > 0 ? (favor.map(i => (
              <TouchableOpacity key={i.id} onPress={() => navigation.push('Detail', { id: i.id })}>
                <View style={{
                  marginTop: '5%',
                  width: 500,
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignContent: 'stretch'
                }}>
                  {/* <Avatar
                    style={{
                      marginLeft: '1%',
                      flex: 2,
                      width: 100,
                      height: 100,
                    }}
                    source={{
                      uri: i.avatar,
                    }}
                  /> */}
                  <View style={{
                    marginLeft: '5%',
                    marginRight: '10%',
                    flex: 6,
                  }}>
                    <View>
                      <Text style={{
                        flexWrap: "wrap",
                        fontSize: 18
                      }}>
                        {i.title}
                      </Text>
                      <Text style={{
                        flexWrap: "wrap",
                        fontSize: 16
                      }}>
                        Mức lương: {i.salary} vnđ
                </Text>
                      <Text style={{
                        flexWrap: "wrap",
                        fontSize: 18,
                        color: "black"
                      }}
                      // onPress={() => { Linking.openURL(`tel:${i.phoneNumber}`) }}
                      >
                        {i.phoneNumber}
                      </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      {i.timeRequired === 'Partime' ? (<TouchableOpacity style={{ borderWidth: 1, padding: 5, width: 70, marginTop: 10, backgroundColor: '#a78ccc' }}>
                        <Text>{i.timeRequired}</Text>
                      </TouchableOpacity>) : (<TouchableOpacity style={{ borderWidth: 1, padding: 5, width: 70, marginTop: 10, backgroundColor: '#5eba7d' }}>
                        <Text>{i.timeRequired}</Text>
                      </TouchableOpacity>)}
                      <TouchableOpacity style={{ borderWidth: 1, borderLeftWidth: 0, padding: 5, width: 90, marginTop: 10, backgroundColor: '#e6e6e6' }}>
                        <Text>{i.quan}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))) : <View>
                <Text>
                  Khong co muc ua thich
              </Text>
              </View>}
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default Favorite