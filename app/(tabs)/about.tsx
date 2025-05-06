import { Text, View, StyleSheet } from "react-native";
export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>A lua brilha com mistérios—venha desvendá-los.</Text>
            
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
    text: {
        color: 'white',
        fontSize: 17,
        fontFamily: "Dancing Script"  

    },
   
});