import {PaperProvider, Text} from "react-native-paper";

const nom = ()=>{
  return(
    <Text variant="displayMedium">Gabriel Carmona</Text>
  );
}
const App = () => {
return (
<PaperProvider>
  {nom()}
</PaperProvider>
);
}
export default App;