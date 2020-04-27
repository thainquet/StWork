import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  Modal,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements'
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
        <View>
          {baiDang && baiDang.map(i => (
            <Card key={i.id} title={i.title}>
              <Text>{i.content}</Text>
            </Card>
          ))}
        </View>
        </ScrollView>
      </View>
    </>
  )
}

export default Search