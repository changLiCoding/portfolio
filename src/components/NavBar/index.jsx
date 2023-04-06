import React, { useState } from "react";
import Logo from "/Users/changli/Desktop/react-portfolio/portfolio/public/images/logo.png";

export default function NavBar() {
	const [nav, setNav] = useState(false);
	return (
		<nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
			<div>
				<img
					src={Logo}
					alt='Logo'
					style={{ width: "50px" }}
				/>
			</div>
		</nav>
	);
}
