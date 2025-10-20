import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { tv } from 'tailwind-variants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	height: 'sm' | 'lg';
	width: 'full' | 'fit';
}

const button = tv({
	base: 'background-button font-medium cursor-pointer px-3 rounded-lg text-white hover:shadow-(--shadow-button-hover) active:scale-[0.96] transition-all duration-100',
	variants: {
		height: {
			sm: 'py-1',
			lg: 'py-3',
		},
		width: {
			full: 'w-full',
			fit: 'w-fit',
		},
	},
});

export function Button({
	children,
	height,
	width,
	type = 'button',
}: ButtonProps) {
	return (
		<button className={button({ height, width })} type={type}>
			{children}
		</button>
	);
}
