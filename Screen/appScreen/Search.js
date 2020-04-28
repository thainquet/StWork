import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  Picker,
  Modal,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Card, Avatar } from 'react-native-elements'
import { quanNoiThanh as quan_huyen, posts as baiDang } from '../../dummyData'

import { TouchableOpacity } from 'react-native';

const URL = 'https://raw.githubusercontent.com/madnh/hanhchinhvn/master/dist/quan_huyen.json'

const Search = ({ navigation }) => {
  const [quanHuyen, setQuanHuyen] = useState(quan_huyen)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState("Tất cả")
  const screenHeight = Dimensions.get('window').height
  return (
    <>
      <View>
        <ScrollView>
          <View>
            <Modal
              animationType="slide"
              visible={modalVisible}
              presentationStyle="fullScreen"
            >
              <View style={{ flex: 1 }} >

                <Picker
                  selectedValue={selectedValue}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  {quanHuyen.map(i => <Picker.Item label={i.name} value={i.name} key="i.code" />)}
                </Picker>
                <Button style={{ position: 'absolute', top: 0, left: 0, width: '50%' }} onPress={() => setModalVisible(false)} title="Close" />
              </View>
            </Modal>
            <Text>
              Homepage
          </Text>
            <Text>
              Homepage
          </Text>
            <Text>{selectedValue}</Text>
            <Button title="Open Modal"
              // onPress={() => navigation.navigate('AuthNavigation')} />
              onPress={() => setModalVisible(true)} />
          </View>
          <View style={{ flex: 1,
                  backgroundColor: '#c7eef5'
                  }}>
            {baiDang && baiDang.map(i => (
              <View key={i.id}>
                <View style={{
                  marginTop: '5%',
                  width: 500,
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignContent: 'stretch'
                }}>
                  <Avatar
                  style={{
                    marginLeft: '1%',
                    flex: 2,
                    width: 100,
                    height: 100,
                  }}
                    source={{
                      uri: i.avatar,
                    }}
                  />
                  <View style={{                    
                  marginLeft: '5%',
                  marginRight: '10%',
                   flex: 6 ,
                  }}>
                  <Text style={{
                   flexWrap: "wrap",
                   fontSize: 20
                   }}>
                    {i.title}
                    </Text>
                    </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default Search