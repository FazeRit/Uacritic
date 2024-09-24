import "../globals.css";
import React from "react";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div lang="en" className="h-full">
            <div className={`flex flex-col min-h-screen`}>
                {children}
            </div>
        </div>
    );
}