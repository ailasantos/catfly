import {Button, StyleSheet, Text, TextInput, View} from 'react-native'; 
import { useBuscaCep} from  '@/hooks/useBuscaCep'; // Importe o hook 

export default function BuscaCEP() { 
    const { cep, setCep, endereco, buscarCEP}= useBuscaCep(); // Usando a hook 

return ( 
        
    <View style={styles.container}> 
        <Text style={{ color: '#fff'}}>Consulte seu CEP</Text> 

    
        <TextInput 
        style={styles.textinput} 
        value={cep} 
        onChangeText={setCep}
        placeholder = "Digite o CEP" 
        keyboardType="numeric"
        placeholderTextColor="white" 
                 
        />

        <Text>{cep}</Text> 

        <Button 
            title="Buscar" 
            onPress={buscarCEP} 
            
            

            
/> 


 {endereco.logradouro !== '' && ( 
  <View style={styles.result}> 
    <Text style={{ color: 'white' }}>Logradouro: {endereco.logradouro}</Text> 
    <Text style={{ color: 'white' }}>Bairro: {endereco.bairro}</Text> 
    <Text style={{ color: 'white' }}>Cidade: {endereco.localidade}</Text> 
    <Text style={{ color: 'white' }}>Estado: {endereco.uf}</Text> 
  </View> 
)}

</View> 
); 
}
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#1B1F4A' , 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 16, 
  },
  textinput: { 
    width: '80%', 
    borderWidth: 1, 
    borderColor: 'gray', 
    padding: 8, 
    marginVertical: 10,
  },
   
    result: {
    marginTop: 20, 
    padding: 16, 
    borderWidth: 1, 
    borderColor: 'gray', 
    borderRadius: 8, 
  },
});