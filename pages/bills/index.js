import axios from "axios";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/Layout";

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/bills`);
  const food = await res.data;

  return {
    props: { food },
  };
};

const BillDetail = ({ food }) => {
  const router = useRouter();
  var data = food;
  useEffect(() => {
    router.push({
      pathname: "/bills/" + data[0].id,
    });
  });
  return <div>Redirecting...</div>;
};

export default BillDetail;

BillDetail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
