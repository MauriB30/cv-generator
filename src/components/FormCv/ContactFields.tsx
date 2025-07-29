import type { UseFormRegister } from 'react-hook-form';
import type { CvData } from '../../types/CvDataTypes';
import FormField from './FormField';

type Props = {
    register: UseFormRegister<CvData>;
};

const CONTACT_FIELDS = [
    {
        name: 'contact.location',
        label: 'Ubicación',
        placeholder: 'Ciudad, País o tu Dirección',
        type: 'text',
    },
    {
        name: 'contact.email',
        label: 'Email',
        placeholder: 'correo@ejemplo.com',
        type: 'email',
        required: true,
    },
    {
        name: 'contact.phone',
        label: 'Teléfono',
        placeholder: '+54 9 11 1234-5678',
        type: 'tel',
    },
    {
        name: 'contact.linkedin',
        label: 'LinkedIn',
        placeholder: 'https://linkedin.com/in/tu-perfil',
        type: 'url',
    },
    {
        name: 'contact.github',
        label: 'GitHub',
        placeholder: 'GitHub (URL completa)',
        type: 'url',
    },
    {
        name: 'contact.portfolio',
        label: 'Portfolio',
        placeholder: 'Portfolio (URL completa)',
        type: 'url',
    },
    {
        name: 'contact.languages',
        label: 'Idiomas',
        placeholder: 'Ej: español, inglés, francés',
        type: 'text',
    },
] as const;

export default function ContactFields({ register }: Props) {
    return (
        <div className='space-y-3'>
            {CONTACT_FIELDS.map((field) => (
                <FormField label={field.label} placeholder={field.placeholder} name={field.name} register={register} type={field.type} />
            ))}
        </div>
    );
}
