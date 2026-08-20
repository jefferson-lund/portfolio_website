export type Project = {
	slug: string;
	title: string;
	category: string;
	year: string;
	/** One or two sentences — the landing-page intro. */
	summary: string;
	/** Longer framing used at the top of the detail page. */
	description: string;
	tags: string[];
	href?: string;
	github?: string;
	role?: string;
	stack?: string[];
	caseStudy: {
		problem: string;
		approach: string[];
		outcome: string;
		notes?: string[];
	};
};

export const projects: Project[] = [
	{
		slug: 'hypothesis',
		title: 'Hypothesis',
		category: 'Hack USU 2026',
		year: '2026',
		role: 'Built with Cooper and Cader',
		summary:
			'A wellness app that turns habit tracking into real self-experimentation: state an outcome, log activities, and let regression plus WHOOP data show what actually moved the needle.',
		description:
			'A cross-platform mobile and web app built at Hack USU 2026 that reframes wellness tracking as active experimentation. Users define an outcome, name the habits that might drive it, and the app generates a testable hypothesis, then measures it against subjective check-ins and objective WHOOP metrics.',
		tags: ['React Native', 'Expo', 'TypeScript', 'OpenAI', 'WHOOP API'],
		github: 'https://github.com/jefferson-lund/HACK_USU_26',
		stack: [
			'Expo 54 · React Native 0.81 · Expo Router',
			'TypeScript 5.9',
			'Express 5 API proxy',
			'OpenAI GPT-4o-mini · Google Gemini',
			'WHOOP OAuth · SQLite',
			'Cloudflare Pages + Functions',
		],
		caseStudy: {
			problem:
				'Wellness apps collect plenty of data but never answer the question users actually care about — why do I feel this way? People end up with dashboards full of metrics and no idea which of their habits is responsible.',
			approach: [
				'Designed a four-step flow — define an outcome, list candidate activities, generate a hypothesis, track it over time — so the app teaches the scientific method by structure rather than instruction.',
				'Used GPT-4o-mini with Gemini as a fallback to turn vague goals into neutrally worded, testable predictions, deliberately avoiding language that nudges the user toward a result.',
				'Integrated the WHOOP API over OAuth to pull 180 days of recovery, strain, HRV, resting heart rate, and sleep performance, persisting tokens so the connection survives app restarts.',
				'Wrote an enrichment step that converts WHOOP metrics into binary features (high recovery, good sleep, high strain) and feeds them into a regression alongside self-reported activities.',
				'Kept every API key server-side behind an Express proxy, then ported that proxy to Cloudflare Pages Functions — including an edge-native rate limiter, since an in-memory one cannot survive Workers isolates.',
			],
			outcome:
				'A working iOS, Android, and web build that reports coefficients like “Good Sleep (>85%): +1.5 (strong positive)” next to a user’s own habits, plus a generated one-week plan and a predicted-vs-actual scatter plot.',
			notes: [
				'Local-first storage — no user wellness data leaves the device.',
				'Clean git history with no exposed secrets; all credentials via gitignored env files.',
			],
		},
	},
	{
		slug: 'warehouse-access-audit',
		title: 'Warehouse Access Audit',
		category: 'Data Engineering',
		year: '2026',
		role: 'Pattern',
		summary:
			'A scheduled audit that tracks which warehouse tables are actually being read, so unused and at-risk datasets can be retired based on evidence rather than guesswork.',
		description:
			'A recurring audit of table and view access across a cloud data warehouse, built so a platform team can see what downstream consumers actually depend on before changing or removing anything.',
		tags: ['Airflow', 'SQL', 'Python', 'Data warehousing'],
		stack: ['Apache Airflow', 'SQL', 'Python', 'Cloud data warehouse'],
		caseStudy: {
			problem:
				'As a data platform evolves, it gets hard to say with confidence which tables and views are still in use. Without that picture, nothing can be safely deprecated, and consumers reading directly from raw layers they should not depend on go unnoticed.',
			approach: [
				'Wrote an access audit that reads warehouse query history to attribute reads to specific tables and views.',
				'Wired it into a scheduled Airflow DAG so the picture stays current instead of being rebuilt by hand.',
				'Added automated alerting for unused tables and risky direct-read patterns.',
				'Profiled the heavier scoring queries against the warehouse statement timeout and worked on bringing them under it.',
			],
			outcome:
				'Cleanup and deprecation decisions now run on measured usage instead of guesswork. Incremental query optimization to widen coverage is ongoing.',
		},
	},
	{
		slug: 'order-analytics-model',
		title: 'Order Analytics Model',
		category: 'Data Engineering',
		year: '2026',
		role: 'Pattern',
		summary:
			'A materialized dataset that corrected a significant overcount in order volume and made high-volume sales data chartable in BI without overwhelming the query engine.',
		description:
			'An hourly pipeline, materialized table, and governed BI dataset that make orders, units, and sales queryable at large scale with correct deduplication and consistent currency handling.',
		tags: ['Airflow', 'Superset', 'Trino', 'Iceberg', 'SQL'],
		stack: ['Apache Airflow', 'Trino', 'Apache Iceberg', 'Superset', 'SQL'],
		caseStudy: {
			problem:
				'The source order tables kept full history as slowly changing dimensions, so a naive row count materially overstated order volume. The BI layer could not express the window-function deduplication needed to correct it, and exact distinct counts at this data volume pushed the query engine into out-of-memory failures.',
			approach: [
				'Materialized an enriched table using ROW_NUMBER() deduplication on the documented natural keys for orders and order items.',
				'Joined reference exchange rates for as-of currency conversion, with a fallback for dates with no published rate, such as weekends and holidays.',
				'Scheduled hourly refreshes through Airflow and exposed the result as a governed BI dataset.',
				'Documented the known upstream gaps in refund and returns data rather than letting them silently skew the numbers.',
			],
			outcome:
				'Analysts can chart orders, units, and sales directly in the BI tool with counts that match reality, and without the query engine falling over.',
		},
	},
	{
		slug: 'asc-integrations',
		title: 'Cross-Platform Integrations',
		category: 'Analytics',
		year: '2025',
		role: 'Utah State University',
		summary:
			'Five disconnected campus systems — financial, clinical, and grant — stitched into one reliable flow, with the manual reporting removed.',
		description:
			'Data integrations and automated reporting built across five software systems at Utah State’s Analytics Solutions Center, leading a team of four analysts.',
		tags: ['SQL', 'Power Query', 'Tableau', 'Automation'],
		stack: ['SQL', 'Power Query', 'Tableau', 'Python'],
		caseStudy: {
			problem:
				'Departments ran on disconnected financial, clinical, and grant systems. Data moved by hand, definitions drifted between teams, and reporting was slow and inconsistent.',
			approach: [
				'Mapped the data flows between all five platforms to find where records were being re-entered or lost.',
				'Built cross-system integrations and pipelines to move data automatically between departments.',
				'Replaced manual reporting with dashboards and scheduled reports.',
				'Led four analysts through the rollout, splitting ownership by system.',
			],
			outcome:
				'Data entry and reporting efficiency improved by 25%+, with cohesive, trustworthy data flow between departments.',
		},
	},
	{
		slug: 'personal-website',
		title: 'This Website',
		category: 'Web',
		year: '2026',
		summary:
			'A static, dependency-light portfolio built with Astro, where all content lives in typed data files instead of markup.',
		description:
			'A fast static site built with Astro, TypeScript, and Tailwind CSS, designed so content updates never require touching layout code.',
		tags: ['Astro', 'TypeScript', 'Tailwind'],
		github: 'https://github.com/jefferson-lund/personal_website',
		stack: ['Astro', 'TypeScript', 'Tailwind CSS v4'],
		caseStudy: {
			problem:
				'A resume PDF cannot show how a project was reasoned about. I wanted a place that reads in two minutes but goes deep if someone wants the detail.',
			approach: [
				'Scaffolded with Astro so the output is static HTML with almost no shipped JavaScript.',
				'Kept every project and role in typed data files, with pages generated from them.',
				'Structured the page as a skimmable summary that links out to per-project case studies.',
			],
			outcome:
				'Sub-second page loads, one place to update content, and a case study page for every project.',
		},
	},
];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
