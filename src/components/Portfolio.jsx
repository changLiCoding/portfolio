import ccc_music_emporium from "../assets/portfolio/ccc_music_emporium.jpg";
import eclothing from "../assets/portfolio/eclothing.jpg";
import natours from "../assets/portfolio/natours.jpg";
import jungle from "../assets/portfolio/jungle.jpg";
import quizApp from "../assets/portfolio/quizApp.jpg";
import gamelistApp from "../assets/portfolio/gamelistApp.jpg";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Portfolio() {
	const portfolios = [
		{
			id: 1,
			src: gamelistApp,
			git: "https://github.com/changLiCoding/game_list_client",
			demo: "https://gamelistapp.netlify.app/home",
			images: [
				"https://i.ibb.co/VSkZgSN/gamelist-App-1.jpg",
				"https://i.ibb.co/7Wptp8J/gamelist-App-2.jpg",
				"https://i.ibb.co/stZgHCT/gamelist-App-3.jpg",
				"https://i.ibb.co/7KHydVB/gamelist-App-4.jpg",
				"https://i.ibb.co/jZ1mQQT/gamelist-App-6.jpg",
				"https://i.ibb.co/pjWbj7K/gamelist-App-7.jpg",
			],
			title: "GameList App",
			description:
				"GameList is a modern web app built using <b>React</b>, <b>TypeScript</b>, <b>GraphQL</b>, <b>Apollo Client</b>, <b>Ruby On Rails</b>, and <b>PostgreSQL</b>. It provides a user-friendly interface for managing and exploring a collection of games, making it easy to discover new titles, track progress, and connect with other gamers. It contain features like infinite scrolling, debouncing search, and sorting, and is integrated with the IGDB API to provide a comprehensive database of games. The app also includes a social aspect, allowing users to follow each other and share their game lists. The frontend is deployed on Netlify, while the backend is deployed on Railway.",
		},
		{
			id: 2,
			src: ccc_music_emporium,
			git: "https://github.com/changLiCoding/ccc_music_emporium",
			images: [
				"https://i.ibb.co/wSfDd4x/ccc-music-emporium1.jpg",
				"https://i.ibb.co/D9wSPF3/ccc-music-emporium2.jpg",
				"https://i.ibb.co/YBMwB93/ccc-music-emporium3.jpg",
				"https://i.ibb.co/SJXJvsk/ccc-music-emporium4.jpg",
				"https://i.ibb.co/xSy5ZNn/ccc-music-emporium5.jpg",
				"https://i.ibb.co/Qd3439L/ccc-music-emporium6.jpg",
			],
			title: "CCC Music Emporium",
			description:
				"CCC Music Emporium is an e-commerce website that allows users to buy or rent music products online, view order history and rate purchased products. The physical store locations integrated with <b>Mapbox</b>. The frontend is built using <b>React</b> and <b>Redux Toolkit</b>, while the backend uses <b>PostgreSQL</b> and <b>Node Express</b>. <b>Jsonwebtoken</b> is used to verify routes and ensure security, and <b>Stripe API</b> is implemented for payment solutions. The website's design is powered by <b>Tailwind</b> and <b>DaisayUI</b>, providing a sleek and modern user interface.",
		},
		{
			id: 3,
			src: eclothing,
			git: "https://github.com/changliCoding/TurboEclothing",
			demo: "https://eclothingproject.netlify.app/",
			images: [
				"https://i.ibb.co/ckVnHpz/eclothing1.jpg",
				"https://i.ibb.co/SNz57ML/eclothing2.jpg",
				"https://i.ibb.co/KytrdCd/eclothing3.jpg",
				"https://i.ibb.co/5vqBCPh/eclothing4.jpg",
				"https://i.ibb.co/Jyp95M9/eclothing5.png",
				"https://i.ibb.co/FqBmzQp/eclothing6.jpg",
			],
			title: "E-Clothing",
			description:
				"Designed and developed a responsive e-commerce website with a user-friendly interface using <b>HTML, CSS, and ReactJS and JavaScript</b>. Managing back end, authentication login and database with <b>Firebase Function and Auth0</b>. Built streamlined checkout process with <b>Stripe API</b>. ",
		},
		{
			id: 4,
			src: natours,
			git: "https://github.com/changliCoding/natours",
			images: [
				"https://i.ibb.co/LRZhYpg/natours1.jpg",
				"https://i.ibb.co/vcjnxgG/natours2.jpg",
				"https://i.ibb.co/VpMLGVw/natours3.jpg",
				"https://i.ibb.co/Q8VxPKy/natours4.jpg",
				"https://i.ibb.co/88nrr7J/natours5.jpg",
				"https://i.ibb.co/DkrQsQH/natours6.jpg",
			],
			title: "Natours",
			description:
				"Developed a responsive single page App with <b>Pug</b> backend rendering. Users could leave commits and ratings, with a secure authentication cookie sending <b>JSON Web Token</b>. A CRUD application exposed using a RESTful API made with <b>Node.js</b>. Exposed POST, GET, PATCH and DELETE HTTP methods using <b>Express</b>.",
		},
		{
			id: 5,
			src: jungle,
			git: "https://github.com/changLiCoding/jungle-rails",
			images: [
				"https://i.ibb.co/4dK7W8M/jungle1.jpg",
				"https://i.ibb.co/52pMYfM/jungle2.jpg",
				"https://i.ibb.co/rMJ3871/jungle3.jpg",
				"https://i.ibb.co/CMxnZvc/jungle4.jpg",
				"https://i.ibb.co/j6P5k00/jungle5.jpg",
				"https://i.ibb.co/wd5P2Mc/jungle6.jpg",
			],
			title: "Jungle",
			description:
				"Jungle is a <b>Ruby on Rails</b> e-commerce website that offers a wide variety of plants for sale online. The platform includes an admin panel for creating categories and managing products, while users receive email notifications with their order details. <b>Active Record</b> and <b>PostgreSQL</b> are used for database management, while the front-end is built using Bootstrap. The website is integrated with <b>StripeAPI</b> for secure payment processing. The application is developed using <b>test-driven development</b> and includes test units and end-to-end testing using <b>RSpec and Cypress</b>, ensuring that the website is reliable and secure.",
		},
		{
			id: 6,
			src: quizApp,
			git: "https://github.com/changLiCoding/QuizApp",
			images: [
				"https://i.ibb.co/w7stBGK/quizApp1.jpg",
				"https://i.ibb.co/NKc7YGH/quizApp2.jpg",
				"https://i.ibb.co/pJNmwds/quizApp3.jpg",
				"https://i.ibb.co/1ffksPt/quizApp4.jpg",
				"https://i.ibb.co/fDKGr08/quizApp5.jpg",
				"https://i.ibb.co/Mshdcq8/quizz-App6.jpg",
			],
			title: "Quiz App",
			description:
				"Quiz App is an interactive platform that enables users to create, test, curate, and share quizzes and their results. The frontend is built using <b>EJS and Bootstrap</b> to provide an easy-to-use interface. The backend is built on <b>Node.js Express</b>, which is used to develop RESTful APIs, ensuring efficient communication between the client and the server. The app also employs <b>jQuery</b> for seamless animations and interactivity. Whether it's creating a quiz for fun, testing knowledge, or sharing results, Quiz App has you covered.",
		},
	];

	return (
		<div
			id='portfolio'
			className='w-full h-fit lg:h-screen'>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-gray-500'>
						Portfolio
					</p>
					<p className='py-6'>Check out some of my work right here</p>
				</div>

				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
					{portfolios.map(
						({ id, src, git, demo, images, title, description }) => (
							<div key={id}>
								<div className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-95 z-0'>
									<label
										htmlFor={`my-modal-${id}`}
										className=' cursor-pointer'>
										<img
											src={src}
											alt=''
											className='rounded-md '
										/>
									</label>
									<div className='flex items-center justify-center'>
										<a
											className='w-1/2 text-center px-6 py-3 m-4 duration-200 hover:scale-105'
											href={demo ? demo : "#"}
											target='_blank'>
											Demo
										</a>
										<a
											className='w-1/2 text-center px-6 py-3 m-4 duration-200 hover:scale-105'
											href={git}
											target='_blank'>
											Code
										</a>
									</div>
								</div>
								<input
									type='checkbox'
									id={`my-modal-${id}`}
									className='modal-toggle'
								/>
								<label
									htmlFor={`my-modal-${id}`}
									className='modal cursor-pointer'>
									<label
										className='modal-box relative w-9/12 max-w-5xl z-10'
										htmlFor=''>
										<div className='carousel w-full'>
											<div
												id={`slide${7 * (id - 1) + 1}`}
												className='carousel-item relative w-full'>
												<img
													src={src}
													className='w-full'
												/>
												<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
													<a
														className='btn btn-circle'
														href={`#slide${7 * (id - 1) + 7}`}>
														<FaArrowLeft />
													</a>
													<a
														href={`#slide${7 * (id - 1) + 2}`}
														className='btn btn-circle'>
														<FaArrowRight />
													</a>
												</div>
											</div>

											{images &&
												images.map((image, index) => {
													return (
														<div
															key={`slide${index + 2}`}
															id={`slide${7 * (id - 1) + index + 2}`}
															className='carousel-item relative w-full'>
															<img
																src={`${image}`}
																className='w-full'
															/>
															<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
																<a
																	className='btn btn-circle'
																	href={`#slide${
																		index === 0
																			? 7 * (id - 1) + 1
																			: 7 * (id - 1) + index + 1
																	}`}>
																	<FaArrowLeft />
																</a>
																<a
																	href={`#slide${
																		index === 5
																			? 7 * (id - 1) + 1
																			: 7 * (id - 1) + index + 3
																	}`}
																	className='btn btn-circle'>
																	<FaArrowRight />
																</a>
															</div>
														</div>
													);
												})}
										</div>
										<h3 className='text-lg font-bold'>{title}</h3>
										<p
											className='py-4'
											dangerouslySetInnerHTML={{ __html: description }}></p>
									</label>
								</label>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
}
