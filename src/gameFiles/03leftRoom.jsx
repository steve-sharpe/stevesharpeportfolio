import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import working from '../images/working.png';

function ThirdScene() {
	return (
		<div className="introBox">
			<a
				href="https://hulkshow.wordpress.com/steve-sharpe-resume/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img className="mainPhoto" src={working} alt="Steve's Work History" />
			</a>
			<h1>Work History</h1>
			<p>
				You have stumbled upon Steve's resume!
				<br /> Dare you take a peek? <br /> <br />
				Click the image to view Steve's resume!
			</p>

			<Link to="/inside-cave">
				<Button variant="primary">RETURN</Button>
			</Link>
		</div>
	);
}

export default ThirdScene;
