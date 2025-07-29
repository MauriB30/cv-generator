import { ChevronUp, Trash } from 'lucide-react';
import type { UseFormRegister } from 'react-hook-form';
import type { CvData } from '../../types/CvDataTypes';
import Button from '../shared/Button';
import FormField from './FormField';

type Props = {
    fieldId: string;
    index: number;
    closeEducation: () => void;
    deleteEducation: (index: number) => void;
    register: UseFormRegister<CvData>;
};

export default function FormEducationItem({
    fieldId,
    index,
    deleteEducation,
    closeEducation,
    register,
}: Props) {
    return (
        <div
            key={fieldId}
            className='space-y-3 rounded-md border border-gray-200 bg-white p-4'
        >
            <div className='flex items-center justify-between'>
                <span className='text-sm font-medium text-gray-600'>
                    Educación {index + 1}
                </span>
                <div className='space-x-3'>
                    <Button
                        variant='danger'
                        onClick={() => deleteEducation(index)}
                    >
                        <Trash size={15} />
                    </Button>
                    <Button
                        onClick={closeEducation}
                        type='button'
                        variant='icon'
                    >
                        <ChevronUp size={15} />
                    </Button>
                </div>
            </div>

            <div className='space-y-3'>
                <FormField
                    label='Título o carrera'
                    placeholder='Título o carrera'
                    name={`educations.${index}.title` as const}
                    register={register}
                />
                <FormField
                    label='Institución'
                    placeholder='Institución'
                    name={`educations.${index}.institution` as const}
                    register={register}
                />
                <FormField
                    label='Año'
                    placeholder='Año (ej: 2018-2022)'
                    name={`educations.${index}.year` as const}
                    register={register}
                />
            </div>
        </div>
    );
}
