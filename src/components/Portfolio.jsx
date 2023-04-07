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
			images: [
				"https://i.ibb.co/wSfDd4x/ccc-music-emporium1.jpg",
				"https://i.ibb.co/D9wSPF3/ccc-music-emporium2.jpg",
				"https://i.ibb.co/YBMwB93/ccc-music-emporium3.jpg",
				"https://i.ibb.co/SJXJvsk/ccc-music-emporium4.jpg",
				"https://i.ibb.co/xSy5ZNn/ccc-music-emporium5.jpg",
				"https://i.ibb.co/Qd3439L/ccc-music-emporium6.jpg",
			],
		},
		{
			id: 2,
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
		},
		{
			id: 3,
			src: natours,
			git: "https://github.com/changliCoding/natours",
			images: [
				"/public/images/ccc_music_emporium1.jpg",
				"/public/images/ccc_music_emporium2.jpg",
				"/public/images/ccc_music_emporium3.jpg",
				"/images/ccc_music_emporium4.jpg",
				"/images/ccc_music_emporium5.jpg",
				"/images/ccc_music_emporium6.jpg",
			],
		},
		{
			id: 4,
			src: jungle,
			git: "https://github.com/changLiCoding/jungle-rails",
			images: [
				"/images/ccc_music_emporium1.jpg",
				"/images/ccc_music_emporium2.jpg",
				"/images/ccc_music_emporium3.jpg",
				"/images/ccc_music_emporium4.jpg",
				"/images/ccc_music_emporium5.jpg",
				"/images/ccc_music_emporium6.jpg",
			],
		},
		{
			id: 5,
			src: quizApp,
			git: "https://github.com/changLiCoding/QuizApp",
			images: [
				"/images/ccc_music_emporium1.jpg",
				"/images/ccc_music_emporium2.jpg",
				"/images/ccc_music_emporium3.jpg",
				"/images/ccc_music_emporium4.jpg",
				"/images/ccc_music_emporium5.jpg",
				"/images/ccc_music_emporium6.jpg",
			],
		},
		{
			id: 6,
			src: interviewScheduler,
			git: "https://github.com/changLiCoding/InterviewScheduler",
			demo: "https://interview-scheduler-reactjs.netlify.app/",
			images: [
				"/images/ccc_music_emporium1.jpg",
				"/images/ccc_music_emporium2.jpg",
				"/images/ccc_music_emporium3.jpg",
				"/images/ccc_music_emporium4.jpg",
				"/images/ccc_music_emporium5.jpg",
				"/images/ccc_music_emporium6.jpg",
			],
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
					{portfolios.map(({ id, src, git, demo, images }) => (
						<div key={id}>
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
									<h3 className='text-lg font-bold'>
										Congratulations random Internet user!
									</h3>
									<p className='py-4'>
										You've been selected for a chance to get one year of
										subscription to use Wikipedia for free!
									</p>
								</label>
							</label>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
