import { GraduationCap } from 'lucide-react';
import { useWatch, type Control, type FieldArrayWithId, type UseFormRegister } from 'react-hook-form';
import useExpandible from '../../hooks/useExpandible';
import type { CvData } from '../../types/CvDataTypes';
import EducationFields from './EducationFields';
import FormItemCard from './FormItemCard';
import FormSection from './FormSection';

type Props = {
    control: Control<CvData>;
    addEducation: () => void;
    deleteEducation: (index: number) => void;
    register: UseFormRegister<CvData>;
    fields: FieldArrayWithId<CvData, 'educations', 'id'>[];
};

export default function FormEducationSection({ fields, register, addEducation, deleteEducation, control }: Props) {
    const { expanded, toggleItem } = useExpandible();
    const educations = useWatch({ control, name: 'educations' });

    return (
        <FormSection title='Educación' icon={<GraduationCap color='white' />} onAdd={addEducation}>
            {fields.length > 0 &&
                fields.map((field, index) => (
                    <FormItemCard
                        key={field.id}
                        title={educations[index]?.title || `Educación ${index + 1}`}
                        isClosed={expanded[field.id]}
                        toggleState={() => toggleItem(field.id)}
                        deleteItem={() => deleteEducation(index)}
                    >
                        <EducationFields index={index} register={register} />
                    </FormItemCard>
                ))}
        </FormSection>
    );
}
