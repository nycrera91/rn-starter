import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
    const greeting = 'ALperen!';

    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text style={styles.textStyle2}>{greeting}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        color: 'red'
    },
    textStyle2: {
        fontSize: 50,
        color: 'blue'
    }
});

export default ComponentScreen;