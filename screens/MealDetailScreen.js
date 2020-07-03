import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Details Screen!</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop();
                //props.navigation.replace('CategoryMeals')//ex- using login screen
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen;