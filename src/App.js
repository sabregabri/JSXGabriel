import {PaperProvider, Text} from "react-native-paper";

const estils = {
  text:{
  color: 'red',
  fontSize: 25,
  }
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
</PaperProvider>
);
}
export default App;