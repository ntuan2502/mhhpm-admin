import React from 'react';
import Image from 'next/image';

export default function Sidebar() {
	return (
		<div className="bg-[#FF5F5F] h-screen">
			<div className="flex items-center p-5">
				<Image src="/assets/images/Logo 1.png" width={82} height={90}></Image>
				<div className="font-Muli text-[25px] ml-4 font-bold">Dashboard</div>
			</div>
			<div className="text-[16px] flex justify-center font-Mulish bg-[#C74A4A] p-4 text-white">
				<div></div>
				Bill Detail List
			</div>
			<div className="text-[16px] flex justify-center">Pending</div>
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
