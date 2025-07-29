import { createContext } from 'react';

export const COLORS = {
    slate: {
        name: 'Gris Elegante',
        primary: 'bg-slate-700',
        secondary: 'bg-slate-200',
        text: 'text-slate-700',
    },
    blue: {
        name: 'Azul Profesional',
        primary: 'bg-blue-500',
        secondary: 'bg-blue-200',
        text: 'text-blue-500',
    },
    emerald: {
        name: 'Verde Equilibrado',
        primary: 'bg-cyan-900',
        secondary: 'bg-cyan-50',
        text: 'text-cyan-600',
    },
    indigo: {
        name: 'Índigo Corporativo',
        primary: 'bg-indigo-600',
        secondary: 'bg-indigo-200',
        text: 'text-indigo-600',
    },
    stone: {
        name: 'Piedra Natural',
        primary: 'bg-stone-600',
        secondary: 'bg-stone-200',
        text: 'text-stone-600',
    },
};

export type ColorName = keyof typeof COLORS;

export type ThemeContextProps = {
    currentColor: (typeof COLORS)[ColorName];
    toggleColor: (newColor: ColorName) => void;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);
