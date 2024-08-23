import {Inter} from "next/font/google";
import "../globals.css";
import React from "react";
import Header from "@/components/ui/Header/Header";
import Footer from "@/components/ui/Footer/Footer";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`flex flex-col min-h-screen ${inter.className}`}>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
}