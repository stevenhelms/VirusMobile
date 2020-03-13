import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';


const Header = props => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 70,
        paddingTop: 26,
        backgroundColor: Colors.green,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: Colors.gray,
        fontSize: 24,
        fontFamily: 'oxanium-bold'
    }
});

export default Header;