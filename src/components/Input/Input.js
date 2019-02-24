import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

class Input extends Component {

    state = {
        name: '',
        users: ['Joe', 'Tory', 'Francis', 'Alyssa', 'Steve'],
    }

    onAddUser = () => {
        this.setState(prevState => {
            return {
                name: '',
                users: [...prevState.users, prevState.name],
            }
        })
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
                    <View style={styles.buttonContainer}>
                        <Button 
                            title="Register"
                            onPress={this.onAddUser}
                        />
                    </View>
                    {
                        this.state.users.map((user,i) => (
                            <Text key={i} style={styles.users}>{user}</Text>
                        ))
                    }

                </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 15,
    },
    input: {
        width: '100%',
        backgroundColor: '#f2f2f2',
        marginTop: 20,
        fontSize: 20,
        padding: 10,
        borderRadius: 10,
    },
    users: {
        fontSize: 40,
        borderWidth: 1,
        borderColor: '#cecece',
        padding: 10,
        marginBottom: 20,
    },
    wrapper: {
        width: '100%',

    }
});

export default Input;