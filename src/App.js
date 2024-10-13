import React, { useState} from 'react';
import { ScrollView, StyleSheet , View} from 'react-native';
import { PaperProvider, Text, TextInput, Button } from 'react-native-paper';

const estils = {
  text: {
    color: 'blue',
    fontSize: 25,
  },
};

const moduls2Dam = [
  { nom: 'DIN', professor: 'Manel', hores: 120 },
  { nom: 'ADA', professor: 'Roberto', hores: 120 },
  { nom: 'PMDM', professor: 'Paco', hores: 100 },
  { nom: 'PSP', professor: 'Roberto', hores: 60 },
  { nom: 'SGE', professor: 'Belén', hores: 100 },
  { nom: 'Anglés', professor: 'Caterina', hores: 40 },
  { nom: 'EIE', professor: 'Ana', hores: 60 },
  ];
  

const isAdmin = true; //Administrador

const AdminButton = () => { //Boto Admin
  return (
    <Button
      icon="format-list-bulleted"
      buttonColor='blue'
      textColor='white'
      onPress={() => {
      }}
      style={styles.button}
    >
      <Text style={styles.buttonText}>INFORMES</Text>
    </Button>
  );
};

const ModuleInfo = () => {
  return (
  <ScrollView>
    <View>
      {moduls2Dam.map((modul, index) => {
        const displayText = (index + 1) + '\n' + modul.nom + '\n' + modul.professor + '\n' + modul.hores+ ' hores';
        return (
          <Text key={index} style={[styles.modulText, { backgroundColor: index % 2 === 0 ? '#F48FB1' : '#F8BBD0' }]}>
            {displayText}
          </Text>
        );
      })}
    </View>
  </ScrollView>
  );
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
      {isAdmin && AdminButton()}
      {<ModuleInfo></ModuleInfo>}
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
    button: {
      alignItems: 'center',
      padding: 10,
    },
    buttonText: {
      marginLeft: 15,
      color: 'white',
    },
    modulText: {
      fontSize: 16,
      padding: 10,
    },
});


export default App;
