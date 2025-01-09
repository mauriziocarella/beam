import type {ComponentProps} from 'react';
import clsx from '@/lib/utils/clsx';

export type TextAreaProps = ComponentProps<'textarea'>;

export const TextArea = ({className, ...props}: TextAreaProps) => {
	return (
		<textarea
			className={clsx(
				'border rounded p-2 outline-0 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition-all resize-y',
				className,
			)}
			{...props}
		/>
	);
};
