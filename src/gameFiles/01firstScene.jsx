import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import caveOutside from '../images/firstScene.png';

function FirstScene() {
	return (
		<div className="introBox">
			<img className="mainPhoto" src={caveOutside} alt="Cave Entrance" />

			<p>
				You follow Steve's map to a hidden cave! <br />
				<br />
				Enter... if you dare!
			</p>
			<Link to="/inside-cave">
				<Button variant="primary">Enter</Button>
			</Link>
		</div>
	);
}

export default FirstScene;
