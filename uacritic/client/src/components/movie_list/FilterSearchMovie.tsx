const FilterSearchMovie = () =>{
    return <form className="flex flex-col roboto-medium text-primaryText">
        <label htmlFor="searchBar">Search</label>
        <input type="text" id="searchBar" placeholder="Search Movie"/>
        <label htmlFor="genresSearch">Genre</label>
        <select id="genresSearch">
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
        </select>
        <button type="submit">Apply filters</button>
    </form>
}

export default FilterSearchMovie;