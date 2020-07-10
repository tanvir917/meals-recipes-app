import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId);
            console.log('====================================');
            console.log(existingIndex);
            console.log('====================================');
            if (existingIndex >= 0) {//item already exist
                const updatedFavMeals = [ ...state.favouriteMeals];
                updatedFavMeals.splice(existingIndex, 1);//remove the item
                return { ...state, favouriteMeals: updatedFavMeals };
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favouriteMeals: state.favouriteMeals.concat(meal)}
                console.log('====================================');
                console.log('adding to fav');
                console.log('====================================');
            }
        default:
            return state;
    }
}

export default mealsReducer;