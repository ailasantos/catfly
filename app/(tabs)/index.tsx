import * as ImagePicker from 'expo-image-picker';
import {useState} from "react";

import { Text, View, StyleSheet, ImageSourcePropType } from "react-native";
import ImageViewer from '@/components/ImageViewer';
import { Image } from "expo-image";
import Button from '@/components/Button';
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from '@/components/EmojiList';
import EmojiSticker from '@/components/EmojiSticker';
import { GestureHandlerRootView} from 'react-native-gesture-handler';



const PlaceholderImage = require('@/assets/images/luabrilhante.jpg');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible,setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji]= useState<ImageSourcePropType | undefined>(undefined)

  
   
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('você não selecionou imagem nenhuma');
    }
  };


  const onReset = () =>{
    setShowAppOptions(false);
  };

  const onAddSticker = () =>{
    setIsModalVisible(true);
  };

    const onModalClose = () =>{
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {

  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.text}>A lua revela o que está além</Text>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource ={pickedEmoji} />}
      </View>
      {showAppOptions ? (

        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon ='refresh' label='Reset' onPress={onReset}/>
            <CircleButton onPress={onAddSticker}/>
            <IconButton icon ="save-alt" label="Save" onPress= {onSaveImageAsync}/>
          </View>
        </View>

      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Escolha uma foto" onPress={pickImageAsync} />
          <Button label="Use esta foto" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal = {onModalClose}/>
      </EmojiPicker>
    </GestureHandlerRootView>
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
    fontSize: 25,
    fontFamily: "Dancing Script"
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },

  optionsContainer:{
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems : 'center',
    flexDirection : 'row',
  },

});