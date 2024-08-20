'use client';

import {CardProps} from "@/data_models/CardProps";
import {FC, useState } from "react";
import Card from "@/components/ui/Сard/Card";

const MovieList:FC<CardProps> = () => {
    const [movieList, setMovieList] = useState<CardProps[]>([]);



    return <div className="">
            <ul className="grid lg:grid-cols-4 ">
                {movieList.map((movie) => {
                    return <li key={movie.id}>
                        <Card item={movie}/>
                    </li>
                })}
            </ul>
        </div>
}

export default MovieList;