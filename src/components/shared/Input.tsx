export default function Input({
    className,
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
    const baseStyles =
        'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500';

    return <input {...props} className={`${baseStyles} ${className || ''}`} />;
}


