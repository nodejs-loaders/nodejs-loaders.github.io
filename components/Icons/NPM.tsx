import type { FC, SVGProps } from 'react';

export const NPMIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg
		height={24}
		viewBox="0 0 24 24"
		width={24}
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="m0 0h24v24h-24z" fill="currentColor" opacity="0" />
		<g fill="currentColor">
			<path d="m18 21h-12a3 3 0 0 1 -3-3v-12a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3zm-12-16a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-12a1 1 0 0 0 -1-1z" />
			<path d="m12 9h4v10h-4z" />
		</g>
	</svg>
);
