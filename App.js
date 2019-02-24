import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class App extends Component {

  state = {
    appName: 'Secret Spot',
    random: [2, 93],
    loading: false,
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
        <Text>My app</Text>
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
  },
});

export default App;




