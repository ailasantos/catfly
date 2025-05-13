import { Text, View, StyleSheet } from "react-native";
import ImageViewer from '@/components/ImageViewer';
import { Image } from "expo-image";
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('@/assets/images/lu.jpg');

export default function Index() {
  const pickImageAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:['images'],
      allowsEditing: true,
      quality:1,
    });

    if (!result .canceled){
      console.log(result);
   } else{
    alert('você não selecionou imagem nenhuma');
   }
  };
  return (
    <View style={styles.container}>


      <View style={styles.imageContainer}>
        <Text style={styles.text}>A lua revela o que está além</Text>        
        <ImageViewer imgSource={PlaceholderImage}/>

      </View>
        <Button theme="primary" label="Escolha uma foto"/>
        <Button label="Use esta foto"/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1F4A',
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: "Dancing Script"
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

 footerContainer:{
    flex:1 / 3,
    alignItems: 'center',
 }
});