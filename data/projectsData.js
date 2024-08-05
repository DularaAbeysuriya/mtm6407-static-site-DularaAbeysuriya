import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: uuidv4(),
		title: 'Adora Beauty Salon Branding',
		url: 'adora-beauty-salon-branding',
		category: 'Branding , Logo Design',
		img: '/images/adora-logo.jpg',
		ProjectHeader: {
			title: 'Adora Beauty Salon Branding',
			publishDate: 'Feb 14, 2023',
			tags: 'Branding / Logo Design',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Adora Beauty Salon Logo',
				img: '/images/adora-logo.jpg',
			},
			{
				id: uuidv4(),
				title: 'Adora Beauty Salon Stationery',
				img: '/images/adora-stationery.jpg',
			},
			{
				id: uuidv4(),
				title: 'Adora Beauty Salon Social Media',
				img: '/images/adora-social.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{ id: uuidv4(), title: 'Name', details: 'Adora Beauty' },
				{ id: uuidv4(), title: 'Services', details: 'Hair and Beauty Salon' },
				{ id: uuidv4(), title: 'Website', details: 'https://adorabeauty.com' },
				{ id: uuidv4(), title: 'Phone', details: '555-1234-567' },
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To create a luxurious and minimalist brand identity that reflects the high-end services provided by Adora Beauty.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Adobe Illustrator',
						'Adobe Photoshop',
						'Adobe InDesign',
						'Sketch',
					],
				},
			],
		},
	},
	{
		id: uuidv4(),
		title: 'Eco View Tyre Recycling Branding',
		url: 'eco-view-tyre-recycling-branding',
		category: 'Branding, Logo Design , Brand Identity',
		img: '/images/eco-view-logo.jpg',
		ProjectHeader: {
			title: 'Eco View Tyre Recycling Branding',
			publishDate: 'Jun 18, 2022',
			tags: 'Branding / Logo Design',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Eco View Logo',
				img: '/images/eco-view-logo.jpg',
			},
			{
				id: uuidv4(),
				title: 'Eco View Business Cards',
				img: '/images/eco-view-business-cards.jpg',
			},
			{
				id: uuidv4(),
				title: 'Eco View Marketing Materials',
				img: '/images/eco-view-marketing.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{ id: uuidv4(), title: 'Name', details: 'Eco View Tyre Recycling' },
				{ id: uuidv4(), title: 'Services', details: 'Tyre Recycling' },
				{ id: uuidv4(), title: 'Website', details: 'https://ecoviewtyrecycling.com' },
				{ id: uuidv4(), title: 'Phone', details: '555-9876-543' },
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To develop a modern and eco-friendly brand identity that highlights the company’s commitment to sustainability.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Adobe Illustrator',
						'Adobe Photoshop',
						'Figma',
						'CorelDRAW',
					],
				},
			],
		},
	},
];
