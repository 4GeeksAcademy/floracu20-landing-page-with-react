import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Container from "./Container.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<div className="container">
				<Container/>
				<div className="d-flex mt-3" style={{"justifyContent": "space-between"}} id="cards">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
