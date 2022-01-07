import React from 'react';
import Image from 'next/image';

export default function Sidebar() {
	return (
		<div className="bg-[#FF5F5F] ">
			<div className="flex items-center">
				<Image src="/assets/images/Logo 1.png" width={82} height={90}></Image>
				<div>Dashboard</div>
			</div>
			<div className="flex justify-center">Bill Detail List</div>
			<div className="flex justify-center">Pending</div>
			<div className="flex justify-center">Reject</div>
			<div className="flex justify-center">Done</div>
			<div className="flex justify-center">Bill List</div>
			<div className="flex justify-center">Pending</div>
			<div className="flex justify-center">Null</div>
			<div className="flex justify-center">Done</div>
			<div className="flex justify-center">Admin</div>
		</div>
	);
}
