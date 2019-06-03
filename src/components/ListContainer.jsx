import React from "react"

const ListContainer = ({inputField, removeItem}) => {
	const list = ["item1"];
	return <div className="recipe-list">
		{list.map(item => {
			return <p>{item}<button>X</button></p>
			
		})}
	</div>
}

export default ListContainer;