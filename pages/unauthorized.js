import Head from 'next/head';
import Link from 'next/link';


function Unauthorized() {
  return (
    <>
      <Head>
        <title>Unauthorized</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Unauthorized</h1>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </>
  );
}


export default Unauthorized;