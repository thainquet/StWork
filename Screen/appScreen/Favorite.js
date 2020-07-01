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
import axios from 'axios'
const JOBS_URL = "http://10.0.2.2:5000/getJobs"


const Favorite = ({ navigation }) => {
  const [favor, setFavor] = useState(baiDang)
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(JOBS_URL)
      let result = []
      res.data.data.forEach(i => {
        result.push({
          id: i[0],
          title: i[1],
          content: i[2],
          company: i[3],
          contactName: i[4],
          salary: i[5],
          address: i[6],
          dateExpired: i[7]
        })
      })
      setFavor(result)
    }
    getData()
  })
  return (
    <>
      <View style={{ backgroundColor: '#a7e9ff' }}>
        <ScrollView>
          <View>
            {favor.length > 0 ? (favor.map(i => (
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