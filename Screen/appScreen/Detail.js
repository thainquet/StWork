import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import data from '../../data/allJobs'
import URL from '../../config'

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@favorite', value)
    } catch (e) {
        // saving error
    }
}

const getMyStringValue = async () => {
    try {
        return await AsyncStorage.getItem('@favorite')
    } catch (e) {
        // read error
    }
}

const Detail = ({ route }) => {
    const navigation = useNavigation()
    const { id } = route.params
    const [allJobs, setAllJobs] = useState(data.filter(i => i.id == id))
    const [btnAdd, setBtnAdd] = useState(true)
    getMyStringValue().then(res => {
        let data = JSON.parse(res)
        if (data.find(i => i.id === id)) {
            setBtnAdd(false)
        }
    })
    const savedThis = async (id) => {
        let oldFav = await getMyStringValue()
        let tempArr = []
        JSON.parse(oldFav).forEach(i => {
            tempArr.push(i)
        })
        tempArr.push(data.filter(post => post.id === id)[0])
        await AsyncStorage.setItem('@favorite', JSON.stringify(tempArr))
        navigation.goBack()
    }
    const deleteThis = async (id) => {
        let oldFav = await getMyStringValue()
        let tempArr = JSON.parse(oldFav).filter(i => i.id !== id)
        await AsyncStorage.setItem('@favorite', JSON.stringify(tempArr))
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
                                                fontSize: 28
                                            }}>
                                                {i.title}
                                            </Text>

                                            <Text>{"\n"}</Text>

                                            <Text style={{
                                                flexWrap: "wrap",
                                                fontSize: 18
                                            }}>
                                                Mô tả: {i.content}
                                            </Text>

                                            <Text>{"\n"}</Text>

                                            <Text style={{
                                                flexWrap: "wrap",
                                                fontSize: 18
                                            }}>
                                                Địa chỉ: {i.address}
                                            </Text>

                                            <Text>{"\n"}</Text>

                                            <Text style={{
                                                flexWrap: "wrap",
                                                fontSize: 18
                                            }}>
                                                Công ty: {i.company}
                                            </Text>


                                            <Text>{"\n"}</Text>

                                            <Text style={{
                                                flexWrap: "wrap",
                                                fontSize: 18
                                            }}>
                                                Người liên hệ: {i.contactName}
                                            </Text>

                                            <Text>{"\n"}</Text>

                                            <Text style={{
                                                flexWrap: "wrap",
                                                fontSize: 16
                                            }}>
                                                Mức lương: {i.salary} vnđ
                                            </Text>

                                            <Text>{"\n"}</Text>

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
                    <View style={{ alignItems: 'center' }}>
                        {btnAdd ? (
                            <TouchableOpacity
                                onPress={() => savedThis(id)}
                                style={{
                                    fontSize: 50,
                                    height: 60,
                                    backgroundColor: "pink",
                                    borderRadius: 15,
                                    width: '50%',
                                    marginTop: 10,
                                    alignItems: 'center',
                                    padding: 20,
                                    marginBottom: 50
                                    // margin: '50%'
                                }}>
                                <Text>
                                    Thêm vào mục ưa thích
                            </Text>
                            </TouchableOpacity>
                        ) : (
                                <TouchableOpacity
                                    onPress={() => deleteThis(id)}
                                    style={{
                                        fontSize: 50,
                                        height: 60,
                                        backgroundColor: "pink",
                                        borderRadius: 15,
                                        width: '50%',
                                        marginTop: 10,
                                        alignItems: 'center',
                                        padding: 20,
                                        marginBottom: 50
                                        // margin: '50%'
                                    }}>
                                    <Text>
                                        Xóa khỏi mục ưa thích
                            </Text>
                                </TouchableOpacity>
                            )}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Detail