import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text} from 'react-native';



export default function TabTwoScreen() {
  const router = useRouter()
  const [id, setId] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<null | string>(null)

  const validateId = (id: string): boolean => {
    console.log(id)
    const pattern = /^[0-9]*$/;
    const includeNumber = id.match(pattern) //return an array or null if no matches 
    if (includeNumber === null) {
      setErrorMessage('ID powinno zawierać tylko cyfry od 0 do 9.')
      return false
    }
    if (id.length <3) {
      setErrorMessage('Wpisz ID o długości min. 3 znaków')
      return false
    }
    return true
  };

  const handlePress = (): void => {
    if (validateId(id)) {
      setErrorMessage(null);
      setId("");
      router.push(`/details/${id}`)
    } 
  };

  const handlePressClean = (): void => {
    setId("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Wprowadź ID:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setId}
        value={id}
      />
      {errorMessage ?
        <Text style={styles.error}>{errorMessage}</Text> : null
            }
      <Button
        title='Przejdź do ID'
        onPress={() => handlePress()
        }
      />
      <View style={styles.cleanButton}>
      <Button
        title='Wyczyść ID'
        onPress={() => handlePressClean()
        }
      />
      </View>

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
    color: '#333',
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
    marginBottom: 10

  },
  cleanButton: {
    marginTop: 10,
  }


});
