import { FC } from "react";
import GenresItem from "@/components/home_page/ComingSoon/GenresContainer/GenresItem";

const GenresContainer: FC<{ genres: string[] }> = ({ genres }) => {
    return (
        <>
            <ul className="grid sm:grid-cols-1 sm:gap-2 md:grid-cols-3 lg:grid-cols-6 md:gap-4 lg:gap-2 genres-ul mt-[0.5vw]">
                {genres.map((genre, index) => (
                    <li key={index}><GenresItem genre={genre} /></li>
                ))}
            </ul>
        </>
    );
}

export default GenresContainer;