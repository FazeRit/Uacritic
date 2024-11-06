import Link from 'next/link';
import Image from 'next/image';
import notFoundHedgehog from '@/assets/logo/notFoundHedgehog.svg';

const NotFound = () => {
    return (
        <div
            className="lg:mt-[5vw] md:mt-[10vw] md:mx-[20vw] lg:mx-[30vw] md:w-[60vw] lg:w-[40vw] sm:mt-[10vw] sm:mx-[10vw] sm:w-[80vw]">
            <div className="flex flex-row lg:h-[10vw] md:h-[20vw] sm:h-[30vw]">
                <Image src={notFoundHedgehog} alt='cute hedgehog'
                       className="lg:w-[20vw] md:w-[30vw] md:h-[20vw] lg:h-[10vw] sm:w-[40vw] sm:h-[30vw]" width={200}
                       height={200}/>
                <h2 className="lg:text-[7vw] md:text-[13vw] sm:text-[16vw] md:pt-[1.4vw] lg:pt-[0.6vw] sm:pt-[5vw] md:w-[40vw] sm:w-[50vw] lg:w-[20vw] md:h-[20vw] lg:h-[10vw] sm:h-[30vw] roboto-medium">404</h2>
            </div>
            <div className="lg:h-[15vw] md:h-[20vw] sm:h-[40vw] flex flex-col">
                <p className="mx-auto lg:text-[3vw] md:text-[5vw] sm:text-[7vw] roboto-bold">Page Not Found</p>
                <p className="lg:h-[6vw] sm:h-[10vw] mx-auto text-primaryText text-center"></p>
                Sorry, the page you are looking for does not exist. It might have been moved or deleted.
                <Link
                    className="bg-purple-600 rounded-xl md:h-[10vw] sm:h-[12vw] md:mt-[2vw] lg:mt-[1vw] sm:mt-[4vw] lg:h-[8w] md:px-[4vw] lg:px-[4vw] sm:px-[6vw] mx-auto flex items-center justify-center text-center text-white hover:bg-purple-300 hover:text-black shadow-text focus:bg-purple-300 focus:text-black active:bg-purple-700 active:text-white"
                    href="/"
                >
                    Return to Main Page
                </Link></div>
        </div>
    )
}

export default NotFound;