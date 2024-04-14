import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import keyin from '../images/keyin.png';

function FourthScene() {
	return (
		<div className="introBox">
			<a
				href="https://keyin.com/programs/software-development"
				target="_blank"
				rel="noreferrer noopener"
				title="Keyin College Software Development"
			>
				<img className="mainPhoto" src={keyin} alt="Steve's Education" />
			</a>
			<h1>Steve's education!</h1>
			<p>
				Steve is in his 2nd semester of the Software Development program at
				Keyin College! <br /> <br /> Click the image for course info!
			</p>
			<Link to="/inside-cave">
				<Button variant="primary">RETURN</Button>
			</Link>
		</div>
	);
}

export default FourthScene;
