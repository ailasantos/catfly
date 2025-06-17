import{View, Pressable, StyleSheet} from 'react-native';
import MaterialIcoin from '@expo/vector-icons/MaterialIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label:string;
    onPress:() =>void;
};

export default function IconButton({icon, label, onPress}: Props){

  return(
            <Pressable style={styles.IconButton} onPress={onPress}>
                <MaterialIcoin nome="add" size={38} color="#25292e"/>
                <text style={styles.IconButtonLabel}>{label}</text>
            </Pressable>
       
    );
}
 
const styles = StyleSheet. create({
    IconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconButtonLabel:{
        color: '#fff',
        marginTop: 12,
    },
});