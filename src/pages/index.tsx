import Home from 'components/Home';
import Head from 'next/head';

import MainLayout from 'layouts/MainLayout';
import { NextPageWithLayout } from 'types/types';

const Index: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>nextJs Boilerplate - Page Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />

      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Variable Name</th>
                <th>Value</th>
                <th>Added By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NEXT_PUBLIC_ENV_VARIABLE</td>
                <td>{process.env.NEXT_PUBLIC_ENV_VARIABLE}</td>
                <td>
                  <code>.env</code>
                </td>
              </tr>
              <tr>
                <td>NEXT_PUBLIC_ENV_LOCAL_VARIABLE</td>
                <td>{process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE}</td>
                <td>
                  <code>.env.local</code>
                </td>
              </tr>
              <tr>
                <td>NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE</td>

                <td>{process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE}</td>
                <td>
                  <code>.env.development</code>
                </td>
              </tr>
              <tr>
                <td>NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE</td>

                <td>{process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE}</td>
                <td>
                  <code>.env.production</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Index;

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

// `getStaticProps`, and similar Next.js methods like `getStaticPaths` and `getServerSideProps`
// only run in Node.js. Check the terminal to see the environment variables
export async function getStaticProps() {
  // Using the variables below in the browser will return `undefined`. Next.js doesn't
  // expose environment variables unless they start with `NEXT_PUBLIC_`
  // console.log('[Node.js only] ENV_VARIABLE:', process.env.ENV_VARIABLE);
  // console.log(
  //   '[Node.js only] ENV_LOCAL_VARIABLE:',
  //   process.env.ENV_LOCAL_VARIABLE
  // );
  // console.log(process.env);

  return { props: {} };
}
