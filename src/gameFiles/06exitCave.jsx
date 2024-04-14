import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ExitScene() {
	return (
		<div className="introBox">
			<iframe
				width="250"
				height="250"
				src="https://www.youtube.com/embed/rErax5i8y7c?si=2ewuSCSkiCgs1HAW"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>

			<h1>You made it out!</h1>
			<p>
				Let Steve know!
				<br /> <br />
				<a href="mailto:steve.ej.sharpe@gmail.com">steve.ej.sharpe@gmail.com</a>
				<br /> <br />
				<a
					href="https://linktr.ee/hulkcaesar"
					target="_blank"
					rel="noopener noreferrer"
				>
					linktr.ee/hulkcaesar
				</a>
			</p>
			<Link to="/">
				<Button variant="primary">START OVER</Button>
			</Link>
		</div>
	);
}

export default ExitScene;
