import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={
            {
                headerShown: false
            }
        }>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: ({ color }) => (<Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Home</Text>),
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Booking" component={BookingScreen}
                options={{
                    tabBarLabel: ({ color }) => (<Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Booking</Text>),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="book" size={24} color="black" />)
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarLabel: ({ color }) => (<Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Profile</Text>),
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="profile" size={24} color="black" />)
                }}
            />
        </Tab.Navigator>
    );
}