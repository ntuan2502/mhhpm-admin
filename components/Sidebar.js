import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faCaretDown,
  faSpinner,
  faBan,
  faAward,
  faUtensils,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  const [showMeBills, setShowMe1] = useState(
    router.route.includes("bills") ? true : false
  );
  function toggleBills() {
    setShowMe1(!showMeBills);
  }
  const [showMeFoods, setShowMe2] = useState(
    router.route.includes("foods") ? true : false
  );
  function toggleFoods() {
    setShowMe2(!showMeFoods);
  }
  return (
    <div className="">
      <div className="flex items-center p-5">
        <Image src="/assets/images/Logo 1.png" width={82} height={90}></Image>
        <div className="font-Muli text-[25px] ml-4 font-bold">Dashboard</div>
      </div>
      <Link href="/foods">
        <div className="text-[16px] flex justify-center font-Mulish bg-[#C74A4A] p-4 text-white cursor-pointer">
          <div className="pl-5 w-3/12">
            <FontAwesomeIcon icon={faUtensils} />
          </div>
          <div className="w-8/12">Foods</div>
          <div className="w-1/12" onClick={toggleFoods}>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </Link>
      <div
        style={{
          display: showMeFoods ? "block" : "none",
        }}
      >
        <Link href="/foods/pending">
          <div
            className={`text-[16px] flex font-Mulish hover:bg-[#D85050] bg-[#EB5757] p-4 text-black cursor-pointer ${
              router.route == "/foods/pending" && "bg-[#D85050]"
            }`}
          >
            <div className="w-2/5 pl-12">
              <FontAwesomeIcon icon={faSpinner} />
            </div>
            <div className="">Pending</div>
          </div>
        </Link>
        <Link href="/foods/reject">
          <div
            className={`text-[16px] flex font-Mulish hover:bg-[#D85050] bg-[#EB5757] p-4 text-black cursor-pointer ${
              router.route == "/foods/reject" && "bg-[#D85050]"
            }`}
          >
            <div className="w-2/5 pl-12">
              <FontAwesomeIcon icon={faBan} />
            </div>
            <div>Reject</div>
          </div>
        </Link>
        <Link href="/foods/accept">
          <div
            className={`text-[16px] flex font-Mulish hover:bg-[#D85050] bg-[#EB5757] p-4 text-black cursor-pointer ${
              router.route == "/foods/accept" && "bg-[#D85050]"
            }`}
          >
            <div className="w-2/5 pl-12">
              <FontAwesomeIcon icon={faAward} />
            </div>
            <div>Accept</div>
          </div>
        </Link>
      </div>
      <Link href="/bills">
        <div className="text-[16px] flex justify-center font-Mulish bg-[#C74A4A] p-4 text-white cursor-pointer">
          <div className="pl-5 w-3/12">
            <FontAwesomeIcon icon={faFileInvoice} />
          </div>
          <div className="w-8/12">Bills</div>
          <div className="w-1/12" onClick={toggleBills}>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </Link>
      <div
        style={{
          display: showMeBills ? "block" : "none",
        }}
      >
        <Link href="/bills/pending">
          <div
            className={`text-[16px] flex font-Mulish hover:bg-[#D85050] bg-[#EB5757] p-4 text-black cursor-pointer ${
              router.route == "/bills/pending" && "bg-[#D85050]"
            }`}
          >
            <div className="w-2/5 pl-12">
              <FontAwesomeIcon icon={faSpinner} />
            </div>
            <div className="">Pending</div>
          </div>
        </Link>
        <Link href="/bills/null">
          <div
            className={`text-[16px] flex font-Mulish hover:bg-[#D85050] bg-[#EB5757] p-4 text-black cursor-pointer ${
              router.route == "/bills/null" && "bg-[#D85050]"
            }`}
          >
            <div className="w-2/5 pl-12">
              <FontAwesomeIcon icon={faBan} />
            </div>
            <div>Null</div>
          </div>
        </Link>
        <Link href="/bills/done">
          <div
            className={`text-[16px] flex font-Mulish hover:bg-[#D85050] bg-[#EB5757] p-4 text-black cursor-pointer ${
              router.route == "/bills/done" && "bg-[#D85050]"
            }`}
          >
            <div className="w-2/5 pl-12">
              <FontAwesomeIcon icon={faAward} />
            </div>
            <div>Done</div>
          </div>
        </Link>
      </div>
      <Link href="/admin">
        <div className="text-[16px] flex justify-center font-Mulish bg-[#C74A4A] p-4 text-white cursor-pointer">
          <div className="pl-5 w-3/12">
            <FontAwesomeIcon icon={faChartPie} />
          </div>
          <div className="w-9/12">Admin</div>
        </div>
      </Link>
    </div>
  );
}
