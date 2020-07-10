import React from 'react';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const FavouritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favouriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>No favourite meals found. Start adding some!</DefaultText>
            </View>
        )
    }

    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    );
};

FavouritesScreen.navigationOptions =  (navData) => {
    return {
        headerTitle: 'Favourites!',
        headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>)
    }
}

const styles = StyleSheet.create(
    { content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    } }
)

export default FavouritesScreen;