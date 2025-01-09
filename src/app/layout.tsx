import './globals.scss';
import type {PropsWithChildren} from 'react';
import type {Metadata, Viewport} from 'next';
import {generateMetadata} from '@/lib/site';
import {SiteHead} from '@/components/Site/Head';

export const metadata: Metadata = generateMetadata();
export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

const RootLayout = ({children}: Readonly<PropsWithChildren>) => {
	return (
		<html lang="en">
			<SiteHead />
			<body>
				<main className="flex-1 flex flex-col">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
