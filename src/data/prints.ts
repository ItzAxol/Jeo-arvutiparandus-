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
	slug: 'mystery-box-small',
	name: 'Mystery Box Small',
	description: 'Väikses Mystery Boxis ootab sind üks mitmest erineva disainiga 3D-prinditud paat.',
	price: 2.99,
	image: clicker,
},
{
	slug: 'mystery-box-medium',
	name: 'Mystery Box Medium',
	description: 'Keskmises Mystery Boxis ootab sind kaks erilisema disainiga või mitmevärviline 3D-prinditud paat.',
	price: 4.99,
	image: gyrofidget,
},
{
	slug: 'mystery-box-big',
	name: 'Mystery Box Big',
	description: 'Suures Mystery Boxis ootab sind kolm 3D-prinditud paati.',
	price: 5.99,
	image: passthrucones,
},

];
