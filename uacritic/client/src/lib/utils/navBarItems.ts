import {ReactNode} from "react";

export const navItems = [
    {path: "/movies", label: "🎬 Movies"},
    {path: "/serials", label: "🎥 Serials"},
    {path: "/games", label: "🎮 Games"},
    // {path: "/About", label: "👥 About"},
];

export interface NavbarProps {
    path: string;
    children: ReactNode;
}