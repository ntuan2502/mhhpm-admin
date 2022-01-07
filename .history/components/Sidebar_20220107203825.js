import React from 'react';
import Image from 'next/image';

export default function Sidebar() {
	return (
		<div className="Sildebar">
			<div className="flex items-center">
				<Image src="/assets/images/Logo 1.png" width={82} height={90}></Image>
				<div>Dashboard</div>
			</div>

			<div>Bill Detail List</div>
			<div>Pending</div>
			<div>Reject</div>
			<div>Done</div>
			<div>Bill List</div>
			<div>Pending</div>
			<div>Null</div>
			<div>Done</div>
			<div>Admin</div>
		</div>
	);
}
