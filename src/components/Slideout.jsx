import React from "react"
import chevron from "../icons/right-chevron.svg"

const Slideout = props => {
	console.log(props)
	const slideoutState = props.isExpanded === "true" ? "expanded" : "collapsed";
	const altText = props.isExpanded === "true" ? "collapse" : "expand"
	return <div className={`slideout-nav ${slideoutState}`}>
		<button className="btn action">Add Recipe</button>
		<button className="btn action">Remove Recipe</button>
		<button className={`${slideoutState} btn`}>
			<img src={chevron} alt={`${altText}`} />
		</button>
	</div>
}

export default Slideout;