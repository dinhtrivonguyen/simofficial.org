import Head from 'next/head';

const SEO = ({ pageTitle, font }) => (
    <Head>
        <title>{pageTitle && `${pageTitle} | SHE INSPIRES ME`}</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="noindex, follow" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* <link
            href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
        /> */}
    </Head>
);

export default SEO;
