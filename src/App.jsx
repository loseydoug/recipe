import React from 'react';
import './App.css';

import Slideout from './components/Slideout.jsx';
import RecipeInput from './components/RecipeInput.jsx';
import RecipeMultiInput from './components/RecipeMultiInput.jsx';
import ListContainer from './components/ListContainer.jsx';

function App() {
  return (
    <div className="App">
      <Slideout isExpanded="true" />
      <div className="recipe-form">
        <RecipeInput inputName="recipe-name" inputLabel="Name:" />
        <RecipeInput inputName="main-ingredient" inputLabel="Main Ingredient:" />

        <RecipeMultiInput inputName="alt-ingredients" inputLabel="Alt Ingredients:" />
        <ListContainer />

        <RecipeMultiInput inputName="supporting-ingredients" inputLabel="Supporting Ingredients:" />
        <ListContainer />

        <RecipeMultiInput inputName="optional-ingredients" inputLabel="Optional Ingredients:" />
        <ListContainer />
      </div>
    </div>
  );
}

// const mapStateToProps = state => ({
//   altIngredients: state.altIngredients, state.visibilityFilter)
// })

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

export default App;
