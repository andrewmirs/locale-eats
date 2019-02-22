import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Generate from './src/components/Generator/Generator';
import Input from './src/components/Input/Input';
import Landing from './src/components/LandingPage/Landing';
import ListItem from './src/components/Generator/ListItem';
import Nav from './src/components/Nav/Nav';

class App extends Component {

  state = {
    appName: 'Secret Spot',
    random: [2, 93],
  }

  onAddRandom = () => {
    let randomNum = Math.floor(Math.random() * 1000)
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum]
      }
    })
  }

  onItemDelete = (i) => {
    const newArray = this.state.random.filter((item, index) => {
      return i !== index;
    });
    this.setState({
      random: newArray
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav appName={this.state.appName} />
        <Generate add={this.onAddRandom} />
        <ListItem items={this.state.random} delete={this.onItemDelete} />

        <Input />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  }
});

export default App;




