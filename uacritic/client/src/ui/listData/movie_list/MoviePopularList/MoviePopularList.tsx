import Card from "@/ui/listData/Сard/Card";

const MoviePopularList = () => {
    // const [movieList, setMovieList] = useState([]);

    const movieList = [
        {

        }
    ]

    return <div>
            <ul className="grid lg:grid-cols-4">
                {movieList.map((movie) => {
                    return <li key={movie.id}>
                        <Card item={movie} category={'movies'}/>
                    </li>
                })}
            </ul>
        </div>
}

export default MoviePopularList;