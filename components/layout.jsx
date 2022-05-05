import Head from "next/head";
import Script from "next/script";

function Layout({ children, title, description }) {
  return (
    <main className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/3c7014c175.js"
        crossorigin="anonymous"
      />
      {children}
    </main>
  );
}

export default Layout;
