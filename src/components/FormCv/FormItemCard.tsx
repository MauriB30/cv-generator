import { ChevronDown, ChevronUp, Trash } from 'lucide-react';
import Button from '../shared/Button';

type Props = {
    title: string;
    toggleState: () => void;
    deleteItem: () => void;
    children: React.ReactNode;
    isClosed: boolean;
};

export default function FormItemCard({
    title,
    isClosed,
    deleteItem,
    toggleState,
    children,
}: Props) {
    if (isClosed) {
        return (
            <div className='flex justify-between rounded-md border border-gray-200 bg-white px-4 py-2 font-semibold text-gray-700 shadow-xs shadow-blue-500'>
                <span className='w-1/2 truncate'>{title}</span>
                <div className='space-x-3'>
                    <Button type='button' onClick={deleteItem} variant='danger'>
                        <Trash size={15} />
                    </Button>
                    <Button type='button' onClick={toggleState} variant='icon'>
                        <ChevronDown size={15} />
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className='space-y-3 rounded-md border border-gray-300 p-4 shadow-xs shadow-blue-500'>
            <div className='flex justify-between'>
                <span className='w-[300px] truncate text-sm font-medium text-gray-600'>
                    {title}
                </span>
                <div className='space-x-3'>
                    <Button type='button' variant='danger' onClick={deleteItem}>
                        <Trash size={15} />
                    </Button>
                    <Button onClick={toggleState} type='button' variant='icon'>
                        <ChevronUp size={15} />
                    </Button>
                </div>
            </div>
            {children}
        </div>
    );
}
