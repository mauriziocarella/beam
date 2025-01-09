import type {Metadata} from 'next';

export const Site = {
	title: 'Beam',
	description: 'Share text or links via qrcode or public list',
	url: new URL('https://beam.mauriziocarella.it'),
};

export const generateMetadata = (metadata: Partial<Metadata> = {}): Metadata => {
	const {title} = metadata;

	return {
		description: Site.description,
		...metadata,
		title: [title, Site.title].filter(Boolean).join(' • '),
	};
};
