import type {ComponentProps} from 'react';
import clsx from '@/lib/utils/clsx';

export type InputProps = ComponentProps<'input'>;

export const Input = ({className, ...props}: InputProps) => {
	return (
		<input
			type="text"
			className={clsx(
				'bg-background border rounded p-2 outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary transition-all',
				className,
			)}
			{...props}
		/>
	);
};
