import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Partit= (props) => {
    return(
            <View style={estils.tarjetas}>
                <Text style={estils.textoEquips}>{props.e1} - {props.e2}</Text>
                <Text style={estils.textoResultats}>{props.r1} - {props.r2}</Text>
            </View>

    );
};

/** En aquesta secció, crearem els estils a aplicar als nostres components */
const estils = StyleSheet.create({
    textoEquips: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    textoResultats: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
    },
    tarjetas: {
        backgroundColor: '#BEEE62',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 20,
        margin: 10,
        padding: 10,
    }
})
;
export default Partit;
