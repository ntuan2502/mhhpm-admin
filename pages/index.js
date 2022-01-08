import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/Layout";

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { food: data },
  };
};

export default function Index() {
  return (
    <>
      <Head>
        <title>EzOrder | Index</title>
        <meta name="keywords" content="EzOrder" />
      </Head>
	  <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
