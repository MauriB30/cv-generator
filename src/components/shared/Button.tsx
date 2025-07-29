const buttonStyles = {
    base: 'text-white rounded-md cursor-pointer',
    variants: {
        primary: 'bg-blue-600 hover:bg-blue-700 px-3 py-1',
        tab: ' hover:bg-blue-600 px-3 py-1 transition-all duration-500',
        success: 'bg-green-600 hover:bg-green-700 px-4 py-2',
        danger: 'bg-red-500 hover:bg-red-600 px-1 py-1',
        icon: 'bg-blue-500 hover:bg-blue-600 px-1 py-1',
    },
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof buttonStyles.variants;
    children: React.ReactNode;
    className?: string;
}

export default function Button({
    variant = 'primary',
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={`${buttonStyles.base} ${buttonStyles.variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
