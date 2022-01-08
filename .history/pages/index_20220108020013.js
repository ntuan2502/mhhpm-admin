import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';

export const getServerSideProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: { food: data },
	};
};

export default function Home() {
	return (
		<>
			<Head>
				<title>EzOrder | Home</title>
				<meta name="keywords" content="EzOrder"></meta>
			</Head>
			{/* <FontAwesomeIcon icon={faCode}></FontAwesomeIcon> */}
		</>
	);
}
