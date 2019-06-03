import React from "react"

const RecipeMultiInput = ({inputName, inputLabel}) => {
	return <div className="recipe-input">
		<label for={inputName}>{inputLabel}</label>
		<input name={inputName} />
		<button type="submit">Add {inputLabel}</button>
	</div>
}

export default RecipeMultiInput;