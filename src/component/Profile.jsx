import logo from '../images/steveSharpePhoto.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FirstScene from '../gameFiles/01firstScene';

function Profile() {
	return (
		<div className="introBox">
			<img className="mainPhoto" src={logo} alt="Steve Sharpe" />
			<h1 className="h1Intro">Steve Sharpe</h1>
			<h2 className="h2Intro">Media Specialist</h2>
			<h2 className="h2Intro">Software Developer in Training</h2>
			<Link to="/outside-cave">
				<Button variant="primary">STEVE'S MAP</Button>
			</Link>
		</div>
	);
}

export default Profile;
