import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: '1',
		title: 'Adora Beauty Salon Branding',
		url: 'adora-beauty-salon-branding',
		category: 'Branding, Logo Design',
		img: '/images/adora-logo.jpg',
		ProjectHeader: {
			title: 'Adora Beauty Salon Branding',
			publishDate: 'Feb 14, 2023',
			tags: 'Branding / Logo Design',
		},
		ProjectImages: [
			{
				id: '1-1',
				title: 'Adora Beauty Salon Logo',
				img: '/images/adora-logo.jpg',
			},
			{
				id: '1-2',
				title: 'Adora Beauty Salon Stationery',
				img: '/images/adora-stationery.jpg',
			},
			{
				id: '1-3',
				title: 'Adora Beauty Salon Social Media',
				img: '/images/adora-social.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{ id: '1-1-1', title: 'Name', details: 'Adora Beauty' },
				{ id: '1-1-2', title: 'Services', details: 'Hair and Beauty Salon' },
				{ id: '1-1-3', title: 'Website', details: 'https://adorabeauty.com' },
				{ id: '1-1-4', title: 'Phone', details: '555-1234-567' },
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
		id: '2',
		title: 'Eco View Tyre Recycling Branding',
		url: 'eco-view-tyre-recycling-branding',
		category: 'Branding, Logo Design, Brand Identity',
		img: '/images/eco-view-logo.jpg',
		ProjectHeader: {
			title: 'Eco View Tyre Recycling Branding',
			publishDate: 'Jun 18, 2022',
			tags: 'Branding / Logo Design',
		},
		ProjectImages: [
			{
				id: '2-1',
				title: 'Eco View Logo',
				img: '/images/eco-view-logo.jpg',
			},
			{
				id: '2-2',
				title: 'Eco View Business Cards',
				img: '/images/eco-view-branding.jpg',
			},
			{
				id: '2-3',
				title: 'Eco View Marketing Materials',
				img: '/images/eco-view-marketing.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{ id: '2-1-1', title: 'Name', details: 'Eco View Tyre Recycling' },
				{ id: '2-1-2', title: 'Services', details: 'Tyre Recycling' },
				{ id: '2-1-3', title: 'Website', details: 'https://ecoviewtyrecycling.com' },
				{ id: '2-1-4', title: 'Phone', details: '555-9876-543' },
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
