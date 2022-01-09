import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/Layout";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { food: data },
    revalidate: 10,
  };
};

const BillDetail = ({ food }) => {
  const router = useRouter();
  var data = food;
  useEffect(() => {
    router.push({
      pathname: "/bill_detail/" + data[0].id,
    });
  });
  return <div>Redirecting...</div>;
};

export default BillDetail;

BillDetail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
