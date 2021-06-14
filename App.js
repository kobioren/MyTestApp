/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { Button, Platform, StyleSheet, Text, View, Alert, Image } from 'react-native';

 import Draggable from 'react-native-draggable';

 const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
   android:
     'Double tap R on your keyboard to reload,\n' +
     'Shake or press menu button for dev menu',
 });

 type Props = {};
 export default class App extends Component<Props> {

   componentDidMount() {

     console.log("Component just loaded");
     
   }


   render() {
     return (
       <View style={styles.container}>
         <Text style={styles.welcome}>Welcome to swipe React Native!</Text>
         <Text style={styles.instructions}>{instructions}</Text>

         <Draggable x={75} y={100} renderSize={56} renderColor='black' renderText='A' isCircle onShortPressRelease={() => alert('A touched!!')} />
         <Draggable x={100} y={100} renderColor='red' renderText='B' onShortPressRelease={() => alert('B touched!!')} />
         <Draggable onShortPressRelease={() => alert('React Button touched!!')}>
           <Image
             style={styles.logo}
             source={require('./img/logo.png')}
           />
         </Draggable>

       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
   logo: {
     width: 66,
     height: 58,
   }
 });
