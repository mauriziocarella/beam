import type {ComponentProps} from 'react';
import clsx from '@/lib/utils/clsx';

export type InputProps = ComponentProps<'input'>;

export const Input = ({className, ...props}: InputProps) => {
	return (
		<input
			type="text"
			className={clsx(
				'border rounded p-2 outline-0 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition-all',
				className,
			)}
			{...props}
		/>
	);
};
