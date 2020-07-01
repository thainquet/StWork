import React, { useState, useEffect } from 'react';
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
import axios from 'axios'
const JOBS_URL = "http://10.0.2.2:5000/getJobs"


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
    const [allJobs, setAllJobs] = useState()
    useEffect(() => {
        const getData = async () => {
            try {
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
                setAllJobs(result.filter(post => post.id === id))
            } catch (e) {
                console.log(e)
            }
        }
        getData()
    })
    const savedThis = (id) => {
        storeData(JSON.stringify(baiDang.filter(post => post.id === id)))
        console.log(allJobs)
        navigation.goBack()
    }
    return (
        <View style={{ backgroundColor: '#a7e9ff' }}>
            <ScrollView style={{ paddingTop: 20, paddingBottom: 20, height: '100%' }}>
                <View>
                    <View>
                        {allJobs !== undefined ? allJobs.map(i => (
                            <View key={i.id}>
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
                            </View>
                        )) : (
                                <View>
                                    <Text>
                                        Updating
                                </Text>
                                </View>
                            )}
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