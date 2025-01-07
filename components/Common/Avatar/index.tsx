'use client';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import classNames from 'classnames';
import styles from './index.module.css';
import type { ComponentProps } from 'react';

const Avatar = ({
	className,
	ref,
	...props
}: ComponentProps<typeof AvatarPrimitive.Root>) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={classNames(className, styles.root)}
		{...props}
	/>
);

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = ({
	className,
	ref,
	...props
}: ComponentProps<typeof AvatarPrimitive.Image>) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={classNames(styles.image, className)}
		{...props}
	/>
);

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = ({
	className,
	ref,
	...props
}: ComponentProps<typeof AvatarPrimitive.Fallback>) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={classNames(styles.fallback, className)}
		{...props}
	/>
);

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
