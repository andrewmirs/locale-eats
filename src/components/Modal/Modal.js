import React, { Component } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

class ModalComponent extends Component {
    
    state = {
        modal: false,
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal ? true : false,
        })
    }

    render(){
        return(
            <View style={{ width: '100%' }}>
                <Button 
                    title="Open Modal"
                    onPress={this.toggleModal}
                />

                <Modal
                    visible={this.state.modal}
                    animationType={'slide'}
                    onRequestClose={this.toggleModal}
                    onShow={() => {
                        alert('Modal is being shown!')
                    }}
                >
                    <View style={styles.modal}>
                        <Text>My modal component</Text>
                    </View>
                    <Button 
                        title="Close Modal"
                        onPress={this.toggleModal}
                    />
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        marginTop: 20,
        backgroundColor: 'purple',
    },

});

export default ModalComponent;