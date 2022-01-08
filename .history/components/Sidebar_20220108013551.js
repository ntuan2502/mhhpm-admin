import React from 'react';
import Image from 'next/image';

export default function Sidebar() {
	return (
		<div className="bg-[#FF5F5F] h-screen">
			<div className="flex items-center">
				<Image src="/assets/images/Logo 1.png" width={82} height={90}></Image>
				<div className="font-Muli text-[25px] ml-4 font-bold">Dashboard</div>
			</div>
			<div className="textflex justify-center font-Mulish">Bill Detail List</div>
			<div className="textflex justify-center">Pending</div>
			<div className="textflex justify-center">Reject</div>
			<div className="textflex justify-center">Done</div>
			<div className="textflex justify-center">Bill List</div>
			<div className="textflex justify-center">Pending</div>
			<div className="textflex justify-center">Null</div>
			<div className="textflex justify-center">Done</div>
			<div className="textflex justify-center">Admin</div>
		</div>
	);
}
