import Link from "next/link";
import Layout from "../../components/Layout";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { food: data },
    revalidate: 10,
  };
};

const Bill = ({ food }) => {
  return (
    <div>
      <h1>All Order</h1>
      {food.map((monan) => (
        <Link href={"/bill/" + monan.id} key={monan.id}>
          <a>
            <h3>{monan.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Bill;

Bill.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
