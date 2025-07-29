import { BookPlus } from 'lucide-react';
import { Controller, type Control } from 'react-hook-form';
import type { CvData } from '../../types/CvDataTypes';
import TextEditor from '../shared/TextEditor';
import FormSection from './FormSection';

type Props = {
    control: Control<CvData>;
};

export default function FormAdditionalInfo({ control }: Props) {
    return (
        <FormSection title='Información Adicional' icon={<BookPlus />}>
            <Controller
                control={control}
                name='aditionalInfo.description'
                render={({ field }) => <TextEditor value={field.value} onChange={field.onChange} />}
            />
        </FormSection>
    );
}
