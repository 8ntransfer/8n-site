export type Link = {
	id: number;
	title: string;
	text: string;
	href: string;
	parent?: number;
	standalone?: boolean;
};
