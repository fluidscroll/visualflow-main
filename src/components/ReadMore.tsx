import Link from 'next/link'
import { ChevronsDown } from 'lucide-react'


export default function ReadMore() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <span className='font-open-sans font-bold text-xl'>
                Read More
            </span>
            <Link
                href='/learning-design#case-studies'
            >
                <ChevronsDown size={80} strokeWidth={1.5} />
            </Link>

        </div>
    )
}