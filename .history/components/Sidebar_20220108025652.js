import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFileInvoice,
	faCaretDown,
	faSpinner,
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
	return (
		<div className="bg-[#FF5F5F] h-screen">
			<div className="flex items-center p-5">
				<Image src="/assets/images/Logo 1.png" width={82} height={90}></Image>
				<div className="font-Muli text-[25px] ml-4 font-bold">Dashboard</div>
			</div>
			<div className="text-[16px] flex justify-center font-Mulish bg-[#C74A4A] p-4 text-white ">
				<div className="flex items-center pr-6">
					<FontAwesomeIcon icon={faFileInvoice} />
				</div>
				Bill Detail List
				<div className="flex items-center pl-10">
					<FontAwesomeIcon icon={faCaretDown} />
				</div>
			</div>
			<div className="text-[16px] flex justify-center font-Mulish bg-[#D85050] p-4 text-black ">
				<div className="flex items-center pr-6">
					<FontAwesomeIcon icon={faSpinner} />
				</div>
				Pending
			</div>
			<div className="text-[16px] flex font-Mulish p-4 text-black ">
				<div className="flex items-center pr-6 w-3/12">
					<FontAwesomeIcon icon={faSpinner} />
				</div>
				<div>Rejcet</div>
			</div>
			<div className="text-[16px] flex justify-center">Reject</div>
			<div className="text-[16px] flex justify-center">Done</div>
			<div className="text-[16px] flex justify-center">Bill List</div>
			<div className="text-[16px] flex justify-center">Pending</div>
			<div className="text-[16px] flex justify-center">Null</div>
			<div className="text-[16px] flex justify-center">Done</div>
			<div className="text-[16px] flex justify-center">Admin</div>
		</div>
	);
}
