import { 
	CHANGE_RECIPE,
	GET_RECIPES,
	ADD_RECIPE,
	DELETE_RECIPE,
	ADD_INGREDIENT_TO_CABINET,
	REMOVE_INGREDIENT_FROM_CABINET,
	CLEAR_INGREDIENTS_FROM_CABINET,
	ADD_ALT_INGREDIENT,
	REMOVE_ALT_INGREDIENT,
	ADD_SUPPORTING_INGREDIENT,
	REMOVE_SUPPORTING_INGREDIENT,
	ADD_OPTIONAL_INGREDIENT,
	REMOVE_OPTIONAL_INGREDIENT,
	ADD_STEP,
	REMOVER_STEP
} from './actionTypes'

const initialState = {
	selectedRecipe: {
		id: "",
		name: "",
		mainIngredient: "",
		altIngredientOptions: [],
		supportingIngredients: [],
		optionalIngredients: [],
		type: "",
		steps: [],
		sides: [],
		time: ""
	},
	editingRecipe: {
		name: "",
		mainIngredient: "",
		altIngredientOptions: [],
		supportingIngredients: [],
		optionalIngredients: [],
		type: "",
		steps: [],
		sides: [],
		time: ""
	},
	recipes: [],
	ingredients: []
}

function recipeCabinetReducer(state = initialState, action) {
  switch (action.type) {
  	case CHANGE_RECIPE:
  		return Object.assign({}, state, {
  			selectedRecipe: action.recipe
  		});
  	case GET_RECIPES:
	  	//make api call, stubbed for now
	  	console.log("making api call");
	  	return Object.assign({}, state, {
	  		recipes: [{
	  			id: "recipe1",
	  			name: "recipe 1"
	  		},
	  		{
	  			id: "recipe2",
	  			name: "recipe 2"
	  		}]
	  	});
  	case ADD_RECIPE:
  		return Object.assign({}, state, {
  			selectedRecipe: action.recipe,
  			editingRecipe: initialState.editingRecipe,
  			recipes: [...state.recipes, action.recipe]
  		});
  	case DELETE_RECIPE:

  	case ADD_INGREDIENT_TO_CABINET:
  		return Object.assign({}, state, {
  			ingredients: [...state.ingredients, action.ingredient]
  		});
  	case REMOVE_INGREDIENT_FROM_CABINET:
  		return Object.assign({}, state, {
  			ingredients: [...state.ingredients, action.ingredient]
  		});
  	case CLEAR_INGREDIENTS_FROM_CABINET:
  		return Object.assign({}, state, {
  			ingredients: []
  		});
  	default:
  		return state
  }
}

export default recipeCabinetReducer;