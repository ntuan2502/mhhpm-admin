import axios from "axios";
import Layout from "../../components/Layout";
import React, { useEffect, useState } from "react";
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
import { currencyFormat, sumArray } from "../../lib/lib";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";

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

  const year = ctx.query.year || moment().year();
  const preYear = parseInt(year) - 1;
  const nextYear = parseInt(year) + 1;

  async function getTotalPricesInYear(year) {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/bills?status=done&createdAt_gte=${year}-01-01&createdAt_lte=${year}-12-31`,
      {
        headers: {
          Authorization: `Bearer ${session?.jwt}`,
        },
      }
    );
    const bills = await res.data;
    const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (bills.length > 0) {
      bills.map((bill) => {
        if (bill.createdAt.toString().includes(year + "-01")) {
          count[0] += bill.total_prices;
        } else if (bill.createdAt.toString().includes(year + "-02")) {
          count[1] += bill.total_prices;
        } else if (bill.createdAt.toString().includes(year + "-03")) {
          count[2] += bill.total_prices;
        } else if (bill.createdAt.toString().includes(year + "-04")) {
          count[3] += bill.total_prices;
        } else if (bill.createdAt.toString().includes(year + "-05")) {
          count[4] += bill.total_prices;
        } else if (bill.createdAt.toString().includes(year + "-06")) {
          count[5] += bill.total_prices;
        } else if (bill.createdAt.toString().includes(year + "-07")) {
          count[6] += bill.total_prices;
        } else if (bill.createdAt.toString().includes(year + "-08")) {
          count[7] += bill.total_prices;
        } else if (bill.createdAt.toString().includes(year + "-09")) {
          count[8] += bill.total_prices;
        } else if (bill.createdAt.toString().includes(year + "-10")) {
          count[9] += bill.total_prices;
        } else if (bill.createdAt.toString().includes(year + "-11")) {
          count[10] += bill.total_prices;
        } else {
          count[11] += bill.total_prices;
        }
      });
    }
    return count;
  }

  const revenues1 = await getTotalPricesInYear(preYear);
  const revenues2 = await getTotalPricesInYear(year);

  return {
    props: { revenues1, revenues2, year, preYear, nextYear },
  };
};

const Admin = ({ revenues1, revenues2, year, preYear, nextYear }) => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date().setFullYear(year));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Th???ng k?? doanh thu trong n??m ${preYear} - ${year}`,
      },
    },
  };

  const labels = [
    "Th??ng 1",
    "Th??ng 2",
    "Th??ng 3",
    "Th??ng 4",
    "Th??ng 5",
    "Th??ng 6",
    "Th??ng 7",
    "Th??ng 8",
    "Th??ng 9",
    "Th??ng 10",
    "Th??ng 11",
    "Th??ng 12",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: `${preYear}`,
        data: revenues1,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: `${year}`,
        data: revenues2,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="mx-5">
      <div className="flex justify-center items-center">
        <div className="mr-2 font-bold">N??m:</div>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            router.push(`admin?year=${date.getFullYear()}`);
          }}
          showYearPicker
          dateFormat="yyyy"
        />
      </div>
      <div className="flex w-2/3">
        <Line options={options} data={data} />
      </div>
      <div className="mt-10">
        <div className="flex">
          Doanh thu n??m {preYear}:
          <div className="font-bold px-2">
            {currencyFormat(sumArray(revenues1))}
          </div>
        </div>
        <div className="flex">
          Doanh thu n??m {year}:
          <div className="font-bold px-2">
            {currencyFormat(sumArray(revenues2))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page) {
  return <Layout name="Admin">{page}</Layout>;
};
