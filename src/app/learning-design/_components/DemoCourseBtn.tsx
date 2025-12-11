
export default function DemoCourseBtn() {
    return (
        <button type='button' className="mt-10 flex justify-center items-center gap-x-6 lg:mt-0 lg:shrink-0 font-nexa-book">
            <a
                href="https://visualflowlearning1.s3.eu-west-2.amazonaws.com/ib_demo-version/index.html" 
                target="_blank"
                className="rounded-lg bg-yellow-400 font-semibold text-black px-4 py-3 text-md shadow-xs hover:bg-gray-100 hover:shadow-gray-500 transition-all active:outline-2"
            >
                {' '}
                LAUNCH DEMO COURSE{' '}
            </a>
        </button>
    )    
}
