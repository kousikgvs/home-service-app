import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

export default function App() {
  return (
    <ClerkProvider publishableKey={'pk_test_cmFwaWQtYnVubnktODcuY2xlcmsuYWNjb3VudHMuZGV2JA'}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* Sign in Component */}
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        {/* Sign out Component */}
        <SignedOut>        
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});
