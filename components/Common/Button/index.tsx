import classNames from 'classnames';
import styles from './index.module.css';
import type { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	kind?: 'primary' | 'secondary' | 'special';
};

export const Button: FC<ButtonProps> = ({
	children,
	disabled,
	className,
	kind = 'primary',
	...props
}) => (
	<button
		className={classNames(className, styles.button, styles[kind])}
		disabled={disabled}
		aria-disabled={disabled}
		{...props}
	>
		{children}
	</button>
);
