import React, { useState, useContext, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "../contexts/ThemeContext";

export default function NavBar() {
	const [nav, setNav] = useState(false);

	const { theme, toggleTheme } = useContext(ThemeContext);
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);
	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "about",
		},
		{
			id: 3,
			link: "portfolio",
		},
		{
			id: 4,
			link: "experience",
		},
		{
			id: 5,
			link: "contact",
		},
	];

	return (
		<nav className='flex bg-gradient-to-b from-neutral to-neutral-focus justify-between items-center w-full h-20 px-4 nav fixed z-20'>
			<div>
				<AnchorLink
					className='text-5xl font-name ml-2 text-primary-focus cursor-pointer'
					href='#home'>
					Chang
				</AnchorLink>
			</div>

			<ul className='hidden md:flex'>
				{links.map(({ id, link }) => (
					<li
						key={id}
						className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
						<AnchorLink href={`#${link}`}>{link}</AnchorLink>
					</li>
				))}
				<li>
					{theme === "cupcake" ? (
						<FaMoon
							className='cursor-pointer text-base-300'
							onClick={toggleTheme}
						/>
					) : (
						<FaSun
							className='cursor-pointer text-white'
							onClick={toggleTheme}
						/>
					)}
				</li>
			</ul>

			<div
				onClick={() => setNav(!nav)}
				className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{nav && (
				<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-neutral to-neutral-focus text-gray-500 '>
					{links.map(({ id, link }) => (
						<li
							key={id}
							className='px-4 cursor-pointer capitalize py-6 text-4xl'>
							<AnchorLink
								onClick={() => setNav(!nav)}
								href={`#${link}`}>
								{link}
							</AnchorLink>
						</li>
					))}
					<li
						className='px-4 cursor-pointer capitalize py-6 text-4xl'
						key='7'>
						{theme === "cupcake" ? (
							<FaMoon
								className='cursor-pointer text-base-300'
								onClick={toggleTheme}
							/>
						) : (
							<FaSun
								className='cursor-pointer text-white'
								onClick={toggleTheme}
							/>
						)}
					</li>
				</ul>
			)}
		</nav>
	);
}
