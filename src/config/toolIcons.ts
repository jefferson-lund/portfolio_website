export type ToolIcon =
	| { type: 'simple'; slug: string }
	| { type: 'jsdelivr'; slug: string }
	| {
			type: 'builtin';
			icon: 'sql' | 'iceberg' | 'virtualization' | 'cloud' | 'api' | 'chart' | 'tableau' | 'powerquery';
	  };

export const toolIcons: Record<string, ToolIcon> = {
	Python: { type: 'simple', slug: 'python' },
	SQL: { type: 'builtin', icon: 'sql' },
	Airflow: { type: 'simple', slug: 'apacheairflow' },
	Snowflake: { type: 'simple', slug: 'snowflake' },
	Trino: { type: 'simple', slug: 'trino' },
	'Apache Iceberg': { type: 'builtin', icon: 'iceberg' },
	Spark: { type: 'simple', slug: 'apachespark' },
	Superset: { type: 'simple', slug: 'apachesuperset' },
	Tableau: { type: 'builtin', icon: 'tableau' },
	'Power Query': { type: 'builtin', icon: 'powerquery' },
	Linux: { type: 'simple', slug: 'linux' },
	Docker: { type: 'simple', slug: 'docker' },
	Virtualization: { type: 'builtin', icon: 'virtualization' },
	'Cloud computing': { type: 'builtin', icon: 'cloud' },
	AWS: { type: 'jsdelivr', slug: 'amazonaws' },
	APIs: { type: 'builtin', icon: 'api' },
	Cloudflare: { type: 'simple', slug: 'cloudflare' },
	'Claude Code': { type: 'simple', slug: 'claude' },
	Cursor: { type: 'simple', slug: 'cursor' },
};

export const toolIconColor = '98a0ad';

export function simpleIconUrl(slug: string) {
	return `https://cdn.simpleicons.org/${slug}/${toolIconColor}`;
}

export function jsDelivrIconUrl(slug: string) {
	return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;
}
