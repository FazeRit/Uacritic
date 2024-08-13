import GenresPicker from "@/ui/listData/movie_list/GenresPicker";
import { movieGenres } from "@/data_models/Genres";
import MultiRangeSlider from "@/ui/listData/MultiRangeSlider/MultiRangeSlider";
import SortBy from "@/ui/listData/SortBy/SortBy";

const FilterSearchMovie = () => {

    return (
        <form className="flex flex-col roboto-medium text-primaryText shadow-xl sm:mt-[2vw] md:mt-[3vw] lg:mt-[2vw] sm:mx-auto md:mx-0 md:ml-[2vw] sm:w-[90%]     md:w-60 lg:w-72 rounded-xl roboto-medium">
            <div className="rounded-t-xl bg-primaryText sm:h-4 md:h-6"></div>
            <label htmlFor="searchBar" className="sm:text-2xl md:text-xl mx-auto md:mt-3">Пошук</label>
            <div className="border-b-4 md:mx-[2vw] lg:mx-[1vw]"></div>
            <input type="text" id="searchBar"
                   className="sm:mx-[10vw] md:mx-[2vw] lg:mx-[1vw] sm:mt-5 md:mt-3 lg:mt-3 bg-white focus:outline focus:outline-primaryText rounded-3xl sm:text-md sm:h-6 md:h-7 sm:px-[4vw] md:px-[1vw]"
                   placeholder="Пошук фільмів"/>
            <GenresPicker genres={movieGenres}/>
            <label className="mx-auto border-t-4 sm:mx-[6vw] md:mx-[2vw] lg:mx-[1vw] sm:mt-3 sm:pt-3 md:text-md text-primaryText">Рік</label>
            <MultiRangeSlider min={1960} max={2024}/>
            <label className="mx-auto border-t-4 w-[86%] lg:text-md sm:mt-6 sm:pt-3 md:mt-6 md:pt-3 text-primaryText">Рейтинг</label>
            <MultiRangeSlider min={1} max={10}/>
            <div className="border-b-4 sm:pt-6 w-[86%] mx-auto"></div>
            <SortBy />
            <div className="bg-primaryText sm:h-4 md:h-6 rounded-b-xl w-full sm:mt-4 border-primaryText flex justify-center items-center"></div>
        </form>
    );

}

export default FilterSearchMovie;