import React from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native'
import { TouchableRipple, Button, Paragraph } from 'react-native-paper'

export default ListCharacters = (props) => (
  <View>
    {props.data.map((character, i) => (
      <TouchableRipple 
        key={i}
        onPress={() => props.handleClick(2, character.id)}
      >
        <View
        style={styles.card}
        >
          <Image 
            source={{ uri: character.thumbnail.path+'.'+character.thumbnail.extension }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{character.name}</Text>
            <Paragraph style={styles.content}>
              {character.description ? character.description : 'No description.'}
            </Paragraph>
          </View>
        </View>
      </TouchableRipple>
    ))}
  </View>
)

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  image: {
    width: 160,
    minHeight: 140
  },
  cardContent: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingHorizontal: 6,
    textAlign: 'justify'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    fontSize: 14,
  },
  idCharacter: {
    fontSize: 12,
    color: "#777",
  }
})