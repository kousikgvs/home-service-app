import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import { useEffect } from 'react'
import { Image } from 'react-native'
import Colors from '../../utils/Colors'

const BusinessCard = () => {
    const [businessList, setBusinessList] = useState([]);
    const getBusinessLists = () => {
        GlobalApi.getBusinessLists().then(res => {
            console.log("response", res.businessLists);
            setBusinessList(res?.businessLists)
        })
    }

    useEffect(() => {
        getBusinessLists();
    }, [])

    return (
        <View>
            <Text style={styles.heading}>Business Card</Text>
            <FlatList
                data={businessList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 20, display: "flex", flexDirection: "row", gap: 25, alignItems: "center" }}>
                        <View style={{ display: "flex", flexDirection: "column", backgroundColor: Colors.WHITE  , borderRadius:20 , padding:15 , gap:3}}>
                            <View style={{ padding: 10 }}>
                                <Image
                                    source={{ uri: item?.images?.url }}
                                    style={styles.CategoriesImage}
                                />
                            </View>
                            <Text>Name : {item?.name}</Text>
                            <Text>Work : {item?.about}</Text>
                            <Text style={{backgroundColor:Colors.PRIMARY , color:Colors.WHITE , padding:5 , fontWeight:"800" , alignSelf:"flex-start" , borderRadius:10}}>{item.category.name}</Text>
                        </View>
                    </View>
                )}
            />

        </View>
    )
}

export default BusinessCard

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        marginBottom: 10,
    },
    CategoriesImage: {
        width: 200,
        height: 140,
    }
})