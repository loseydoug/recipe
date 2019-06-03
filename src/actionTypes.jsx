export const CHANGE_RECIPE = "CHANGE_RECIPE";
export const GET_RECIPES = "GET_RECIPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const ADD_INGREDIENT_TO_CABINET = "ADD_INGREDIENT_TO_CABINET";
export const REMOVE_INGREDIENT_FROM_CABINET = "REMOVE_INGREDIENT_FROM_CABINET";
export const CLEAR_INGREDIENTS_FROM_CABINET = "CLEAR_INGREDIENTS_FROM_CABINET";
export const ADD_ALT_INGREDIENT = "ADD_ALT_INGREDIENT";
export const REMOVE_ALT_INGREDIENT = "REMOVE_ALT_INGREDIENT";
export const ADD_SUPPORTING_INGREDIENT = "ADD_SUPPORTING_INGREDIENT";
export const REMOVE_SUPPORTING_INGREDIENT = "REMOVE_SUPPORTING_INGREDIENT";
export const ADD_OPTIONAL_INGREDIENT = "ADD_OPTIONAL_INGREDIENT";
export const REMOVE_OPTIONAL_INGREDIENT = "REMOVE_OPTIONAL_INGREDIENT";
export const ADD_STEP = "ADD_STEP";
export const REMOVER_STEP = "REMOVE_STEP";


export const getRecipes = () => {
	return { type: GET_RECIPES };
} 

export const changeRecipe = recipe => {
	return { type: CHANGE_RECIPE, recipe }
};

export const addRecipe = recipe => {
	return { type: ADD_RECIPE, recipe };
}

export const deleteRecipe = id => {
	return { type: DELETE_RECIPE, id };
}

export const addAltIngredient = ingredient => {
	return { type: ADD_ALT_INGREDIENT, ingredient }
};

export const addSupportingIngredient = ingredient => {
	return { type: ADD_SUPPORTING_INGREDIENT, ingredient }
};

export const addOptionalIngredient = ingredient => {
	return { type: ADD_OPTIONAL_INGREDIENT, ingredient }
};

export const addStep = step => {
	return { type: ADD_STEP, step }
};

export const removeAltIngredient = ingredient => {
	return { type: REMOVE_ALT_INGREDIENT, ingredient }
};

export const removeSupportingIngredient = ingredient => {
	return { type: REMOVE_SUPPORTING_INGREDIENT, ingredient }
};

export const removeOptionalIngredient = ingredient => {
	return { type: REMOVE_OPTIONAL_INGREDIENT, ingredient }
};

export const removeStep = step => {
	return { type: REMOVE_OPTIONAL_INGREDIENT, step }
};

export const addIngredientToCabinet = ingredient => {
	return { type: ADD_INGREDIENT_TO_CABINET, ingredient }
};

export const removeIngredientFromCabinet = ingredient => {
	return { type: REMOVE_INGREDIENT_FROM_CABINET, ingredient }
};

export const clearIngredientsFromCabinet = () => {
	return { type: CLEAR_INGREDIENTS_FROM_CABINET }
};