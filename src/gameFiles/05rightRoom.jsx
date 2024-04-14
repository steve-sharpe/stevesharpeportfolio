import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hcs from '../images/hcs.png';

function FifthScene() {
	return (
		<div className="introBox">
			<a
				href="https://www.hulkshow.com"
				target="_blank"
				rel="noreferrer noopener"
				title="Hulk Caesar Show"
			>
				<img className="mainPhoto" src={hcs} alt="Steve's Media Room" />
			</a>
			<h1>The Media Room!</h1>
			<p>
				Steve records podcasts under the name 'Hulk Caesar' and has produced
				almost 200 hour long episodes.
				<br /> <br />
				Click the logo for more!
			</p>
			<Link to="/inside-cave">
				<Button variant="primary">RETURN</Button>
			</Link>
		</div>
	);
}

export default FifthScene;
