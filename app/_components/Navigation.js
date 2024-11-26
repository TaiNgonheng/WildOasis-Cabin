import React from 'react'
import Link from "next/link";

const Navigation = () => {
    return (

        <ul>
            <li><
                Link href='/'>Home</Link>
            </li>
            <li><
                Link href='/account'>account</Link>
            </li>
            <li><
                Link href='/about'>about</Link>
            </li>
            <li><
                Link href='/cabins'>Cabin</Link>
            </li>
        </ul>


    )
}
export default Navigation
