import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Technical Skills',
		icon: <MdWeb className="w-full h-full" />,
		description:
			'HTML5, CSS3, Javascript, React JS, React Native, Bootstrap, C++, Java, Python, Node.js, Mongo DB, Ajax, JQuery, REST APIs, Git, Responsive Design',
	},
	{
		title: 'Soft Skills',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'Problem solving, Communication, Adaptability, Visual thinking, Collaboration, Creativity, Leadership, Time management.',
	},
	{
		title: 'Interests',
		icon: <VscCode className="w-full h-full" />,
		description:
			'Football, Working out, Hiking, Travelling, Music, Podcasts.',
	},
];
