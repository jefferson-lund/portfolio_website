export const site = {
	name: 'Jefferson Lund',
	title: 'Jefferson Lund',
	role: 'Data Engineering',
	description:
		'Data engineering student who builds production Airflow pipelines, warehouse models, and dashboards teams rely on.',
	url: 'https://jefferson-lund.github.io/personal_website',
	author: 'Jefferson Lund',
	email: 'jlund2000@gmail.com',
	phone: '(240) 810-5517',
	location: 'Logan, Utah',
	github: 'https://github.com/jefferson-lund',
	linkedin: 'https://www.linkedin.com/in/jefferson-lund',
	ajDataSolutions: {
		label: 'AJ Data Solutions',
		url: 'https://www.aj-data.com',
	},
	availability: 'Open to 2027 internships & new grad roles',
} as const;

export const nav = [
	{ href: '#about', label: 'About' },
	{ href: '#experience', label: 'Experience' },
	{ href: '#work', label: 'Work' },
	{ href: '#contact', label: 'Contact' },
] as const;
