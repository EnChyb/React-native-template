import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text} from 'react-native';



export default function TabThreeScreen() {
  const [email, setEmail] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<null | string>(null)

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handlePress = (): void => {
    if (validateEmail(email)) {
      alert(`Cześć ${email}`);
      setErrorMessage(null);
      setEmail('');
    } else {
      setErrorMessage('Proszę wprowadzić poprawny adres email.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Wprowadź email:</Text>
      <TextInput
        style={styles.input}
        placeholder='Imię'
        placeholderTextColor="#888"
        onChangeText={setEmail}
        value={email}
      />
      {errorMessage ?
        <Text style={styles.error}>{errorMessage}</Text> : null
      }
      <Button
        title='Wyślij'
        onPress={handlePress}
      />

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:20, 

  },
  label: {
    fontSize: 18,
    marginBottom: 10, 

  },
  error: {
    color: 'red',
    marginBottom: 10,

  },
  input: {
    height: 40, 
    borderColor: '#ccc',
    borderRadius: 16,
    borderWidth: 1, 
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#fff', 

  }, 


});
