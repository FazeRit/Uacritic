import {Inter} from "next/font/google";
import "../../globals.css";
import {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <div className={`flex flex-col ${inter.className}`}>
            <main className="flex sm:flex-col md:flex-row md:mx-[2vw]">
                {children}
            </main>
        </div>
    );
}