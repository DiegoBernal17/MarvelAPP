import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Avatar, Card, Paragraph } from 'react-native-paper'
import ReturnButton from './ReturnButton'

const CreditScreen = (props) => (
  <View>
    <ReturnButton returnAction={props.returnAction} />
    <Card style={styles.card}>
      <Card.Title title="Acerca de la APP" title="Créditos" left={(props) => <Avatar.Icon {...props} icon="face" />} />
      <Card.Content>
        <Paragraph>
          Hecha por Diego Ivan Padilla Bernal de 23 años usando la API de Marvel (https://developer.marvel.com/) y desarrollada en javascript con React Native. 
        </Paragraph>
      </Card.Content>
    </Card>
    <Text style={styles.textEmail}>
      Correo: diego.bernal17@gmail.com
    </Text>
  </View>
)

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 50,
    marginTop: 60,
    marginBottom: 4
  }, 
  textEmail: {
    textAlign: 'center'
  }
})

export default CreditScreen