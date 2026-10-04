import type { ImageMetadata } from 'astro';
import clicker from '../assets/clicker.png';
import gyrofidget from '../assets/gyrofidget.png';
import keychainfidget from '../assets/keychainfidget.png';
import passthrucones from '../assets/passthrucones.png';

export interface Print {
	slug: string;
	/** TODO: nimetused on veel kinnitamata (konsulteeritakse rühma) */
	name: string;
	description: string;
	price: number;
	image: ImageMetadata;
}

export const prints: Print[] = [
	{
		slug: 'kb-clicker-fidget',
		name: 'Clicker Fidget',
		description: 'Nupuklõpsu järgi kujundatud rahustav käsitööas.',
		price: 5.99,
		image: clicker,
	},
	{
		slug: 'gyro-fidget-spinner',
		name: 'Gyro Fidget Spinner',
		description: 'Tõmbekeskmega pöörlev mänguas, mida on mugav käes keerutada.',
		price: 7.99,
		image: gyrofidget,
	},
	{
		slug: 'impossible-passthrough-cone',
		name: 'Impossible Passthrough Cone',
		description:
			'Kaks koonuse kujuga detaili, mis keeramisel teineteise sisse minevad ja näivad läbivat tahket materjali.',
		price: 13.99,
		image: passthrucones,
	},
	{
		slug: 'keychain-spinner',
		name: 'Keychain Spinner',
		description: 'Võtmehõljale kinnitatav pöörlev mänguas.',
		price: 3.99,
		image: keychainfidget,
	},
];
