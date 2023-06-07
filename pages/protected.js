import Head from 'next/head';
import Link from 'next/link';
import {getServerSession} from 'next-auth/next';
import {authOptions} from './api/auth/[...nextauth].js';


async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/unauthorized',
        permanent: false,
      },
    };
  }

  return {
    props: {
      name: session.user?.name ?? 'guest',
    },
  };
}


function Protected({name}) {
  return (
    <>
      <Head>
        <title>Internal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello, {(name.split(' ')[0])}!</h1>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </>
  );
}


export default Protected;
export {getServerSideProps};