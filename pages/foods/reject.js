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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/bill-details?status=reject&_sort=createdAt:DESC`,
    {
      headers: {
        Authorization: `Bearer ${session?.jwt}`,
      },
    }
  );
  const foods = await res.data;

  return {
    props: { foods },
  };
};

const RejectPage = ({ foods }) => {
  return (
    <div className="border-2 border-gray border-solid rounded m-12 divide-y">
      <div className="flex justify-between pr-6 pl-6 pt-4 pb-4 ">
        <h1 className="pt-2 text-2xl font-bold"> Reject</h1>
      </div>
      <div className="grid grid-cols-8 pr-6 pl-6 pt-2 pb-2 ">
        <div className="place-self-center text-gray-400">Name</div>
        <div className="place-self-center text-gray-400">Table</div>
        <div className="col-span-2 place-self-center text-gray-400">
          Description
        </div>
        <div className="place-self-center text-gray-400">Status</div>
        <div className="place-self-center text-gray-400">Time</div>
        <div className="col-span-1 place-self-center text-gray-400"></div>
        <div className="col-span-1 place-self-center text-gray-400"></div>
      </div>

      {foods.map((food, key) => (
        <div key={key} className="grid grid-cols-8 pr-6 pl-6 pt-6 pb-6">
          <div className="place-self-center">{food.food.name}</div>
          <div className="place-self-center">null</div>
          <div className="place-self-center col-span-2">
            {food.user_description}
          </div>
          <div className="place-self-center">{food.status}</div>
          <div className="flex-wrap place-self-center">
            {dateFormat(food.createdAt)}
          </div>
          {/* <div className="col-span-1 pl-12">
						<button className="bg-[#F12B2C] text-white font-bold py-2 px-4 rounded-full">
							Reject
						</button>
					</div>
					<div className="col-span-1 pl-3">
						<button className="bg-[#29CC97] text-white font-bold py-2 px-4 rounded-full">
							Confirm
						</button>
					</div> */}
        </div>
      ))}
    </div>
  );
};

export default RejectPage;

RejectPage.getLayout = function getLayout(page) {
  return <Layout name="Foods">{page}</Layout>;
};
