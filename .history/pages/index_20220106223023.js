import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from '../components/index/Slider';

export default function Home() {
	const [sliderImage, setSliderImage] = useState([]);
	useEffect(() => {
		const slider1 = '/assets/img/slider1.png';
		const slider2 = '/assets/img/slider2.png';

		const slider3 = '/assets/img/slider3.png';
		const slider4 = '/assets/img/slider4.png';

		const ImageUrl = [slider1, slider2, slider3, slider4];
		setSliderImage(ImageUrl);
	}, []);
	return (
		<>
			<Head>
				<title>EzOrder | Home</title>
				<meta name="keywords" content="EzOrder"></meta>
			</Head>
			
		</>
	);
}
