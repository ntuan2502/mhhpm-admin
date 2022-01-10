import { getSession } from "next-auth/react";
import Layout from "../../components/Layout";

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  const id = ctx.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { food: data },
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

Details.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
