import styles from '@/styles/Team.module.css'

export const getStaticProps =async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  return {
    props:{team:data}
  }
  
}

import Head from "next/head";
import Link from 'next/link';


const Team = ({team}:any) => {

  return (
    <>
      <Head>
        <title>Team List | Lists</title>
        <meta name="keywords" content="Team" />
      </Head>
      <div>
        <h1>Team</h1>
       {team.map((teammate:any)=>(
        <Link key={teammate.id} href={'/team/' + teammate.id}>
          <div className={styles.single}>
            <h3>
              {teammate.name}
            </h3>
            {/* <h4>
              {teammate.address.street} &nbsp;
              {teammate.address.suite} &nbsp;
              {teammate.address.city} &nbsp;
              {teammate.address.zipcode}
            </h4>
            <p>
              {teammate.phone}
            </p> */}
          </div>
          </Link>
       ))}
      </div>
    </>
  );
};

export default Team;
