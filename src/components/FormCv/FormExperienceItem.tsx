import { ChevronUp, Trash } from 'lucide-react';
import type { Control, UseFormRegister } from 'react-hook-form';
import type { CvData } from '../../types/CvDataTypes';
import Button from '../shared/Button';
import ExperienceFields from './ExperienceFields';

type Props = {
    index: number;
    deleteExperience: (index: number) => void;
    register: UseFormRegister<CvData>;
    control: Control<CvData>;
    closeExperience: () => void;
};

export default function FormExperienceItem({ index, deleteExperience, register, control, closeExperience }: Props) {
    return (
        <div className='space-y-3 rounded-md border border-gray-200 bg-amber-400 p-4'>
            <div className='flex justify-between'>
                <span className='text-sm font-medium text-gray-600'>Experiencia {index + 1} </span>
                <div className='space-x-3'>
                    <Button type='button' variant='danger' onClick={() => deleteExperience(index)}>
                        <Trash size={15} />
                    </Button>
                    <Button onClick={closeExperience} type='button' variant='icon'>
                        <ChevronUp size={15} />
                    </Button>
                </div>
            </div>

            <ExperienceFields index={index} register={register} control={control} />
        </div>
    );
}
