import Link from 'next/link';

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: { food: data },
		revalidate: 10,
	};
};

const ezorder = ({ food }) => {
	return (
		<div>
			<h1>All Order</h1>
			{food.map((monan) => (
				<Link href={'/bill_list/' + monan.id} key={monan.id}>
					<a>
						<h3>{monan.name}</h3>
					</a>
				</Link>
			))}
		</div>
	);
};

export default ezorder;
