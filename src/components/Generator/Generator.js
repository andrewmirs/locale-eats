import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const Generate = (props) => (
    <TouchableWithoutFeedback
        onPress={()=> {
            props.add()
        }}
        // onLongPress={()=>alert('Long press')}
        // onPressIn={()=>alert('On press in')}
        // onPressOut={()=>alert('On press out')}
        // delayLongPress={5000}
    >
        <View style={styles.generator}>
            <Text>Add number</Text>
        </View> 
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    generator: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#00bdc4',
        width: '100%',
        marginTop: 20,
    }
});

export default Generate;