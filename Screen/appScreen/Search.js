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
  const [itemTimeRequired, setItemTiemRequired] = useState("Tất cả")
  const [allPosts, setAllPosts] = useState(baiDang)
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
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 20, height: 50, width: 150 }}>Vị trí</Text>
                  <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="Tất cả" value="Tất cả" />
                    {quanHuyen.map(i => <Picker.Item label={i.name} value={i.name} key={i.code} />)}
                  </Picker>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 20, height: 50, width: 150 }}>Thời gian làm việc</Text>
                  <Picker
                    selectedValue={itemTimeRequired}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue) => setItemTiemRequired(itemValue)}
                  >
                    <Picker.Item label="Partime" value="Partime" />
                    <Picker.Item label="Fulltime" value="Fulltime" />
                    <Picker.Item label="Tất cả" value="Tất cả" />
                  </Picker>
                </View>
                <Button style={{ position: 'absolute', top: 0, left: 0, width: '50%' }}
                  onPress={() => {
                    setModalVisible(false)
                    if (itemTimeRequired !== "Tất cả" && selectedValue !== "Tất cả") {
                      let tempArr = baiDang.filter(i => i.quan === selectedValue)
                      setAllPosts(tempArr.filter(i => i.timeRequired === itemTimeRequired))
                    }
                    if (itemTimeRequired !== "Tất cả" && selectedValue === "Tất cả") {
                      setAllPosts(baiDang.filter(i => i.timeRequired === itemTimeRequired))
                    }
                    if (itemTimeRequired === "Tất cả" && selectedValue !== "Tất cả") {
                      setAllPosts(baiDang.filter(i => i.quan === selectedValue))
                    }
                    if (itemTimeRequired === "Tất cả" && selectedValue === "Tất cả") {
                      setAllPosts(baiDang)
                    }
                  }}
                  title="Đóng" />
              </View>
            </Modal>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20 }}>Nơi làm việc: </Text>
              <Text style={{ fontSize: 20 }}>{selectedValue}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20 }}>Hình thức: </Text>
              <Text style={{ fontSize: 20 }}>{itemTimeRequired}</Text>
            </View>
            <Button title="Điều kiện lọc"
              // onPress={() => navigation.navigate('AuthNavigation')} />
              onPress={() => setModalVisible(true)} />
          </View>
          <View style={{
            flex: 1,
            backgroundColor: '#c7eef5'
          }}>
            {allPosts.length > 0 ? (allPosts.map(i => (
              <TouchableOpacity key={i.id} onPress={() => navigation.push('Detail', { id: i.id })}>
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
            ))) : (<View style={{ marginTop: 20, height: 500 }}>
              <Text style={{ fontSize: 40, textAlign: 'center' }}>Không có công việc phù hợp!</Text>
            </View>)}
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default Search