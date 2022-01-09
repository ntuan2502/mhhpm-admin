import axios from "axios";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import { dateFormat } from "../../lib/lib";

export const getServerSideProps = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/bills?_where[status]=pending&_sort=createdAt:DESC`
  );
  const bills = await res.data;

  return {
    props: { bills },
  };
};

const pendingPage = ({ bills }) => {
  return (
    <div className="border-2 border-gray border-solid rounded m-12 divide-y">
      <div className="flex justify-between pr-6 pl-6 pt-4 pb-4 ">
        <h1 className="pt-2 text-2xl font-bold">Pending</h1>
      </div>
      <div className="grid grid-cols-5 pr-6 pl-6 pt-2 pb-2 ">
        <div className="text-gray-400">ID</div>
        <div className="place-self-center text-gray-400">Table</div>
        <div className="place-self-center text-gray-400">Status</div>
        <div className="col-span-2 place-self-center text-gray-400">Time</div>
      </div>

      {bills.map((bill, key) => (
        <div key={key} className="grid grid-cols-5 pr-6 pl-6 pt-6 pb-6">
          <Link href={`bills/${bill.id}`}>
            <div className="cursor-pointer">{bill.id}</div>
          </Link>
          <div className="place-self-center">{bill.table.name}</div>
          <div className="place-self-center">{bill.status}</div>
          <div className="flex-wrap col-span-2 place-self-center">
            {dateFormat(bill.createdAt)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default pendingPage;

pendingPage.getLayout = function getLayout(page) {
  return <Layout name="Bills">{page}</Layout>;
};
