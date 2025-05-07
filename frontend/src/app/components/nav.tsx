import Link from 'next/link';

export default function Nav() {
    return (
        <nav className="row-1 m-auto text-center">
            <ul>
                <li className="flex-auto inline-block"><Link href={{pathname: '/'}}>Home</Link></li>
                <li className="flex-auto inline-block"><Link href={{pathname: '/api/login'}}>Login</Link></li>
                <li className="flex-auto inline-block"><Link href={{pathname: '/api/register'}}>Register</Link></li>
                <li className="flex-auto inline-block"><Link href={{pathname: '/api/persons'}}>Get Persons</Link></li>
                <li className="flex-auto inline-block"><Link href={{pathname: '/api/persons/import'}}>Import Persons</Link></li>
            </ul>
        </nav>
    );
}
