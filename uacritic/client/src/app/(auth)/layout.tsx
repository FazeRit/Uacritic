import { Inter } from "next/font/google";
import "../globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div lang="en" className="h-full">
            <div className={`flex flex-col min-h-screen ${inter.className}`}>
                {children}
            </div>
        </div>
    );
}