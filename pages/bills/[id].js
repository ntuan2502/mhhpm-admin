import { currencyFormat, dateFormat } from "../../lib/lib";
import { Router, useRouter } from "next/router";
import Layout from "../../components/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/bill-details?_where[bill.id]=" + id
  );
  const billDetails = await res.data;

  return {
    props: { billDetails },
  };
};
const Details = ({ billDetails }) => {
  return (
    <div className="border-2 border-gray border-solid rounded m-12 divide-y">
      <div className="flex justify-between pr-6 pl-6 pt-4 pb-4 ">
        <h1 className="pt-2 text-2xl font-bold">
          {" "}
          Bill ID: {billDetails[0].bill.id}
        </h1>
        <div className="grid grid-rows-2 pr-48">
          <h2>Total number:</h2>
          <h2 className="flex">
            Date:
            <div className="font-semibold pl-1">
              {dateFormat(billDetails[0].bill.createdAt)}
            </div>
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-5 pr-6 pl-6 pt-2 pb-2 ">
        <div className="text-gray-400">Name Food</div>
        <div className="place-self-center text-gray-400">Quantity</div>
        <div className="place-self-center text-gray-400">Money</div>
        <div className="col-span-2 place-self-center text-gray-400">Note</div>
      </div>

      {billDetails.map((billDetail, key) => (
        <div key={key} className="grid grid-cols-5 pr-6 pl-6 pt-6 pb-6">
          <div>{billDetail.food.name}</div>
          <div className="place-self-center">{billDetail.quantity}</div>
          <div className="place-self-center">
            {currencyFormat(billDetail.prices)}
          </div>
          <div className="flex-wrap col-span-2 place-self-center">
            {billDetail.user_description}
          </div>
        </div>
      ))}

      <div className="grid grid-cols-5 pr-6 pl-6 pt-4 pb-4">
        <div></div>
        <div></div>
        <div className="place-self-center">
          {currencyFormat(billDetails[0].bill.total_prices)}
        </div>
        <div className="col-span-2 place-self-center">
          <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full mr-4">
            {" "}
            Reject
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full ml-4">
            {" "}
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;

Details.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};