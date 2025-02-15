import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";



//create your first component
const Home = () => {
	return (
   
		<div className="text-center">
				<NavBar/>
				<Jumbotron/>
			<div className="container mt-3">
				<div className="row">
					<div className="col"> <Card/></div>
					<div className="col"> <Card/></div>
					<div className="col"> <Card/></div>
					<div className="col"> <Card/></div>	
				</div>
			</div>
	
		</div>


	);
}

export default Home;