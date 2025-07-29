import React from 'react';

type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ children, className, ...rest }: Props) {
    return (
        <label
            {...rest}
            className={`inline-block text-sm font-medium text-gray-700 ${className || ''}`}
        >
            {children}
        </label>
    );
}
