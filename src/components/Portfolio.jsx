import React, { Fragment } from "react";
import ccc_music_emporium from "../assets/portfolio/ccc_music_emporium.jpg";
import eclothing from "../assets/portfolio/eclothing.jpg";
import natours from "../assets/portfolio/natours.jpg";
import jungle from "../assets/portfolio/jungle.jpg";
import quizApp from "../assets/portfolio/quizApp.jpg";
import interviewScheduler from "../assets/portfolio/interview-scheduler.jpg";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Portfolio() {
	const portfolios = [
		{
			id: 1,
			src: ccc_music_emporium,
			git: "https://github.com/changLiCoding/ccc_music_emporium",
		},
		{
			id: 2,
			src: eclothing,
			git: "https://github.com/changliCoding/TurboEclothing",
			demo: "https://eclothingproject.netlify.app/",
		},
		{
			id: 3,
			src: natours,
			git: "https://github.com/changliCoding/natours",
		},
		{
			id: 4,
			src: jungle,
			git: "https://github.com/changLiCoding/jungle-rails",
		},
		{
			id: 5,
			src: quizApp,
			git: "https://github.com/changLiCoding/QuizApp",
		},
		{
			id: 6,
			src: interviewScheduler,
			git: "https://github.com/changLiCoding/InterviewScheduler",
			demo: "https://interview-scheduler-reactjs.netlify.app/",
		},
	];

	return (
		<div
			name='portfolio'
			className='w-full h-fit lg:h-screen'>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-gray-500'>
						Portfolio
					</p>
					<p className='py-6'>Check out some of my work right here</p>
				</div>

				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
					{portfolios.map(({ id, src, git, demo }) => (
						<Fragment key={id}>
							{/* The button to open modal */}
							{/* <label
								htmlFor='my-modal-4'
								className='btn'>
								open modal
							</label> */}

							{/* Put this part before </body> tag */}

							<div className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
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
										href={demo ? demo : "#"}>
										Demo
									</a>
									<a
										className='w-1/2 text-center px-6 py-3 m-4 duration-200 hover:scale-105'
										href={git}>
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
											id='slide1'
											className='carousel-item relative w-full'>
											<img
												src={src}
												className='w-full'
											/>
											<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
												<a href='#slide4'>
													<FaArrowLeft className='btn btn-circle' />
												</a>
												<a
													href='#slide2'
													className='btn btn-circle'>
													<FaArrowRight />
												</a>
											</div>
										</div>
										<div
											id='slide2'
											className='carousel-item relative w-full'>
											<img
												src='/images/stock/photo-1609621838510-5ad474b7d25d.jpg'
												className='w-full'
											/>
											<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
												<a
													href='#slide1'
													className='btn btn-circle'>
													<FaArrowLeft />
												</a>
												<a
													href='#slide3'
													className='btn btn-circle'>
													<FaArrowRight />
												</a>
											</div>
										</div>
										<div
											id='slide3'
											className='carousel-item relative w-full'>
											<img
												src='/images/stock/photo-1414694762283-acccc27bca85.jpg'
												className='w-full'
											/>
											<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
												<a
													href='#slide2'
													className='btn btn-circle'>
													<FaArrowLeft />
												</a>
												<a
													href='#slide4'
													className='btn btn-circle'>
													<FaArrowRight />
												</a>
											</div>
										</div>
										<div
											id='slide4'
											className='carousel-item relative w-full'>
											<img
												src='/images/stock/photo-1665553365602-b2fb8e5d1707.jpg'
												className='w-full'
											/>
											<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
												<a
													href='#slide3'
													className='btn btn-circle'>
													<FaArrowLeft />
												</a>
												<a
													href='#slide1'
													className='btn btn-circle'>
													<FaArrowRight />
												</a>
											</div>
										</div>
									</div>
									<h3 className='text-lg font-bold'>
										Congratulations random Internet user!
									</h3>
									<p className='py-4'>
										You've been selected for a chance to get one year of
										subscription to use Wikipedia for free!
									</p>
								</label>
							</label>
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
}
