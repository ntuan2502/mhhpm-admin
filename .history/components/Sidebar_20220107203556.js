import React from 'react';
import Image from 'next/image';

export default function Sidebar() {
	return (
		<div className="Sildebar">
			<Image href="/assets"></Image>
			<div>Dashboard</div>
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
