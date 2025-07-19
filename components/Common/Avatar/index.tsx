'use client';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import classNames from 'classnames';
import type { ComponentProps } from 'react';

const Avatar = ({
	className,
	ref,
	...props
}: ComponentProps<typeof AvatarPrimitive.Root>) => (
	<AvatarPrimitive.Root
		className={classNames(
			className,
			'flex size-10 shrink-0 overflow-hidden rounded-md shadow-green-300 shadow-sm outline-2 outline-green-300 transition-shadow hover:shadow-green-400 hover:shadow-md dark:shadow-green-800 dark:outline-green-800 hover:dark:shadow-green-700',
		)}
		ref={ref}
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
		className={classNames('aspect-square size-full', className)}
		ref={ref}
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
		className={classNames(
			'flex size-full items-center justify-center rounded-md bg-green-100 font-bold text-base text-black dark:bg-green-800 dark:text-white',
			className,
		)}
		ref={ref}
		{...props}
	/>
);

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
