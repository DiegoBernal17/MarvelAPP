import React from 'react';
import { Text, View } from 'react-native'
import { Button, Card, Paragraph, List } from 'react-native-paper'
import ListExtra from './ListExtra'
import ReturnButton  from './ReturnButton'

const Character = (props) => {
    const character = props.data;
    return (
    <View>
      <ReturnButton returnAction={props.returnAction} />
      <Card>
        <Card.Title title={character.name} />
        <Card.Content>
          <Paragraph>{character.description ? character.description : 'No description'}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: character.thumbnail.path+'.'+character.thumbnail.extension }} />
      </Card>


      <List.Section title="Contenido extra">
        <ListExtra 
          icon="import-contacts"
          title="Comics en los que apareció"
          items={character.comics.items}
        />
        <ListExtra 
          icon="tv"
          title="Series en las que apareció"
          items={character.series.items}
        />
      </List.Section>
    </View>
  )
}

export default Character