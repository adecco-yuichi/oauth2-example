import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useSession, signIn, signOut} from 'next-auth/react';
import styles from '../styles/Home.module.css';


function Home() {
  const {data: session, status} = useSession();

  if (status === 'loading') {
    return (<p>Hang on there...</p>);
  }

  if (status === 'authenticated') {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <p>Signed in as</p>
        <p>
          {session?.user?.name}
          <br />
          {session?.user?.email}
          <br />
          <Image
            className={styles.profileImage}
            src={session?.user?.image}
            alt="Google profile image"
            width={50}
            height={50}
          />
        </p>
        <button onClick={() => signOut()}>
          Sign out
        </button>
        <p>
          Can you access <Link href="/protected">this protected page?</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Not signed in.</p>
      <button onClick={() => signIn('google')}>
        Sign in with Google
      </button>
      <p>
        Can you access <Link href="/protected">this protected page?</Link>
      </p>
    </div>
  );
}


export default Home;