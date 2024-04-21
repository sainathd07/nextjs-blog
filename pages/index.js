import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Sainath Dushatti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <h1>Sainath Dushatti</h1>
       <h3>Welcome to my blog, or whatever!</h3>
      </main>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      </div>
  );
}

      