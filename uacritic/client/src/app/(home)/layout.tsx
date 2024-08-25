import {Inter} from "next/font/google";
import "../globals.css";
import {ReactNode} from "react";
import Header from "@/ui/layout/Header/Header";
import Footer from "@/ui/layout/Footer/Footer";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
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