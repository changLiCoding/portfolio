import { Fragment } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

import { ThemeProvider } from "./contexts/ThemeContext.jsx";

function App() {
	return (
		<Fragment>
			<NavBar />
			<Home />
			<About />
			<Portfolio />
			<Experience />
			<Contact />
			<SocialLinks />
		</Fragment>
	);
}

export default App;
