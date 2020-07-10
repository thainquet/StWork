import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Button,
  Modal,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-community/picker'
import { TouchableOpacity } from 'react-native';
import data from '../../data/allJobs'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Search = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState("Tất cả")
  const [itemTimeRequired, setItemTiemRequired] = useState("Tất cả")
  const [allPosts, setAllPosts] = useState(data)
  const allSalary = data.map(i => i.salary)
  const uniqueSalary = allSalary.filter(function (item, pos) {
    return allSalary.indexOf(item) == pos;
  })
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
                  <Text style={{ fontSize: 20, height: 50, width: 150, margin: 10 }}>Mức Lương</Text>
                  <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="Tất cả" value="Tất cả" />
                    {uniqueSalary.map((i, index) => <Picker.Item label={i} value={i} key={index} />)}
                  </Picker>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 20, height: 50, width: 150, margin: 10 }}>Thời gian làm việc</Text>
                  <Picker
                    selectedValue={itemTimeRequired}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue) => setItemTiemRequired(itemValue)}
                  >
                    <Picker.Item label="partime" value="partime" />
                    <Picker.Item label="fulltime" value="fulltime" />
                    <Picker.Item label="Tất cả" value="Tất cả" />
                  </Picker>
                </View>
                <Button style={{ position: 'absolute', top: 0, left: 0, width: '50%' }}
                  onPress={() => {
                    setModalVisible(false)
                    if (itemTimeRequired !== "Tất cả" && selectedValue !== "Tất cả") {
                      let tempArr = data.filter(i => i.salary === selectedValue)
                      setAllPosts(tempArr.filter(i => i.timeRequired === itemTimeRequired))
                    }
                    if (itemTimeRequired !== "Tất cả" && selectedValue === "Tất cả") {
                      setAllPosts(data.filter(i => i.timeRequired === itemTimeRequired))
                    }
                    if (itemTimeRequired === "Tất cả" && selectedValue !== "Tất cả") {
                      setAllPosts(data.filter(i => i.salary === selectedValue))
                    }
                    if (itemTimeRequired === "Tất cả" && selectedValue === "Tất cả") {
                      setAllPosts(data)
                    }
                  }}
                  title="Lọc" />
              </View>
            </Modal>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, margin: 10 }}>Mức lương: </Text>
              <Text style={{ fontSize: 20, margin: 10 }}>{selectedValue}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, margin: 10 }}>Yêu cầu thời gian: </Text>
              <Text style={{ fontSize: 20, margin: 10 }}>{itemTimeRequired}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Button style={{ margin: 10 }} title="Thay đổi điều kiện lọc"
                onPress={() => setModalVisible(true)} />
            </View>
          </View>
          <View style={{
            // flex: 1,
            backgroundColor: '#c7eef5',
            paddingTop: 10
          }}>
            {allPosts.length > 0 ? (allPosts.map(i => (
              <TouchableOpacity key={i.id} onPress={() => navigation.push('Detail', { id: i.id })}>
                <View style={{
                  marginTop: '5%',
                  width: '100%',
                  borderBottomWidth: 1,
                  paddingBottom: 20
                }}>
                  <View style={{
                    marginLeft: '5%',
                    marginRight: '10%',
                    flex: 6,
                  }}>
                    <View>
                      <Text style={{
                        flexWrap: "wrap",
                        fontSize: 26,
                        color: 'green'
                      }}>
                        {i.title}
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}>
                        <FontAwesome name='money' size={32} />
                        <Text style={{
                          flexWrap: "wrap",
                          fontSize: 18,
                          padding: 15
                        }}>{i.salary} vnđ</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}>
                        <FontAwesome name='clock-o' size={32} />
                        <Text style={{
                          flexWrap: "wrap",
                          fontSize: 18,
                          padding: 15
                        }}>{i.timeRequired}</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}>
                        <FontAwesome name='address-book-o' size={32} />
                        <Text style={{
                          flexWrap: "wrap",
                          fontSize: 18,
                          padding: 15
                        }}>{i.address}</Text>
                      </View>
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