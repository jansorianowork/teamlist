export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");

  const data = await res.json();

  const paths = data.map((teammate: any) => {
    return {
      params: { id: teammate.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      teammate: data,
    },
  };
};

const Details = ({ teammate }: any) => {
  return (
    <div>
      <h1>{teammate.name}</h1>
      <p><strong>Email:</strong> {teammate.email}</p>
      <p><strong>Contact #:</strong> {teammate.phone}</p>
      <p><strong>Website :</strong> {teammate.website}</p>
      <h4>Address:</h4>
      {teammate.address.street} &nbsp;
      {teammate.address.suite} &nbsp;
      {teammate.address.city} &nbsp;
      {teammate.address.zipcode}
      <h4>Company:</h4>
      {teammate.company.name} 
    </div>
  );
};

export default Details;
