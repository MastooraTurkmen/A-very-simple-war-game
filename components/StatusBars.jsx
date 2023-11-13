import React from "react"
import { nanoid } from "nanoid"

export default function StatusBars({ characterData }) {
	const stats = characterData.stats

	if (!characterData.noData) {
		switch (true) {
			case stats === undefined:
				throw Error("No stats data provided.")
			case typeof stats != "object" || Array.isArray(stats):
				throw Error("Invalid stats data.")
			case stats.hp === undefined:
				throw Error("No hp value provided.")
			case stats.mp === undefined:
				throw Error("No mp value provided.")
			case stats.strength === undefined:
				throw Error("No strength value provided.")
			case stats.hp > 100 || stats.hp < 0 || typeof stats.hp != "number":
				throw Error("Invalid hp value.")
			case stats.mp > 100 || stats.mp < 0 || typeof stats.mp != "number":
				throw Error("Invalid mp value.")
			case stats.strength > 100 ||
				stats.strength < 0 ||
				typeof stats.strength != "number":
				throw Error("Invalid strength value.")
		}
	}

	const statBarElements = []

	for (let stat in stats) {
		statBarElements.push(
			<div className="indiv-stat-bar-wrapper" key={nanoid()}>
				<div className="indiv-stat-bar-container">
					<div
						className="stat-bar-fill"
						style={{
							width: `${stats[stat]}%`,
							background: stats[stat] < 50 ? "coral" : "lightgreen",
						}}
					>
						<span>{stats[stat]}</span>
					</div>
				</div>
				<div className="stat-name-container">{stat}</div>
			</div>
		)
	}

	return <div className="overall-status-bars-container">{statBarElements}</div>
}
