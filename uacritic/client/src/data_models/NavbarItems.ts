import {ReactNode} from 'react';

export const navItems = [
    { path: "/movies", label: "🎬 Фільми" },
    { path: "/serials", label: "🎥 Серіали" },
    { path: "/music", label: "🎵 Музика" },
    { path: "/games", label: "🎮 Ігри" },
    { path: "/about", label: "👥 Про нас" },
];

export type NavbarProps = {
    path:string;
    children:ReactNode;
}
