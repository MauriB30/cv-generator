import { Upload } from 'lucide-react';
import type { Path, UseFormRegister } from 'react-hook-form';
import type { CvData } from '../../types/CvDataTypes';
import Input from '../shared/Input';

type Props = {
    name: Path<CvData>;
    register: UseFormRegister<CvData>;
};

export default function FormFieldFile({ name, register }: Props) {
    return (
        <div className='w-fit rounded-md border border-gray-300 p-2'>
            <label
                className='flex cursor-pointer gap-5'
                htmlFor={`field-${name}`}
            >
                <Upload />
                Ingresa tu foto
            </label>
            <Input
                id={`field-${name}`}
                type='file'
                accept='image/*'
                {...register(name)}
                className='hidden'
            />
        </div>
    );
}
