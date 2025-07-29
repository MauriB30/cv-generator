import type { UseFormRegister } from 'react-hook-form';
import type { CvData } from '../../types/CvDataTypes';
import FormField from './FormField';

type Props = {
    index: number;
    register: UseFormRegister<CvData>;
};

export default function EducationFields({ index, register }: Props) {
    return (
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
    );
}
