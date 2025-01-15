import type { FC, SVGProps } from 'react';

const Logo: FC<SVGProps<SVGSVGElement>> = props => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 200 175"
		width={200}
		height={175}
		{...props}
	>
		<path
			stroke="#3E7A38"
			strokeWidth={7}
			d="M10.199 65.02 50 42.043 89.801 65.02v45.958L50 133.959l-39.801-22.98V65.021Z"
		/>
		<path
			stroke="#3E7A38"
			strokeWidth={7}
			d="M60.199 27.02 100 4.042l39.801 22.98v45.958L100 95.96l-39.801-22.98V27.021Z"
		/>
		<path
			stroke="#3E7A38"
			strokeWidth={7}
			d="M60.199 102.021 100 79.041l39.801 22.98v45.958L100 170.959l-39.801-22.98v-45.958Z"
		/>
		<path
			stroke="#3E7A38"
			strokeWidth={7}
			d="M110.199 65.02 150 42.043l39.801 22.979v45.958L150 133.959l-39.801-22.98V65.021Z"
		/>
	</svg>
);

export default Logo;
