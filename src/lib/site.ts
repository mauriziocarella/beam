import type {Metadata} from 'next';

export const Site = {
	title: 'BEAM!',
	description: 'The QR-Code generator',
	url: new URL('https://beam.mauriziocarella.it'),
};

export const generateMetadata = (metadata: Partial<Metadata> = {}): Metadata => {
	const {title} = metadata;

	return {
		description: Site.description,
		...metadata,
		title: (title ? [title, Site.title] : [Site.title, Site.description]).filter(Boolean).join(' • '),
	};
};
