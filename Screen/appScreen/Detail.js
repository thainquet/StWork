import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { Card, Avatar } from 'react-native-elements'
import { quanNoiThanh as quan_huyen, posts as baiDang } from '../../dummyData'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';


const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('favorite', value)
    } catch (e) {
        // saving error
    }
}

const Detail = ({ route }) => {
    const navigation = useNavigation()
    const { id } = route.params
    const savedThis = (id) => {
        storeData(JSON.stringify(baiDang.filter(post => post.id === id)))
        navigation.goBack()
    }
    return (
        <View>
            <ScrollView style={{ paddingTop: 20, paddingBottom: 20, height: '100%' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        {baiDang && baiDang.filter(i => i.id == id).map(i => (
                            <View key={i.id}>
                                <View style={{
                                    width: 400,
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
                                        <Text style={{
                                            flexWrap: "wrap",
                                            fontSize: 20
                                        }}>
                                            {i.title}
                                        </Text>
                                        <Text style={{
                                            fontSize: 16
                                        }}>
                                            Mô tả: {i.content.length > 200 ? i.content.substring(0, 200) : i.content}
                                        </Text>
                                        <Text style={{
                                            fontSize: 16
                                        }}>
                                            Ngày đăng: {i.createAt}
                                        </Text>
                                        <Text style={{
                                            fontSize: 16
                                        }}>
                                            Ngày hết hạn: {i.expiredAt}
                                        </Text>
                                        <Text style={{
                                            fontSize: 16
                                        }}>
                                            Người đăng: {i.postAuthor}
                                        </Text>
                                        <Text style={{
                                            fontSize: 16
                                        }}>
                                            Mức lương: {i.salary} vnđ
                                        </Text>

                                        <View style={{ flexDirection: 'row' }}>
                                            {i.timeRequired === 'partime' ? (<TouchableOpacity style={{ borderWidth: 1, padding: 5, width: 70, marginTop: 10, backgroundColor: '#a78ccc' }}>
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
                            </View>
                        ))}
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => savedThis(id)} style={{ fontSize: 20, height: 60, backgroundColor: "pink", borderRadius: 15, padding: 10 }}>
                            <Text>
                                get notice
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Detail