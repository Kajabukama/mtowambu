import React from 'react';
import { Link } from 'react-router-dom';

function SocialNetwork() {
	return (
		<div className="attr-nav sm-no-margin sm-margin-70px-right xs-margin-65px-right ml-auto">
			<ul className="top-social-icon">
				<li>
					<Link to="#">
						<i className="fab fa-facebook-f"></i>
					</Link>
				</li>
				<li>
					<Link to="#">
						<i className="fab fa-twitter"></i>
					</Link>
				</li>
				<li>
					<Link to="#">
						<i className="fab fa-google-plus-g"></i>
					</Link>
				</li>
				<li>
					<Link to="#">
						<i className="fab fa-linkedin-in"></i>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default SocialNetwork;