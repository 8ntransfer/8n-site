export type ButtonColor = 'primary' | 'secondary' | 'ghost' | 'danger' | 'link' | 'white';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'link';
export type ButtonVariant = 'contained' | 'outlined' | 'text';

export const ButtonCommonClass =
	'font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 inline-flex items-center justify-center';

export const ButtonColorClass = {
	primary: 'bg-blue-600 text-white hover:bg-blue-800',
	secondary: 'bg-gray-500/10 text-gray-900 hover:bg-gray-500/5',
	white: 'bg-white text-blue-600 hover:bg-gray-200',
	ghost: ' text-gray-900 hover:bg-gray-500/5',
	danger: 'bg-red-500 text-white',
	link: ' text-gray-900 hover:underline underline-offset-2'
};

export const ButtonHoverClass = {
	primary: 'bg-blue-600 text-white',
	secondary: 'bg-gray-500/5',
	white: 'hover:bg-gray-100 ',
	ghost: ' bg-gray-500/20',
	danger: 'bg-red-500 text-white',
	link: ' text-gray-900 hover:underline underline-offset-2'
};

export const ButtonSizeClass = {
	small: 'px-4 py-2 text-sm',
	medium: 'px-6 py-3 text-base',
	large: 'px-8 py-4 text-lg'
};

export const ButtonVariantClass = {
	contained: 'rounded-md',
	outlined: 'rounded-lg border-2 border-gray-600',
	text: 'rounded-lg bg-transparent hover:bg-gray-600'
};
