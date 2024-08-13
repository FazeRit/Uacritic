import FilterSearchMovie from '@/ui/listData/movie_list/FilterSearchMovie';
import MoviePopularList from "@/ui/listData/movie_list/MoviePopularList/MoviePopularList";

const MovieList = () => {
    return<div className="flex flex-row">
        <FilterSearchMovie/>
        <MoviePopularList />
    </div>
}

export default MovieList;