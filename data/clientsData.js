import { v4 as uuidv4 } from 'uuid';

// Import images from the public directory
import SDJLogoWhiteVersion from '../public/images/brands/sdj.png';
import OnDemandAutoCareLogoLight from '../public/images/brands/OnDemand.png';
import SparkLogoLightBG from '../public/images/brands/spark.png';
import HouseOfNilameLogoWhiteHorizontal from '../public/images/brands/HON.png';
import IshasArtwork from '../public/images/brands/Isha.png';
import KKLuxLogoFull from '../public/images/brands/KK.png';
import Experatake from '../public/images/brands/experatake.png';
import CommpowerLogo from '../public/images/brands/commpower.png';

export const clientsHeading = 'Small / Medium Scale CLient I have worked with;';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'SDJ Logo White Version',
		img: SDJLogoWhiteVersion,
	},
	{
		id: uuidv4(),
		title: 'OnDemand AutoCare',
		img: OnDemandAutoCareLogoLight,
	},
	{
		id: uuidv4(),
		title: 'Spark',
		img: SparkLogoLightBG,
	},
	{
		id: uuidv4(),
		title: 'House of Nilame',
		img: HouseOfNilameLogoWhiteHorizontal,
	},
	{
		id: uuidv4(),
		title: "Isha's Artwork",
		img: IshasArtwork,
	},
	{
		id: uuidv4(),
		title: 'KK Lux',
		img: KKLuxLogoFull,
	},
	{
		id: uuidv4(),
		title: 'Experatake',
		img: Experatake,
	},
	{
		id: uuidv4(),
		title: 'Commpower',
		img: CommpowerLogo,
	},
];
