import {PaperProvider, Text, TextInput} from "react-native-paper";

const estils = {
  text:{
  color: 'red',
  fontSize: 25,
  }
}
const dades = () =>{
  return(
    <TextInput
      label="Email"
      value=""
      onChangeText={text => setText(text)}
    />
  )
}
const nom = (textAMostrar)=>{
  return(
    <Text style={estils.text}>{textAMostrar}</Text>
  );
}
const App = () => {
return (
<PaperProvider>
  {nom("Gabriel Carmona")}
  {dades()}
</PaperProvider>
);
}
export default App;