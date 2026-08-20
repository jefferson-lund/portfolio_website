export type Experience = {
	organization: string;
	role: string;
	location: string;
	period: string;
	bullets: string[];
	tags: string[];
};

export const experience: Experience[] = [
	{
		organization: 'Pattern',
		role: 'Data Engineering Intern',
		location: 'Lehi, UT',
		period: 'Jun 2026 – Aug 2026',
		tags: ['Airflow', 'Python', 'SQL', 'Trino', 'Iceberg', 'Superset', 'Docker'],
		bullets: [
			'Built an Airflow DAG auditing ~39,000+ Snowflake and Iceberg/S3 tables to surface zero-use and high-use tables, with Slack alerting on risky access patterns.',
			'Developed an hourly pipeline and materialized table that make high-volume transactional data queryable from BI, handling slowly-changing-dimension deduplication and multi-currency normalization.',
			'Contributed to a change-data-capture ingestion pipeline landing data in object storage, working across Spark, Trino, and containerized Airflow for local development.',
		],
	},
	{
		organization: 'AJ Data Solutions',
		role: 'Founder',
		location: 'Logan, UT',
		period: '2025 – Present',
		tags: ['Consulting', 'Python', 'SQL', 'Local AI', 'Tableau', 'Database strategy'],
		bullets: [
			'Founded AJ Data Solutions, a consulting practice for medium-sized companies with real data challenges and no in-house data team.',
			'Help clients with sales analytics, local AI implementation, and database strategy — scoping problems, building pipelines and models, and leaving them with systems they can run without a full data org.',
		],
	},
	{
		organization: 'Analytics Solutions Center – Utah State University',
		role: 'Data Analyst, Team Lead',
		location: 'Logan, UT',
		period: 'Oct 2025 – Present',
		tags: ['SQL', 'Power Query', 'Tableau', 'Python', 'Automation'],
		bullets: [
			'Lead a team of 4 analysts building data infrastructure across financial, clinical, and grant systems, improving data entry and reporting processes by 25%+.',
			'Designed and implemented cross-platform integrations and pipelines between 5 software systems, ensuring reliable data flow between departments.',
			'Built dashboards and automated reports that translate complex data into decisions and cut operational overhead.',
		],
	},
	{
		organization: 'Hal D. Allen, CPA',
		role: 'Data Analyst Intern',
		location: 'Perry, UT',
		period: 'Sep 2025 – Apr 2026',
		tags: ['SQL', 'Power Query', 'Excel', 'Automation'],
		bullets: [
			'Cleaned and prepared data to improve flow between internal systems, raising accuracy and turnaround time for accounting workflows.',
			'Researched and evaluated new software platforms to inform technology decisions by firm leadership.',
		],
	},
	{
		organization: 'Utah Army National Guard',
		role: 'Human Intelligence Collector',
		location: 'Logan, UT',
		period: 'Jun 2021 – Present',
		tags: ['Analysis', 'Languages', 'Leadership'],
		bullets: [
			'Gather and analyze intelligence from human sources to produce actionable insight supporting operational objectives.',
			'Provided language support during a multinational exercise in Japan, strengthening communication between allied forces.',
		],
	},
];

export const education = {
	school: 'Utah State University',
	schoolFull: 'Jon M. Huntsman School of Business',
	degree: 'B.S. Information Systems: Data Engineering',
	location: 'Logan, UT',
	graduation: 'April 2027',
	gpa: '3.8',
	details: [
		'3.8 GPA while working 20–30 hours per week',
		'Analytics Solutions Center · ProSales Student Association',
		'Coursework: Database Management',
	],
};

export const skillGroups = [
	{
		label: 'Data engineering',
		items: ['Airflow', 'Snowflake', 'Trino', 'Apache Iceberg', 'Spark'],
	},
	{
		label: 'Analytics & BI',
		items: ['Python', 'SQL', 'Superset', 'Tableau', 'Power Query'],
	},
	{
		label: 'Platform',
		items: ['Linux', 'Docker', 'Virtualization', 'Cloud computing', 'AWS', 'APIs', 'Cloudflare', 'Claude Code', 'Cursor'],
	},
];

export const extras = {
	languages: ['Chinese (Mandarin)', 'Japanese'],
	interests: ['Home lab', 'NAS', 'Self-hosting', 'Local AI', 'Networking'],
};

export const volunteer = {
	organization: 'The Church of Jesus Christ of Latter-day Saints',
	role: 'Full-Time Volunteer',
	location: 'Kansai, Japan',
	period: 'Mar 2019 – Mar 2020',
	bullets: [
		'Taught English classes from beginner to advanced while contacting 20+ people a day.',
		'Supervised and trained a team of 10 volunteers, setting goals and running weekly planning.',
	],
};
