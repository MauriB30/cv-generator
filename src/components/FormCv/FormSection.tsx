import Button from '../shared/Button';

type Props = {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    onAdd?: () => void;
};

export default function FormSection({ children, title, icon, onAdd }: Props) {
    return (
        <section className='rounded-md bg-white shadow-xs shadow-blue-500'>
            <div className='flex justify-between rounded-t-md bg-blue-500 px-6 py-3 text-white'>
                <div className='flex space-x-3'>
                    {icon}
                    <h3 className='text-lg font-semibold'>{title}</h3>
                </div>
                {onAdd && (
                    <Button type='button' onClick={onAdd}>
                        + Agregar
                    </Button>
                )}
            </div>
            {children && <div className='space-y-5 p-6'>{children}</div>}
        </section>
    );
}
