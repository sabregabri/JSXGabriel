import React, { useState } from 'react';
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

export default App;
