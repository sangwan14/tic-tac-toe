import { useState } from 'react';

export default function Setup() {
    return (
        <div className="setup">
            <div className="chooseplayertype">
				<h2>Player 1 (X):</h2>
				<div className="selecttype">
					<div className="selection human one">Human</div>
					<div className="selection ai one">AI</div>
				</div>
			</div>
			<div className="chooseplayertype">
				<h2>Player 2 (O):</h2>
				<div className="selecttype">
					<div className="selection human two">Human</div>
					<div className="selection ai two">AI</div>
				</div>
			</div>
			<div className="startbuttondiv">
				<button className="startgame">Start Game</button>
			</div>
        </div>
    )
}