import React from "react"
import attackOptionsList from "../data/attackOptionsList"
import namesList from "../data/namesList"

export default function Button({ setCharacterData }) {
	function toggle() {
		setCharacterData((prevData) => {
			function genRanNum(max) {
				return Math.floor(Math.random() * max)
			}

			function flipCoin() {
				return genRanNum(100) < 50 ? true : false
			}

			function getAttackOptions() {
				let optionsListCopy = [...attackOptionsList]
				let newOptionsArray = new Array(6).fill("")
				return newOptionsArray.map((item) => {
					const randomIndex = genRanNum(optionsListCopy.length)
					const cachedName = optionsListCopy[randomIndex]
					optionsListCopy.splice(randomIndex, 1)
					return cachedName
				})
			}

			return {
				hat: flipCoin() ? true : false,
				shield: flipCoin() ? true : false,
				weapon: flipCoin() ? "sword" : "staff",
				stats: {
					hp: genRanNum(100),
					mp: genRanNum(100),
					strength: genRanNum(100),
				},
				attackOptions: getAttackOptions(),
				name: namesList[genRanNum(namesList.length)],
			}
		})
	}

	return <button onClick={toggle}>Toggle</button>
}
