import { Controller, type Control, type UseFormRegister } from 'react-hook-form';
import type { CvData } from '../../types/CvDataTypes';
import Label from '../shared/Label';
import TextEditor from '../shared/TextEditor';
import FormField from './FormField';

type Props = {
    index: number;
    register: UseFormRegister<CvData>;
    control: Control<CvData>;
};

export default function ExperienceFields({ index, register, control }: Props) {
    return (
        <div className='space-y-3'>
            <div className='grid grid-cols-2 gap-3'>
                <FormField label='Puesto' placeholder='Puesto' name={`experiences.${index}.position` as const} register={register} />
                <FormField label='Empresa' placeholder='Empresa' name={`experiences.${index}.company` as const} register={register} />
            </div>
            <div>
                <FormField label='Año' placeholder='Año (ej: 2020-2023)' name={`experiences.${index}.year` as const} register={register} />
            </div>
            <div className='space-y-5'>
                <Label>Descripción del puesto y responsabilidades</Label>
                <Controller
                    control={control}
                    name={`experiences.${index}.description` as const}
                    render={({ field }) => <TextEditor value={field.value} onChange={field.onChange} />}
                />
            </div>
        </div>
    );
}
