import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

const Navigation = (props) => (
  <View style={styles.navigation}>
    <Button
      mode="contained"
      color="#ccc"
      icon="navigate-before"
      onPress={() => props.changeList(false)}
      disabled={props.offset <= 0}
    />
    <Button
      mode="contained"
      color="#ccc"
      icon="navigate-next"
      onPress={() => props.changeList(true)}
    />
  </View>
)

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default Navigation