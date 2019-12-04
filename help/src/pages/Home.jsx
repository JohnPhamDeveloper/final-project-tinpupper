import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setIsLoggedIn, setUsername } from "../redux/actions/userActions";
import { listBusinesses } from "../redux/actions/businessActions";

const options = {
	withCredentials: true
};

const Home = ({ dispatch, businesses, isBusiness, isLoggedIn, username }) => {
	React.useEffect(() => {
		dispatch(listBusinesses());
	}, []);

	return (
		<div>
			<div>
				<h2>HELP! A yelp like application.</h2>
			</div>
			<div>
				{isLoggedIn && !isBusiness && (
					<h3>
						Hello, {username} <br />
					</h3>
				)}
				{isLoggedIn && isBusiness && (
					<h3>Welcome to your business account, {username}</h3>
				)}
			</div>

			{businesses.map((business, i) => (
				<div key={i} className="display-row padding-2-p">
					<Card style={{ width: "18rem" }}>
						<Card.Img src={require("../img/Mcdonalds.jpg")} />{" "}
						{/* will be replaced by business.img if thats doable*/}
						<Card.Body>
							<Card.Title>{business}</Card.Title>{" "}
							{/* will be replaced by business.name or something*/}
							<Card.Text>
								{/* will be replaced by business.text */}
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							{!isBusiness &&
							<Button
								variant="primary"
								onClick={<Link to="/writereview" />}
							>
								Write a review
							</Button>
							}
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = state => ({
	businesses: state.businessReducer.businesses,
	isLoggedIn: state.userReducer.isLoggedIn,
	isBusiness: state.userReducer.isBusiness
});

export default connect(mapStateToProps)(Home);
