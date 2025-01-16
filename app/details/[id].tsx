import React from 'react'
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

interface Params {
    id: string;
}

export default function DetailsScreen() {
    
    const { id } = useLocalSearchParams()

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Wpisane w formularzu ID to: { id }</Text>
        </View>
    )
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

  }

});