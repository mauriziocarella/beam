'use client';

import QRCode from 'react-qr-code';
import {type ChangeEventHandler, useCallback, useState} from 'react';
import {Input} from '@/components/Input/Input';
import clsx from '@/lib/utils/clsx';
import Image from 'next/image';

import logo from '../assets/images/logo.svg';
import {Site} from '@/lib/site';

const Home = () => {
	const [value, setValue] = useState('');

	const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
		setValue(e.currentTarget.value);
	}, []);

	return (
		<div className="flex-1 flex justify-center items-center">
			<div className="flex flex-col gap-8 w-full max-w-lg">
				<header className="flex flex-col items-center gap-2 text-center">
					<Image src={logo} alt="Logo" className="max-w-12" />

					<h1 className="font-semibold text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
						{Site.title}
					</h1>

					<h2 className="font-medium text-lg">{Site.description}</h2>
				</header>

				<div className="flex flex-col gap w-full">
					<p className="text-content">
						Enter text or links below to share them with mobile phones via QR code. Alternatively, hit Save to generate
						a direct URL that you can share with others!
					</p>

					<Input
						type="text"
						placeholder="Enter text or link"
						value={value}
						maxLength={2048}
						required
						onChange={onChange}
						autoFocus
					/>

					<div
						className={clsx(
							'bg-white p-2 max-w-64 mx-auto rounded opacity-0 transition-opacity',
							value && 'opacity-100',
						)}>
						<QRCode size={256} value={value} viewBox={`0 0 256 256`} className={clsx('h-full w-full')} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
