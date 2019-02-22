import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ListItem = (props) => {
    return (
        props.items.map((item,i) => (
            <TouchableOpacity 
                key={i}
                onPress={() => props.delete(i)}
                style={styles.listitem}
            >
                <View>
                    <Text>{item}</Text>
                </View>
            </TouchableOpacity>
        ))
    );
}

const styles = StyleSheet.create({
    listitem: {
        backgroundColor: '#cecece',
        alignItems: 'center',
        padding: 10,
        width: '80%',
        margin: 5,
    }
});

export default ListItem;