// This scene will be the player entering the cave and getting three options.

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import caveInside from '../images/insideCave.png';

function SecondScene() {
	return (
		<div className="introBox">
			<img className="mainPhoto" src={caveInside} alt="Inside Cave" />

			<p>
				You enter a cave that has three paths! <br />
				<br />
				You notice a sign that reads:
				<ul>
					<li>
						'To see work history, to the{' '}
						<Link to="/left-room" className="btn2">
							left
						</Link>{' '}
						go ye!'
					</li>
					<li>
						'For moving light, take the path on the{' '}
						<Link to="/right-room" className="btn2">
							right
						</Link>
						!'
					</li>
					<li>
						'To be well read, travel{' '}
						<Link to="/straight" className="btn2">
							straight
						</Link>{' '}
						ahead!'
					</li>
				</ul>
				<p>
					To leave the cave, click{' '}
					<Link to="/exit-cave" className="btn2">
						here
					</Link>
					!
				</p>
			</p>
		</div>
	);
}

export default SecondScene;
