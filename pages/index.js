import { useRouter } from 'next/router'
import useSwr from 'swr'
import Head from 'next/head'
import Welcome from '../components/ui/welcome'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSwr('/api/media', fetcher)
  console.log(data);
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen'>
      <Head>
        <title>Audio Upload</title>
        <meta name='Audio Upload' content="audio upload home page"/> 
      </Head>
      <Welcome />
    </div>
  )
}
