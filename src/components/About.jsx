import React from "react";

export default function About() {
	return (
		<div
			name='about'
			className='w-full h-screen '>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-gray-500'>
						About Me
					</p>
				</div>

				<p className='text-md md:text-lg lg:text-xl mt-20'>
					As a Full Stack Developer with over a year of experience in coding, I
					have gained expertise in multiple programming languages, including
					JavaScript, Ruby, Python, and TypeScript. Prior to my career in
					coding, I spent 8 years as a computer mechanic and store manager,
					which gave me valuable experience in both technical and managerial
					roles.
				</p>

				<br />

				<p className='text-md md:text-lg lg:text-xl mt-20'>
					My deep understanding of React and Redux allows me to develop robust
					and efficient applications. I am constantly learning and staying
					up-to-date with the latest technologies and industry trends, as I am
					passionate about providing the best possible solutions for my clients
					or customers.
				</p>
				<p className='text-md md:text-lg lg:text-xl '>
					When I'm not coding, I enjoy playing video games and experimenting
					with new recipes in the kitchen. I believe that these hobbies allow me
					to approach problem-solving with a fresh perspective, and help me stay
					creative and adaptable in my work.
				</p>
			</div>
		</div>
	);
}
