import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				I am passionate about front-end development, application development and creating visually intriguing web designs and mobile applications, using my problem solving skills to come to
				unique solutions and learning new languages and software. I am currently working on building an mobile application that helps facilitate feedback for learners and educators in the radiology curriculum with Faculty of Medicine at Memorial University of Newfoundland and Labrador and learning about
				React Native. When I am not programming you can find me working out or listening to some good tunes.
				
				</p>
				<a
					href="mailto:jasjeets@mun.ca"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					jasjeets@mun.ca
				</a>
			</div>

			
		</div>
	);
}

export default About;
