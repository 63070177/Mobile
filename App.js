import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import MyNavigator from "./navigation/MyNavigator"


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'snow'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyNavigator/>
    </NavigationContainer>
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
