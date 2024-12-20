import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ReactQueryClientProvider } from "../ui/ReactQueryClientProvider";

export const metadata: Metadata = {
    title: "UaCritic - Game, Movie, Series, and Music Reviews",
    description: "Explore in-depth reviews and ratings for a variety of games, movies, series, and music. Discover the latest opinions and critiques tailored for fans and enthusiasts.",
    keywords: ["reviews", "UaCritic", "games", "movies", "series", "music", "ratings", "opinions"],
    authors: [{ name: "Denys Hutsan", url: "https://uacritic.com" }],
    robots: "index, follow",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <ReactQueryClientProvider>
            <html lang="en" className="h-full">
                <body className="flex flex-col min-h-screen">
                        {children}
                </body>
            </html>
        </ReactQueryClientProvider>
    );
}
