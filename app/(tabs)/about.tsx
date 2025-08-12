import { Text, View, StyleSheet } from "react-native";
export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>A Lua muda de forma porque vemos diferentes partes iluminadas pelo Sol.
O ciclo tem quatro fases principais:{'\n'}

Nova: invisível, tempo de recomeço.{'\n'}

Crescente: a luz aumenta, simboliza crescimento.{'\n'}

Cheia: totalmente iluminada, é plenitude.{'\n'}

Minguante: a luz diminui, é tempo de recolhimento.{'\n'}

Um ciclo eterno de luz e sombra, como a própria vida..</Text>
            
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
        fontSize: 30,
        fontFamily: "Dancing Script",  
        textAlign: 'center',
    },
   
});