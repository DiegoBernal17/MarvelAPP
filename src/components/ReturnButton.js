import React from 'react'
import { Button } from 'react-native-paper'

const ReturnButton = (props) => (
  <Button
    mode="contained"
    color="#aaa"
    icon="navigate-before"
    onPress={() => props.returnAction(1)}
  >
  Regresar
  </Button>
)
export default ReturnButton