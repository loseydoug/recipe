export const CHANGE_RECIPE = "CHANGE_RECIPE";
export const GET_RECIPES = "GET_RECIPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const CLEAR_INGREDIENTS = "CLEAR_INGREDIENTS";

export const getRecipes = () { type: GET_RECIPES };

export const changeRecipe = recipe => { type: CHANGE_RECIPE, recipe };

export const addRecipe = recipe => { type: ADD_RECIPE, recipe };

export const deleteRecipe = id => { type: DELETE_RECIPE, id };

export const addIngredient = ingredient => { type: ADD_INGREDIENT, ingredient };

export const removeIngredient = ingredient => { type: REMOVE_INGREDIENT, ingredient };

export const clearIngredients = () => { type: CLEAR_INGREDIENTS };