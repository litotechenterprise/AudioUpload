import Link from 'next/link'
import AudioIcon from '../icons/audioIcon'
export default function Header (props) {
    return (
        <header className='container flex flex-row'>
            <div className="basis-1/4">
                <Link href='/'>
                    <a>
                        <AudioIcon />
                    </a>
                </Link>
            </div>
            <nav className=''>
                <ul className='flex flex-row'>
                    <li className='className="basis-1/4 mx-4'>
                        <Link href="/upload">Upload</Link>
                    </li>
                    <li className='className="basis-1/4 mx-4'>
                        <Link href="/download">Download</Link>
                    </li>
                    <li className='className="basis-1/4'>
                        <Link href="/analyze">Analyze</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}