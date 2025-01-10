import './globals.scss';
import type {PropsWithChildren} from 'react';
import type {Metadata, Viewport} from 'next';
import {generateMetadata} from '@/lib/site';
import {SiteHead} from '@/components/Site/Head';
import {Providers} from '@/components/Site/Providers';

export const metadata: Metadata = generateMetadata();
export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

const RootLayout = ({children}: Readonly<PropsWithChildren>) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<SiteHead />
			<body>
				<Providers>
					<main className="flex-1 flex flex-col">{children}</main>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
