import { Inter } from "next/font/google";
import "../../globals.css";
import React from "react";

import {movieGenres} from "@/data_models/Genres";
import FilterSearch from "@/components/ui/FilterSearch/FilterSearch";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full">
            <div className={`flex flex-col min-h-screen ${inter.className}`}>
                <main className="flex-grow">
                    <FilterSearch genres={movieGenres} title={'серіалів'}/>
                    {children}
                </main>
            </div>
        </div>
    );
}