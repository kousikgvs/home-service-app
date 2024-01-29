import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

export default function App() {

  const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.CLERK_PUBLISHABLE_KEY}>
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
