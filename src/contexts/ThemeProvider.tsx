import { useState } from 'react';
import { COLORS, ThemeContext, type ColorName } from './ThemeContext';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [color, setColor] = useState<ColorName>('blue');

    const currentColor = COLORS[color];

    function toggleColor(newColor: ColorName) {
        setColor(newColor);
    }

    return <ThemeContext.Provider value={{ currentColor, toggleColor }}>{children}</ThemeContext.Provider>;
}
