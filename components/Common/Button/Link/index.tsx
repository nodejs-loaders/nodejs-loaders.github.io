import Link from 'next/link';
import classNames from 'classnames';
import styles from '../index.module.css';
import type { FC, ComponentProps } from 'react';

type ButtonLinkProps = ComponentProps<typeof Link> & {
	kind?: 'primary' | 'secondary' | 'special';
};

const ButtonLink: FC<ButtonLinkProps> = ({
	children,
	className,
	kind = 'primary',
	...props
}) => (
	<Link
		className={classNames(className, styles.button, styles[kind])}
		{...props}
	>
		{children}
	</Link>
);

export default ButtonLink;
