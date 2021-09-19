import Head from 'next/head'

export default function Home() {
  // jsx (codigo html com react)
  let title = 'Meu primeiro WebApp!';
  return (
    <div >
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      </main>

      
    </div>
  )
}
