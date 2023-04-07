import React from "react";
import HeroImage from "../images/me.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export default function Home() {
	return (
		<div
			name='home'
			className='h-screen w-full'>
			<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
				<div className='flex flex-col justify-center h-full'>
					<h2 className='text-4xl mt-36 md:mt-0 md:text-7xl font-bold '>
						A Full Stack Developer
					</h2>
					<p className='text-gray-500 py-4 max-w-md'>
						Proficient in JavaScript, Ruby, Python, and TypeScript with a deep
						understanding of React, Redux, NodeJS and Express. Passionate about
						video games and cooking, and always eager to learn new things.
					</p>

					<div>
						<Link
							to='portfolio'
							smooth
							duration={500}
							className='group w-fit px-6 py-3 my-2 flex items-center rounded-md btn btn-primary hover:scale-95 duration-300'>
							Portfolio
							<span className='group-hover:rotate-90 duration-300'>
								<MdOutlineKeyboardArrowRight
									size={25}
									className='ml-1'
								/>
							</span>
						</Link>
					</div>
				</div>

				<div>
					<img
						src={HeroImage}
						alt='my profile'
						className='rounded-2xl mx-auto w-2/3 max-h-full mb-2 md:w-full md:max-h-96'
					/>
				</div>
			</div>
		</div>
	);
}
