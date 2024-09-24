import "../globals.css";
import {ReactNode} from "react";
import Header from "@/ui/layout/Header/Header";
import Footer from "@/ui/layout/Footer/Footer";


export default function RootLayout({children}: { children: ReactNode; }) {
    return (
        <div className={`flex flex-col min-h-screen`}>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
}