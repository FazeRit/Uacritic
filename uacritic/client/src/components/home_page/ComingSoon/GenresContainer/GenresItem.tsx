import { FC } from "react";

const GenresItem: FC<{ genre: string }> = ({ genre }) => {
    return (
        <div className="bg-gray-400 text-primaryText sm:w-[30vw] break-words md:w-[12vw] md:h-[2.6vw] lg:h-[40px] lg:w-[6vw] flex justify-center items-center roboto-regular sm:text-[13px] md:text-[9px] lg:text-[10px]">
            <p className="lg:px-[0.8vw]">{genre}</p>
        </div>
    );
}

export default GenresItem;