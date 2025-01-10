import type {PropsWithChildren} from 'react';
import {ThemeProvider} from 'next-themes';

export const Providers = ({children}: PropsWithChildren) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};
