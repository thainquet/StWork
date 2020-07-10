import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import data from '../../data/allJobs'
import AsyncStorage from '@react-native-community/async-storage';

const getMyStringValue = async () => {
  try {
    return await AsyncStorage.getItem('@favorite')
  } catch (e) {
    // read error
  }
}

const Favorite = ({ navigation }) => {
  const [favor, setFavor] = useState()
  useEffect(() => {
    getMyStringValue().then((res) => setFavor(JSON.parse(res)))
  })
  return (
    <>
      <View style={{ backgroundColor: '#a7e9ff' }}>
        <ScrollView style={{ paddingTop: 20, paddingBottom: 20, height: '100%' }}>
          <View>
            {favor !== undefined && favor.length > 0 ? (favor.map(i => (
              <TouchableOpacity key={i.id} onPress={() => {
                navigation.push('Detail', { id: i.id })
              }}>
                <View style={{
                  marginTop: '5%',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignContent: 'stretch'
                }}>
                  <View style={{
                    marginLeft: '5%',
                    marginRight: '5%',
                    padding: '5%',
                    flex: 6,
                    borderWidth: 1,
                    backgroundColor: 'white'
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
                        fontSize: 16
                      }}>
                        Ngày hết hạn ứng tuyển: {i.dateExpired}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))) : <View style={{ marginTop: 20, height: 500 }}>
                <Text style={{ fontSize: 40, textAlign: 'center', padding: 10 }}>
                  Không có mục ưa thích nào!
              </Text>
              </View>}
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default Favorite