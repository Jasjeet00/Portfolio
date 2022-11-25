import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				I am a 3rd year Computer Science major and a Business minor student at Memorial University of Newfoundland, expected to graduate April 2024. I am a results driven person, with a strive to constantly improve and develop both personally and professionally&nbsp.
				Interests - Football, Working out, Hiking, Travelling, Music, Podcasts.
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
