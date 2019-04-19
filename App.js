import React from 'react';
import { View, StyleSheet } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import Characters from './src/containers/Characters'

export default App = (props) => (
  <PaperProvider theme={theme}>
    <View style={styles.main}>
      <Appbar.Header style={{backgroundColor: "#ED1D24"}}>
        <Appbar.Content 
          title="Personajes de Marvel" 
        />
      </Appbar.Header>
      <Characters/>
    </View>
  </PaperProvider>
)

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#eee",
    flex: 1
  }
})

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ED1D24',
    accent: '#f1c40f',
    background: "#222"
  }
};
