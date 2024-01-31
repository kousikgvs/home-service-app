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
                    <View style={{ marginRight: 20, display: "flex", flexDirection: "row", gap: 20, alignItems: "center" }}>
                        <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <View style={{ backgroundColor: Colors.PRIMARY, borderRadius: 30, padding: 10 }}>
                                <Image
                                    source={{ uri: item?.images?.url }}
                                    style={styles.CategoriesImage}
                                />
                            </View>
                            <Text>{item?.name}</Text>
                            <Text>{item?.about}</Text>
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
        width: 60,
        height: 60,
    }
})