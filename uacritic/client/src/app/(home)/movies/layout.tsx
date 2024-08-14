import { Inter } from "next/font/google";
import "../../globals.css";
import React from "react";

import {movieGenres} from "@/data_models/Genres";
import FilterSearch from "@/components/ui/FilterSearch/FilterSearch";
import SortBy from "@/components/ui/SortBy/SortBy";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full">
            <div className={`flex flex-col min-h-screen ${inter.className}`}>
                <main className="flex sm:flex-col md:flex-row md:mx-[2vw]">
                    <FilterSearch genres={movieGenres} title={'фільмів'}/>
                    <div className="flex flex-row">
                        {children}
                        <span className="absolute sm:mt-4 md:mt-0 sm:right-[5vw] md:right-[2vw] sm:w-[36vw] md:w-[24vw] lg:w-[14vw]">
                            <SortBy />
                        </span>
                    </div>
                </main>
            </div>
        </div>
    );
}