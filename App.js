import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Context, { ContextProvider } from './contexts/myContext';

// import pages
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {

  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen options={{ headerShown: false }} name="logged" component={Logged} />
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

function Logged() {

  const MyContext = useContext(Context)

  return(
    <Drawer.Navigator>
      {
        MyContext.tokenUser &&
        <>
          <Drawer.Screen name="home" component={Home} />
          <Drawer.Screen name="about" component={About} />
        </>
      }
      
    </Drawer.Navigator>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <About />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
