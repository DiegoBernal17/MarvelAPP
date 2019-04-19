import React from 'react'
import { List } from 'react-native-paper'

const ListExtra = (props) =>  (
    <List.Accordion
      title={props.title}
      left={props => <List.Icon {...props} icon="folder" />}
    >
      { props.items.map((comic, i) => (
          <List.Item 
            key={i}
            left={props_2 => <List.Icon {...props_2} icon={props.icon} />}
            title={comic.name} 
          />
        ))
      }
      {
        props.items.length == 0 && (
          <List.Item 
            left={props_2 => <List.Icon {...props_2} icon="sentiment-very-dissatisfied" />}
            title="No hay información"
          />
        )
      }
    </List.Accordion>
)
export default ListExtra