import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
        height: 90,
        paddingTop: 36,
        backgroundColor: '#003767',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: '#f9ca24',
        fontSize: 24
    }
});

export default Header;