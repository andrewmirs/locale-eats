import React, { Component } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Generate from './src/components/Generator/Generator';
import Input from './src/components/Input/Input';
import Landing from './src/components/LandingPage/Landing';
import ListItem from './src/components/Generator/ListItem';
import ModalComponent from './src/components/Modal/Modal';
import Nav from './src/components/Nav/Nav';
import PickerComponent from './src/components/Picker/Picker';
import Wingsuit from './assets/images/wingsuit.jpg';

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
            {/* <PickerComponent />
            <ActivityIndicator 
              size="large"
              color="purple"
              animating={this.state.loading}
            /> */}
            {/* <Image 
              source={{uri: 'https://images.vailresorts.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_1000/v1/Whistler%20Blackcomb/Products/Home/Whistler%20Homepage%20Photo%20Image%20Promotion%203.png'}}
              style={styles.wingsuit}
              resizeMode="contain"
              onLoadEnd={() => alert('Image loaded')}
            /> */}
            <ModalComponent />

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
  wingsuit: {
    width: '100%',
    height: 300,
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




