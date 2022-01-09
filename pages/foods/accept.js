import axios from "axios";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import { dateFormat } from "../../lib/lib";

export const getServerSideProps = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/bill-details?status=accept&_sort=createdAt:DESC`
  );
  const foods = await res.data;

  return {
    props: { foods },
  };
};

const AcceptPage = ({ foods }) => {
  return (
    <div className="border-2 border-gray border-solid rounded m-12 divide-y">
      <div className="flex justify-between pr-6 pl-6 pt-4 pb-4 ">
        <h1 className="pt-2 text-2xl font-bold">Accept</h1>
      </div>
      <div className="grid grid-cols-6 pr-6 pl-6 pt-2 pb-2 ">
        <div className="place-self-center text-gray-400">Name</div>
        <div className="place-self-center text-gray-400">Table</div>
        <div className="place-self-center text-gray-400">Description</div>
        <div className="place-self-center text-gray-400">Status</div>
        <div className="col-span-2 place-self-center text-gray-400">Time</div>
      </div>

      {foods.map((food, key) => (
        <div key={key} className="grid grid-cols-6 pr-6 pl-6 pt-6 pb-6">
          <div className="">{food.food.name}</div>
          <div className="place-self-center">null</div>
          <div className="">{food.user_description}</div>
          <div className="place-self-center">{food.status}</div>
          <div className="flex-wrap col-span-2 place-self-center">
            {dateFormat(food.createdAt)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcceptPage;

AcceptPage.getLayout = function getLayout(page) {
  return <Layout name="Foods">{page}</Layout>;
};
