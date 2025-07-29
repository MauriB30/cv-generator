import type { Path, UseFormRegister } from 'react-hook-form';
import type { CvData } from '../../types/CvDataTypes';
import Input from '../shared/Input';
import Label from '../shared/Label';

type Props = {
    type?: React.HTMLInputTypeAttribute;
    label: string;
    name: Path<CvData>;
    placeholder: string;
    register: UseFormRegister<CvData>;
};

export default function FormField({ type = 'text', name, label, placeholder, register }: Props) {
    const id = `field-${name}`;
    return (
        <div className='space-y-1'>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} placeholder={placeholder} {...register(name)} />
        </div>
    );
}
