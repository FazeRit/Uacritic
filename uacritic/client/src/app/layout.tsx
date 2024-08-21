import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "UaCritic",
    description: "Тут ви можете знайти відгуки про різні ігри, фільми, серіали та музику.   "
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body className={`flex flex-col min-h-screen ${inter.className}`}>
                {children}
            </body>
        </html>
    );
}