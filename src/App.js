import React, { useState} from 'react';
import { StyleSheet } from 'react-native';
import { PaperProvider, Text, TextInput } from 'react-native-paper';

const estils = {
  text: {
    color: 'red',
    fontSize: 25,
  },
};

const dades = (fieldsArray) => {
  return (
    fieldsArray.map((field, index) => (
      <TextInput
        key={index}
        label={field}
        value=""
        onChangeText={() => {}}
      />
    ))
  );
};

const nom = (textAMostrar) => {
  return (
    <Text style={estils.text}>{textAMostrar}</Text>
  );
};

const App = () => {
  const fields = ['Email', 'Nom'];

  return (
    <PaperProvider>
      {nom("Gabriel Carmona")}
      {dades(fields)}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  upv:{
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
    },
    florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    },
});


export default App;
