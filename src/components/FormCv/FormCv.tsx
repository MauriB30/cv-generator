import { useState } from 'react';
import { useFieldArray, type Control, type UseFormRegister } from 'react-hook-form';
import { COLORS, type ColorName } from '../../contexts/ThemeContext';
import { useTheme } from '../../hooks/useTheme';
import type { CvData } from '../../types/CvDataTypes';
import Button from '../shared/Button';
import FormAdditionalInfo from './FormAdditionalInfo';
import FormContactSection from './FormContactSection';
import FormEducationSection from './FormEducationSection';
import FormExperienceSection from './FormExperienceSection';
import FormPerfilSection from './FormPerfilSection';
import FormTabs from './FormTabs';

type Props = {
    onPrint: () => void;
    register: UseFormRegister<CvData>;
    control: Control<CvData>;
};

const FormSectionTabs = [
    {
        name: 'perfil',
        label: 'Perfil',
    },
    {
        name: 'experiences',
        label: 'Experiencia Laboral',
    },
    {
        name: 'educations',
        label: 'Educación',
    },
    {
        name: 'contact',
        label: 'Contacto',
    },
    {
        name: 'additionalInfo',
        label: 'Información Adicional',
    },
];

export default function FormCv({ onPrint, register, control }: Props) {
    const { currentColor, toggleColor } = useTheme();
    const [activeTab, setActiveTab] = useState(FormSectionTabs[0].name);

    const {
        fields: experienceFields,
        append: appendExperience,
        remove: removeExperience,
    } = useFieldArray({
        control,
        name: 'experiences',
    });

    const {
        fields: educationFields,
        append: appendEducation,
        remove: removeEducation,
    } = useFieldArray({
        control,
        name: 'educations',
    });

    function addExperience() {
        appendExperience({
            company: '',
            description: '',
            position: '',
            year: '',
        });
    }

    function deleteExperience(index: number) {
        removeExperience(index);
    }

    function addEducation() {
        appendEducation({ institution: '', year: '', title: '' });
    }

    function deleteEducation(index: number) {
        removeEducation(index);
    }

    return (
        <form className='space-y-5 rounded-lg bg-gray-200 p-6 shadow-2xl'>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold text-blue-500'>Editor de CV</h2>
                <div className='flex gap-5'>
                    {Object.entries(COLORS).map(([key, value]) => (
                        <button
                            key={key}
                            type='button'
                            onClick={() => toggleColor(key as ColorName)}
                            title={value.name}
                            className={`size-5 cursor-pointer rounded-md transition-all duration-150 ${value.primary} ${currentColor.name === value.name ? 'ring-1 ring-offset-1' : 'border-gray-300'} `}
                        />
                    ))}
                </div>
            </div>

            <FormTabs tabs={FormSectionTabs} activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Sections */}
            {activeTab === 'perfil' && <FormPerfilSection register={register} control={control} />}
            {activeTab === 'experiences' && (
                <FormExperienceSection
                    fields={experienceFields}
                    control={control}
                    register={register}
                    addExperience={addExperience}
                    deleteExperience={deleteExperience}
                />
            )}
            {activeTab === 'educations' && (
                <FormEducationSection
                    fields={educationFields}
                    control={control}
                    register={register}
                    addEducation={addEducation}
                    deleteEducation={deleteEducation}
                />
            )}
            {activeTab === 'contact' && <FormContactSection register={register} />}
            {activeTab === 'additionalInfo' && <FormAdditionalInfo control={control} />}

            {/* Botones de acción */}
            <div className='flex gap-3'>
                <Button type='button' onClick={onPrint} variant='success' className='flex-1'>
                    Descargar PDF
                </Button>
            </div>
        </form>
    );
}
