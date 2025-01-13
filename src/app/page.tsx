'use client';

import QRCode from 'react-qr-code';
import {type ChangeEventHandler, useCallback, useState} from 'react';
import {Input} from '@/components/Input/Input';
import clsx from '@/lib/utils/clsx';

const Home = () => {
	const [value, setValue] = useState('');

	const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
		setValue(e.currentTarget.value);
	}, []);

	return (
		<div className="flex-1 flex justify-center items-center">
			<div className="flex flex-col gap w-full max-w-lg">
				<Input type="text" value={value} onChange={onChange} autoFocus />

				<div
					className={clsx(
						'bg-white p-2 max-w-64 mx-auto rounded opacity-0 transition-opacity',
						value && 'opacity-100',
					)}>
					<QRCode size={256} value={value} viewBox={`0 0 256 256`} className={clsx('h-full w-full')} />
				</div>
			</div>
		</div>
	);
};

export default Home;
