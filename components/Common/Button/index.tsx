import classNames from 'classnames';
import type { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	kind?: 'primary' | 'secondary' | 'special';
};

const buttonBaseClasses = `
    rounded-sm
    inline-flex
    items-center
    justify-center
    gap-2
    px-4
    py-2
    transition
    duration-300
    ease-in-out
    focus:outline-none
    has-[svg]:*:size-5
`;

const primaryClasses = `
    border-2
    border-solid
    border-transparent
    bg-green-500
    text-white
    dark:bg-green-400
    dark:text-gray-900
    hover:border-gray-600
    hover:bg-transparent
    hover:text-gray-600
    hover:dark:text-gray-300
    hover:dark:border-gray-300
`;

const secondaryClasses = `
    border-2
    border-solid
    border-transparent
    bg-gray-600
    text-white
    dark:bg-gray-300
    dark:text-gray-900
    hover:border-gray-600
    hover:bg-transparent
    hover:text-gray-600
    hover:dark:text-gray-300
    hover:dark:border-gray-300
`;

const specialClasses = `
    border-2
    border-solid
    border-gray-600
    bg-transparent
    text-gray-600
    dark:text-gray-300
    dark:border-gray-300
    hover:bg-green-500
    hover:text-white
    hover:dark:bg-green-400
    hover:dark:text-gray-900
`;

const kindClasses = {
	primary: primaryClasses,
	secondary: secondaryClasses,
	special: specialClasses,
};

export const Button: FC<ButtonProps> = ({
	children,
	disabled,
	className,
	kind = 'primary',
	...props
}) => (
	<button
		className={classNames(buttonBaseClasses, kindClasses[kind], className)}
		disabled={disabled}
		aria-disabled={disabled}
		{...props}
	>
		{children}
	</button>
);
