import React from "react"

export default function Character({ characterData }) {
	if (!characterData.noData) {
		switch (true) {
			case characterData.hat === undefined:
				throw Error("No hat value provided.")
			case characterData.shield === undefined:
				throw Error("No shield value provided.")
			case characterData.weapon === undefined:
				throw Error("No weapon value provided.")
			case characterData.name === undefined:
				throw Error("No name value provided.")
			case typeof characterData.name !== "string":
				throw Error("Invalid name value.")
			case characterData.name.trim().length < 2:
				throw Error("Invalid name length.")
			case typeof characterData.hat !== "boolean":
				throw Error("Invalid hat value.")
			case typeof characterData.shield !== "boolean":
				throw Error("Invalid shield value.")
			case characterData.weapon !== "sword" && characterData.weapon !== "staff":
				throw Error("Invalid weapon value.")
		}
	}

	const hat = characterData.hat ? "hat" : "noHat"
	const shield = characterData.shield ? "shield" : "noShield"
	const weapon = characterData.weapon

	const characterImageUrl = characterData.noData
		? null
		: "./images/" + hat + "-" + shield + "-" + weapon + ".png"

	return (
		<div className="character-container">
			<img src={characterImageUrl} />
			<div className="character-name">{characterData.name}</div>
		</div>
	)
}
