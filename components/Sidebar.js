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

export default function Sidebar() {
  return (
    <div className="bg-[#FF5F5F] h-screen">
      <div className="flex items-center p-5">
        <Image src="/assets/images/Logo 1.png" width={82} height={90}></Image>
        <div className="font-Muli text-[25px] ml-4 font-bold">Dashboard</div>
      </div>
      <div className="text-[16px] flex justify-center font-Mulish bg-[#C74A4A] p-4 text-white ">
        <div className="pl-5 w-3/12">
          <FontAwesomeIcon icon={faUtensils} />
        </div>
        <div className="w-8/12">Foods</div>
        <div className="w-1/12">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
      <Link href="/foods/pending">
        <div className="text-[16px] flex font-Mulish bg-[#D85050] p-4 text-black cursor-pointer">
          <div className="w-2/5 pl-12">
            <FontAwesomeIcon icon={faSpinner} />
          </div>
          <div className="">Pending</div>
        </div>
      </Link>
      <Link href="/foods/reject">
        <div className="text-[16px] flex font-Mulish bg-[#EB5757] p-4 text-black cursor-pointer">
          <div className="w-2/5 pl-12">
            <FontAwesomeIcon icon={faBan} />
          </div>
          <div>Reject</div>
        </div>
      </Link>
      <Link href="/foods/done">
        <div className="text-[16px] flex font-Mulish bg-[#EB5757] p-4 text-black cursor-pointer">
          <div className="w-2/5 pl-12">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div>Done</div>
        </div>
      </Link>
      <Link href="/bills">
        <div className="text-[16px] flex justify-center font-Mulish bg-[#C74A4A] p-4 text-white cursor-pointer">
          <div className="pl-5 w-3/12">
            <FontAwesomeIcon icon={faFileInvoice} />
          </div>
          <div className="w-8/12">Bills</div>
          <div className="w-1/12">
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </Link>
      <Link href="/bills/pending">
        <div className="text-[16px] flex font-Mulish bg-[#D85050] p-4 text-black cursor-pointer">
          <div className="w-2/5 pl-12">
            <FontAwesomeIcon icon={faSpinner} />
          </div>
          <div className="">Pending</div>
        </div>
      </Link>
      <Link href="/bills/null">
        <div className="text-[16px] flex font-Mulish bg-[#EB5757] p-4 text-black cursor-pointer">
          <div className="w-2/5 pl-12">
            <FontAwesomeIcon icon={faBan} />
          </div>
          <div>Null</div>
        </div>
      </Link>
      <Link href="/bills/done">
        <div className="text-[16px] flex font-Mulish bg-[#EB5757] p-4 text-black cursor-pointer">
          <div className="w-2/5 pl-12">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div>Done</div>
        </div>
      </Link>
      <Link href="/admin/revenue">
        <div className="text-[16px] flex justify-center font-Mulish bg-[#C74A4A] p-4 text-white cursor-pointer">
          <div className="pl-5 w-3/12">
            <FontAwesomeIcon icon={faChartPie} />
          </div>
          <div className="w-8/12">Admin</div>
        </div>
      </Link>
    </div>
  );
}
