import Link from 'next/link';
import classNames from 'classnames';
import styles from '../index.module.css';
import type { FC, ComponentProps } from 'react';

type ButtonLinkProps = ComponentProps<typeof Link>;

const ButtonLink: FC<ButtonLinkProps> = ({ children, className, ...props }) => (
	<Link className={classNames(className, styles.button)} {...props}>
		{children}
	</Link>
);

export default ButtonLink;
