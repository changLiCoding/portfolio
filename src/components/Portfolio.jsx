import React from "react";
import ccc_music_emporium from "../assets/portfolio/ccc_music_emporium.jpg";
import eclothing from "../assets/portfolio/eclothing.jpg";
import natours from "../assets/portfolio/natours.jpg";
import jungle from "../assets/portfolio/jungle.jpg";
import quizApp from "../assets/portfolio/quizApp.jpg";
import interviewScheduler from "../assets/portfolio/interview-scheduler.jpg";

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
			className='w-full md:h-screen'>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-gray-500'>
						Portfolio
					</p>
					<p className='py-6'>Check out some of my work right here</p>
				</div>

				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
					{portfolios.map(({ id, src, git, demo }) => (
						<div
							key={id}
							className='shadow-md shadow-gray-600 rounded-lg'>
							<img
								src={src}
								alt=''
								className='rounded-md duration-200 hover:scale-105'
							/>
							<div className='flex items-center justify-center'>
								<button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
									<a href={demo ? demo : "#"}>Demo</a>
								</button>
								<button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
									<a href={git}>Code</a>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
