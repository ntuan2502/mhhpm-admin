import axios from "axios";
import Layout from "../../components/Layout";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import _ from "lodash";
import moment from "moment";
import { getSession } from "next-auth/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/bills?status=done`,
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

const Admin = ({ bills }) => {
  //   console.log(bills);
  let count = 0;
  bills.map((bill) => {
    count += bill.total_prices;
  });
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Thống kê doanh thu trong năm ${moment().year()}`,
      },
    },
  };

  const labels_eng = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const labels = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Doanh thu",
        data: [
          _.random(1000000),
          _.random(1000000),
          _.random(1000000),
          _.random(1000000),
          _.random(1000000),
          _.random(1000000),
          _.random(1000000),
          _.random(1000000),
          _.random(1000000),
          _.random(1000000),
          _.random(1000000),
          count,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "Dataset 2",
      //   data: labels.map(() => _.shuffle(arrFake)[0]),
      //   borderColor: "rgb(53, 162, 235)",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Admin;

Admin.getLayout = function getLayout(page) {
  return <Layout name="Admin">{page}</Layout>;
};
