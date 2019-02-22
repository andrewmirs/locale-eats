import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class Input extends Component {

    state = {
        name: '',
    }

    onChangeInput = (value) => {
        this.setState({
            name: value,
        })
    }

    render(){
        return (
            <View style={styles.wrapper}>
                <TextInput 
                    value={this.state.name}
                    style={styles.input}
                    onChangeText={this.onChangeInput}
                    multiline={false}
                    maxLength={20}
                    editable={true}
                    autoCapitalize={'words'} // either 'none', 'characters', 'words', or 'sentences'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#f2f2f2',
        marginTop: 20,
        fontSize: 20,
        padding: 10,
        borderRadius: 10,
    },
    wrapper: {
        width: '80%',

    }
});

export default Input;