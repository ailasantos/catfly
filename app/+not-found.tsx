import {  View, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title: 'Oops! Não encontrado' }}></Stack.Screen>
    <View style={styles.container }>
      <Link href= "/" style={styles.button}>
      Go back to the home screen!
      </Link> 
    </View>
    </>
  );
}
const styles = StyleSheet. create ({
  container:{
        flex: 1,
        backgroundColor: '#1B1F4A',
        justifyContent: "center",
        alignItems: "center",
  },
  text:{
      color: 'white'
   },
   button:{
    fontSize:20,
    textDecorationLine:'underline',
    color: 'white',
   }
});