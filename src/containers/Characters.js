import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper'
import axios from 'axios';
import md5 from 'md5'
import ListCharacters from '../components/ListCharacters'
import Character from '../components/Character'
import Navigation from '../components/Navigation'
import CreditsScreen from '../components/CreditsScreen'

export default class Characters extends Component {

  state = {
    data: false,
    dataCharacter: false,
    screen: 1,
    offset: 0,
    isLoading: true
  }

  APIData = (id = false, offset = false) => {
    this.setState({ isLoading: true })
    const date = new Date()
    const timestamp = date.getTime()
    const privateky = '1d8903e20fe40f434742f4b5f970eaec824a01f6'
    const apikey = 'bed0cc15491615a8cee84dea0af50834'
    const hash = md5(timestamp+privateky+apikey)
    let offset_val = this.state.offset
    if (offset) {
      offset_val += offset
    }
  
    let url
    if(id) {
      url = 'http://gateway.marvel.com/v1/public/characters/'+id+'?ts='+timestamp+'&apikey='+apikey+'&hash='+hash;
    } else {
      url = 'http://gateway.marvel.com/v1/public/characters?offset='+offset_val+'&ts='+timestamp+'&apikey='+apikey+'&hash='+hash;
    }
    
    axios.get(url)
    .then(response => {
      if(id) {
        this.setState({ dataCharacter: response.data.data.results[0], isLoading: false, offset: offset_val })
      } else {
        this.setState({ data: response.data.data.results, isLoading: false, offset: offset_val })
      }
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.APIData()
  }

  handleClick = (screen, id = false) => {
    this.setState({screen})
    if(id) {
      this.APIData(id);
    }
  }

  changeList = (value) => {
    let val = value ? 20 : (this.state.offset > 0) ? -20 : 0
    this.APIData(false, val)
  }

  render() {
    if(this.state.isLoading) {
      return <ActivityIndicator/>
    }

    if(this.state.screen == 1) {
      return (
        <ScrollView>
          <View style={styles.container}>
              <ListCharacters
                data={this.state.data}
                handleClick={this.handleClick}
                
            />
            <Navigation 
              changeList={this.changeList}
              offset={this.state.offset}
            />
            <Button
              onPress={() => this.handleClick(3)}
            >
              Creditos
            </Button>
          </View>
        </ScrollView>
      );
    } else if(this.state.screen == 2) {
      return (
        <ScrollView>
          <View style={styles.container}>
            { this.state.dataCharacter ? (
              <View>
                <Character
                  data={this.state.dataCharacter}
                  returnAction={this.handleClick}
                />
              </View>
            ) : <ActivityIndicator/>}
          </View>
        </ScrollView>
      )
    } else {
      return <CreditsScreen returnAction={this.handleClick} />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 10
  }
})