import React from "react"

const RecipeInput = ({inputName, inputLabel}) => {
	return <div className="recipe-input">
		<label for={inputName}>{inputLabel}</label>
		<input name={inputName} />
	</div>
}

export default RecipeInput;