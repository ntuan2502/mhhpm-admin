import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import { currencyFormat, dateFormat } from "../../lib/lib";

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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/bills?_where[status]=pending&_sort=createdAt:DESC`,
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



const pendingPage = ({ bills }) => {
  const { data: session } = useSession();
  const router = useRouter();
  async function handleStatus(status, billId) {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/bills/${billId}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${session?.jwt}`,
        },
      }
    );
    console.log(res.data);
    router.push("/bills/pending");
  }
  return (
    <div className="border-2 border-gray border-solid rounded m-12 divide-y">
      <div className="flex justify-between pr-6 pl-6 pt-4 pb-4 ">
        <h1 className="pt-2 text-2xl font-bold">Pending</h1>
      </div>
      <div className="grid grid-cols-6 pr-6 pl-6 pt-2 pb-2 ">
        <div className="text-gray-400">ID</div>
        <div className="place-self-center text-gray-400">Table</div>
        <div className="place-self-center text-gray-400">Status</div>
        <div className="place-self-center text-gray-400">Total Prices</div>
        <div className="place-self-center text-gray-400">Time</div>
        <div className="place-self-center text-gray-400">Status</div>
      </div>

      {bills.map((bill, key) => (
        <div key={key} className="grid grid-cols-6 p-6">
          <Link href={`/bills/${bill.id}`}>
            <div className="cursor-pointer place-self-center">{bill.id}</div>
          </Link>
          <div className="place-self-center">{bill.table.name}</div>
          <div className="place-self-center">{bill.status}</div>
          <div className="place-self-center">
            {currencyFormat(bill.total_prices)}
          </div>
          <div className="flex-wrap place-self-center">
            {dateFormat(bill.createdAt)}
          </div>
          <button
            onClick={() => handleStatus("done",bill._id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full ml-4"
          >
            Done
          </button>
        </div>
      ))}
    </div>
  );
};

export default pendingPage;

pendingPage.getLayout = function getLayout(page) {
  return <Layout name="Bills">{page}</Layout>;
};
