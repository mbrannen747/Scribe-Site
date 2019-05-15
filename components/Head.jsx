import Head from 'next/head';
export default ({title}) => {
    return <Head>
        <title>Scribe Sciences{title ? ` | ${title}` : ""}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Barlow:200,500" rel="stylesheet"></link>
        <link rel="icon" type="image/png"  href="/static/favicon.png"></link>
    </Head>
}