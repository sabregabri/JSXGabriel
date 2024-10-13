import React, { useState} from 'react';
import { StyleSheet } from 'react-native';
import { PaperProvider, Text, TextInput } from 'react-native-paper';

const estils = {
  text: {
    color: 'red',
    fontSize: 25,
  },
};


const dades = (fieldsArray, estil, colorText) => {

  return (
    fieldsArray.map((field, index) => (
      <TextInput
        key={index}
        placeholder={field}
        style={estil}
        placeholderTextColor={colorText}
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

const estilSeleccionat = (estil) => {return estil === 'florida' ? styles.florida : styles.upv};
const colorSeleccionat = (estil) => {return estil === 'florida' ? '#FFFFFF' : '#F5B041'};

//App Principal
const App = () => {
  const fields = ['Email', 'Nom'];
  const [estil, setEstil] = useState('florida');

  return (
    <PaperProvider>
      {nom("Gabriel Carmona")}
      {dades(fields, estilSeleccionat(estil),colorSeleccionat(estil))}
    </PaperProvider>
  );
};

//Estils
const styles = StyleSheet.create({
  upv:{
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
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
