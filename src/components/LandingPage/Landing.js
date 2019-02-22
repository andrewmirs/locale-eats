import React, { Component } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import logo from '../../../assets/favfood.png';

class Landing extends Component {

    handleShowRegisterController = () => {
        
    }

    render() {
        return (
            <View style={styles.landingPage}>
                <StatusBar barStyle="light-content" />
                <View style={styles.title}>
                    <Text style={styles.titleText}>Local Eats</Text>
                </View>
                {/* <View style={styles.subTitle}>
                    <Text style={styles.subTitleText}>Share the Whereabouts</Text>
                </View> */}
                <View style={styles.iconContainer}>
                    <Image 
                        style={styles.icon}
                        source={logo}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.signInButton}>
                        <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Landing;

