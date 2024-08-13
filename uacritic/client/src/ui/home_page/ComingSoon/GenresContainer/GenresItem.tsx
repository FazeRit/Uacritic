import { FC } from "react";

const GenresItem: FC<{ genre: string }> = ({ genre }) => {
    return (
        <div className="bg-gray-400 text-primaryText sm:w-[30vw] break-words lg:pl-0 md:w-[13vw] sm:h-[4.6vw] md:h-[4.2vw] lg:h-[40px] lg:w-[7vw] flex justify-center items-center roboto-regular sm:text-[12px] lg:text-[13px]">
            <p className="lg:px-[0.8vw]">{genre}</p>
        </div>
    );
}

export default GenresItem;