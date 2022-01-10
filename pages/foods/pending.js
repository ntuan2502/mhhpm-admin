import axios from 'axios';
import { getSession, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { dateFormat } from '../../lib/lib';

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx);
	if (!session) {
		return {
			redirect: {
				destination: '/login',
			},
		};
	}

	const res = await axios.get(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/bill-details?status=pending&_sort=createdAt:ASC`,
		{
			headers: {
				Authorization: `Bearer ${session?.jwt}`,
			},
		},
	);
	const foods = await res.data;
	return {
		props: { foods },
	};
};

const PendingPage = ({ foods }) => {
	const [reject, setReject] = useState(0);
	const { data: session } = useSession();
	const router = useRouter();

	async function handleStatus(status, billDetailId) {
		let description;
		if (status == 'reject') {
			description = document.querySelector('.description').value;
			const res = await axios.put(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/bill-details/${billDetailId}`,
				{ status, description },
				{
					headers: {
						Authorization: `Bearer ${session?.jwt}`,
					},
				},
			);
		} else {
			const res = await axios.put(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/bill-details/${billDetailId}`,
				{ status },
				{
					headers: {
						Authorization: `Bearer ${session?.jwt}`,
					},
				},
			);
		}
		router.reload();
	}

	return (
		<div className="border-2 border-gray border-solid rounded m-12 divide-y">
			<div className="flex justify-between pr-6 pl-6 pt-4 pb-4 ">
				<h1 className="pt-2 text-2xl font-bold"> Pending</h1>
			</div>
			<div className="grid grid-cols-8 pr-6 pl-6 pt-2 pb-2 ">
				<div className="col-span-1 place-self-center text-gray-400">Name</div>
				<div className="col-span-1 place-self-center text-gray-400">
					Quantity
				</div>
				<div className="col-span-2 place-self-center text-gray-400">
					Description
				</div>
				<div className="col-span-1 place-self-center text-gray-400">Status</div>
				<div className="col-span-1 place-self-center text-gray-400">Time</div>
				{/* <div className="col-span-1 place-self-center text-gray-400"></div> */}
				<div className="col-span-2 place-self-center text-gray-400">Status</div>
			</div>

			{foods.map((food, key) => (
				<div key={key} className="grid grid-cols-8 pr-6 pl-6 pt-6 pb-6">
					<div className="col-span-1 place-self-center">{food.food.name}</div>
					<div className="col-span-1 place-self-center">{food.quantity}</div>
					<div className="col-span-2 place-self-center">
						{food.user_description}
					</div>
					<div className="col-span-1 place-self-center">{food.status}</div>
					<div className="flex-wrap col-span-1 place-self-center">
						{dateFormat(food.createdAt)}
					</div>
					<div className="col-span-1 pl-12">
						<button
							onClick={() => {
								setReject(food.id);
							}}
							// onClick={() => handleStatus('reject', food.id)}
							className="bg-[#F12B2C] text-white font-bold py-2 px-4 rounded-full"
						>
							Reject
						</button>
					</div>
					<div className="col-span-1 pl-3">
						<button
							onClick={() => handleStatus('accept', food.id)}
							className="bg-[#29CC97] text-white font-bold py-2 px-4 rounded-full"
						>
							Accept
						</button>
					</div>
				</div>
			))}
			{reject != 0 && (
				<>
					<div
						className="Layout fixed top-0 bottom-0 left-0 right-0 bg-black_RGBA"
						onClick={() => {
							setReject(0);
						}}
					></div>
					<div className="fixed w-[600px] h-1/2 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-7">
						<div className="text-center pt-2 text-2xl font-bold pb-5">
							Description Reject
						</div>
						<div className="grid">
							<textarea
								className="description h-44 shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="text"
								placeholder="Description"
							></textarea>
							<button
								className="bg-[#29CC97] content-center text-white font-bold py-2 px-4 rounded-full"
								onClick={() => handleStatus('reject', reject)}
							>
								Accept
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default PendingPage;

PendingPage.getLayout = function getLayout(page) {
	return <Layout name="Foods">{page}</Layout>;
};
