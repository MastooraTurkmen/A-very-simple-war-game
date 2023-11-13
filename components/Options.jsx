import React from "react"
import { nanoid } from "nanoid"

export default function Options({ characterData }) {
	const attackOptions = characterData.attackOptions

	if (attackOptions === undefined) {
		throw Error("Abilities data not provided.")
	}

	if (!Array.isArray(attackOptions)) {
		throw Error("Invalid data type provided to options.")
	}

	if (
		attackOptions.filter(
			(item) => typeof item !== "string" || item.trim().length === 0
		).length > 0
	) {
		throw Error("Invalid entries in array provided to options.")
	}

	if (attackOptions.length !== 6) {
		throw Error("Invalid number of abilities!")
	}

	const options = attackOptions.map((option) => {
		return (
			<li className="option" key={nanoid()}>
				{option}
			</li>
		)
	})

	const optionsGroupOne = options.slice(0, 3)
	const optionsGroupTwo = options.slice(3, 6)

	return (
		<div className="options-container">
			<h3>Attack Options</h3>
			<div>
				<ul>{optionsGroupOne}</ul>

				<ul>{optionsGroupTwo}</ul>
			</div>
		</div>
	)
}
