import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import React from "react";
import Header from "@/components/home_page/Header/Header";
import Footer from "@/components/home_page/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

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