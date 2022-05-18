import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Realm from "realm";

const Cat = {
  name: "Cat",
  properties: {
    _id: "objectId",
    name: "kittycat",
    age: "18",
    type: "string",
  },
};
// open a local realm with the 'Cat' schema
const realm = await Realm.open({
  schema: [Cat],
});

const cats = realm.objects("Cat");

export default function App() {
  return (
    <View style={styles.container}>
      <Text>There are ${cats.length} cats</Text>
      <Text>Amogus</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
