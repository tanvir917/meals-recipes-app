import { Platform } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';


//mapping
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: {
        screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen 
}, {
    //mode: 'modal',
    //initialRouteName: 'Categories',// default navigation
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white': Colors.primaryColor,
        headerTitle: 'A Screen'
    }
});

export default createAppContainer(MealsNavigator);