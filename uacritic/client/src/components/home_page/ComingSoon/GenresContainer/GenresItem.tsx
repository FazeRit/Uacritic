import { FC } from 'react';

const GenresItem: FC<{ genre: string }> = ({ genre }) => {
    return (
        <div className="bg-gray-400 text-primaryText sm:w-[15vw] break-words md:w-[10vw] md:h-[2vw] lg:h-[1.5vw] lg:w-[6vw] flex justify-center items-center roboto-regular md:text-[2vw] lg:text-[1vw]">
            <p>{genre}</p>
        </div>
    );
}

export default GenresItem;