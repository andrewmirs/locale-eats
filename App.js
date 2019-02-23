import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Generate from './src/components/Generator/Generator';
import Input from './src/components/Input/Input';
import Landing from './src/components/LandingPage/Landing';
import ListItem from './src/components/Generator/ListItem';
import Nav from './src/components/Nav/Nav';
import PickerComponent from './src/components/Picker/Picker';

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
        <ScrollView 
          style={{width: '100%'}}
          // onContentSizeChange={(w,h) => alert(h)}
          // onMomentumScrollBegin={()=> alert('begin')}
          // onMomentumScrollEnd={()=> alert('end')}
          // onScroll={() => alert('scrollling')}
        >
          <View style={styles.wrapper}>
            <Generate add={this.onAddRandom} />
            <ListItem items={this.state.random} delete={this.onItemDelete} />

            {/* <Input /> */}
            <PickerComponent />
          </View>
        </ScrollView>
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
  wrapper: {
    flex: 1,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;




