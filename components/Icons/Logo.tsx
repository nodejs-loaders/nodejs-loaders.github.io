import type { FC, SVGProps } from 'react';

export const Logo: FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg
		fill="none"
		height={175}
		viewBox="0 0 200 175"
		width={200}
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M10.199 65.02 50 42.043 89.801 65.02v45.958L50 133.959l-39.801-22.98V65.021Z"
			stroke="#3E7A38"
			strokeWidth={7}
		/>
		<path
			d="M60.199 27.02 100 4.042l39.801 22.98v45.958L100 95.96l-39.801-22.98V27.021Z"
			stroke="#3E7A38"
			strokeWidth={7}
		/>
		<path
			d="M60.199 102.021 100 79.041l39.801 22.98v45.958L100 170.959l-39.801-22.98v-45.958Z"
			stroke="#3E7A38"
			strokeWidth={7}
		/>
		<path
			d="M110.199 65.02 150 42.043l39.801 22.979v45.958L150 133.959l-39.801-22.98V65.021Z"
			stroke="#3E7A38"
			strokeWidth={7}
		/>
	</svg>
);
