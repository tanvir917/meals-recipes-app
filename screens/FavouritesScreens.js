import React from 'react';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';

const FavouritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favouriteMeals);

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

export default FavouritesScreen;