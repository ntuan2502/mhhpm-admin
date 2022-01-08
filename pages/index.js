import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
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
			<div>This is Home</div>
		</>
	);
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
