import React from 'react';
import Image from 'next/image';

export default function Sidebar() {
	return <div className="Sildebar">
        <Image></Image>
        <div>Dashboard</div>
        <div>Bill Detail List</div>
        <div>Pending</div>
        <div>Reject</div>
        <div>Done</div>
        <div></div>
    </div>;
}
