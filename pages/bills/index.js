import axios from "axios";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import { dateFormat } from "../../lib/lib";

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/bills?_sort=createdAt:DESC`,
    {
      headers: {
        Authorization: `Bearer ${session?.jwt}`,
      },
    }
  );
  const bills = await res.data;

  return {
    props: { bills },
  };
};

const Bills = ({ bills }) => {
  // const router = useRouter();
  // var data = food;
  // useEffect(() => {
  //   router.push({
  //     pathname: "/bills/" + data[0].id,
  //   });
  // });
  // return <div>Redirecting...</div>;

  return (
    <div className="border-2 border-gray border-solid rounded m-12 divide-y">
      <div className="flex justify-between pr-6 pl-6 pt-4 pb-4 ">
        <h1 className="pt-2 text-2xl font-bold"> Bills</h1>
      </div>
      <div className="grid grid-cols-5 pr-6 pl-6 pt-2 pb-2 ">
        <div className="text-gray-400">ID</div>
        <div className="place-self-center text-gray-400">Table</div>
        <div className="place-self-center text-gray-400">Status</div>
        <div className="col-span-2 place-self-center text-gray-400">Time</div>
      </div>

      {bills.map((bill, key) => (
        <div key={key} className="grid grid-cols-5 pr-6 pl-6 pt-6 pb-6">
          <div>{bill.id}</div>
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

export default Bills;

Bills.getLayout = function getLayout(page) {
  return <Layout name="Bills">{page}</Layout>;
};
