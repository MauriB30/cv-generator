import type { LucideIcon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

type Props = {
    icon: LucideIcon;
    value: string;
    isLink?: boolean;
};

export default function ContactItem({ value, icon: Icon, isLink }: Props) {
    const { currentColor } = useTheme();

    return (
        <li className='flex items-center gap-2'>
            <Icon size={18} className='shrink-0' />
            {isLink ? (
                <a href={value} className={`${currentColor.text} min-w-0 break-words hover:underline`} target='_blank' rel='noopener noreferrer'>
                    {value}
                </a>
            ) : (
                <span className='min-w-0 break-words'>{value}</span>
            )}
        </li>
    );
}
