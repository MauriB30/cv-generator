import { BriefcaseBusiness } from 'lucide-react';
import { useWatch, type Control, type FieldArrayWithId, type UseFormRegister } from 'react-hook-form';
import useExpandible from '../../hooks/useExpandible';
import type { CvData } from '../../types/CvDataTypes';
import ExperienceFields from './ExperienceFields';
import FormItemCard from './FormItemCard';
import FormSection from './FormSection';

type Props = {
    addExperience: () => void;
    deleteExperience: (index: number) => void;
    register: UseFormRegister<CvData>;
    fields: FieldArrayWithId<CvData, 'experiences', 'id'>[];
    control: Control<CvData>;
};

export default function FormExperienceSection({
    addExperience,
    register,
    fields,
    deleteExperience,

    control,
}: Props) {
    const { toggleItem, expanded } = useExpandible();
    const experiences = useWatch({ control, name: 'experiences' });

    return (
        <FormSection onAdd={addExperience} title='Experiencia Laboral' icon={<BriefcaseBusiness color='white' />}>
            {fields.length > 0 &&
                fields.map((field, index) => (
                    <FormItemCard
                        key={field.id}
                        title={experiences[index]?.position || `Experiencia ${index + 1}`}
                        isClosed={expanded[field.id]}
                        toggleState={() => toggleItem(field.id)}
                        deleteItem={() => deleteExperience(index)}
                    >
                        <ExperienceFields index={index} register={register} control={control} />
                    </FormItemCard>
                ))}
        </FormSection>
    );
}
