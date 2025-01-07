import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './index.module.css';
import type { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	kind?: 'primary' | 'secondary' | 'special';
};

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, disabled, className, kind = 'primary', ...props }, ref) => (
		<button
			ref={ref}
			className={classNames(className, styles.button, styles[kind])}
			disabled={disabled}
			aria-disabled={disabled}
			{...props}
		>
			{children}
		</button>
	)
);

Button.displayName = 'Button';

export default Button;
