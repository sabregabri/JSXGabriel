import {PaperProvider, Text} from "react-native-paper";

const nom = (textAMostrar)=>{
  return(
    <Text variant="displayMedium">{textAMostrar}</Text>
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