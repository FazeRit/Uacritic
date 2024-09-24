import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";


export const metadata: Metadata = {
    title: "UaCritic",
    description: "Тут ви можете знайти відгуки про різні ігри, фільми, серіали та музику.   "
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
        <body className={`flex flex-col min-h-screen`}>
        {children}
        </body>
        </html>
    );
}