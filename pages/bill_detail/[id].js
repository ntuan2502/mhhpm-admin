// export const getStaticPaths = async () => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/users');
// 	const data = await res.json();

// 	const paths = data.map((monan) => {
// 		return {
// 			params: { id: monan.id.toString() },
// 		};
// 	});

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };
import { Router, useRouter } from 'next/router';

export const getServerSideProps = async (context) => {
	const id = context.params.id;
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
	const data = await res.json();

	return {
		props: { food: data },
	};
};

const Details = ({ food }) => {
	return (
		<div class="border-2 border-gray border-solid rounded m-12 divide-y">
            <div class="flex justify-between pr-6 pl-6 pt-4 pb-4 ">
                <h1 class="pt-2 text-2xl font-bold"> Bill ID: {food.id}</h1>
                <div class="grid grid-rows-2 pr-48">
                    <h2 >Total number:</h2>
                    <h2 >Date</h2>
                </div>
            </div>
            <div class="grid grid-cols-5 pr-6 pl-6 pt-2 pb-2 ">
                    <div class="text-gray-400">Name Food</div>
                    <div class="place-self-center text-gray-400">Quantity</div>
                    <div class="place-self-center text-gray-400">Money</div>
                    <div class="col-span-2 place-self-center text-gray-400">Note</div>
            </div>
            <div class="grid grid-cols-5 pr-6 pl-6 pt-6 pb-6 ">
                    <div>{food.name}</div>
                    <div class="place-self-center">{food.email}</div>
                    <div class="place-self-center">{food.phone}</div>
                    <div class="flex-wrap col-span-2 place-self-center">{food.website}</div>
            </div>
            <div class="grid grid-cols-5 pr-6 pl-6 pt-4 pb-4">
                    <div></div>
                    <div></div>
                    <div class="place-self-center">Total money</div>
                    <div class="col-span-2 place-self-center">
                        <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full mr-4"> Reject</button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full ml-4"> Confirm</button>
                    </div>
            </div>
		</div>
	);
};

export default Details;
