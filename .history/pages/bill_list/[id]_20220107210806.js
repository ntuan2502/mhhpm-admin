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

export const getServerSideProps = async (context) => {
	const id = context.params.id;
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
	const food = await res.json();

	return {
		props: { food },
	};
};

const Details = ({ food }) => {
	return (
		<div>
			<h1>{food.name}</h1>
			<p>{food.Details}</p>
		</div>
	);
};

export default Details;
